(function () {
    document.addEventListener('DOMContentLoaded', function () {
        try {
            var main = document.querySelector('main');
            if (!main) return;

            // Heuristic: consider the page "empty/broken" when it has no child elements
            // or very little text content. Adjust threshold if needed.
            var hasChildren = main.children.length > 0;
            var textLength = (main.textContent || '').trim().length;
            var isEmpty = !hasChildren || textLength < 30;
            if (!isEmpty) return;

            var fallbackUrl = "{{ '/404.html' | relative_url }}";
            fetch(fallbackUrl, { method: 'GET', cache: 'no-store' })
                .then(function (resp) {
                    if (!resp.ok) throw new Error('fallback fetch failed');
                    return resp.text();
                })
                .then(function (html) {
                    var parser = new DOMParser();
                    var doc = parser.parseFromString(html, 'text/html');
                    // Prefer the section with class page-404, otherwise use body
                    var fallback = doc.querySelector('.page-404') || doc.body;
                    if (fallback) {
                        // Clear the current main and insert the fallback nodes
                        main.innerHTML = '';
                        var imported = document.importNode(fallback, true);
                        // If we inserted a <body>, grab its children to avoid nested body tags
                        if (imported.tagName === 'BODY') {
                            while (imported.firstChild) {
                                main.appendChild(imported.firstChild);
                            }
                        } else {
                            main.appendChild(imported);
                        }
                    }
                })
                .catch(function () {
                    // silent fail: if fallback fetch fails, leave page as-is
                });
        } catch (e) {
            // silent catch — don't break the page if anything unexpected happens
            console && console.error && console.error('404 fallback error:', e);
        }
    });
})();