// Half-screen drawer behavior for Resume page
// Reuses the same markup/classes as the Projects drawer styles

(function () {
  function qs(id) { return document.getElementById(id); }

  const drawer = qs('project-drawer');
  const backdrop = qs('drawer-backdrop');
  const drawerTitle = qs('project-drawer-title');
  const drawerImage = qs('drawer-image');
  const drawerText = qs('drawer-text');
  const drawerClose = qs('drawer-close');
  const openBtn = qs('open-courses');
  const coursesContent = qs('courses-content');
  const downloadBtn = qs('download-resume');

  if (!drawer || !backdrop || !drawerTitle || !drawerText || !drawerClose) {
    // Missing markup; do nothing.
    return;
  }

  let previouslyFocused = null;

  function isDrawerOpen() {
    return drawer.classList.contains('open');
  }

  function openDrawer({ title, html, text, imageSrc }) {
    previouslyFocused = document.activeElement;
    drawerTitle.textContent = title || 'Details';
    if (imageSrc) {
      drawerImage.src = imageSrc;
      drawerImage.style.display = '';
    } else {
      drawerImage.removeAttribute('src');
      drawerImage.style.display = 'none';
    }
    if (typeof html === 'string' && html.length) {
      drawerText.innerHTML = html;
    } else {
      drawerText.textContent = text || '';
    }

    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    backdrop.classList.add('open');
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    setTimeout(() => drawerClose.focus(), 0);
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    backdrop.classList.remove('open');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (previouslyFocused && typeof previouslyFocused.focus === 'function') {
      previouslyFocused.focus();
    }
  }

  // Wire close interactions
  drawerClose.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);

  // Esc and focus trap
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isDrawerOpen()) {
      e.preventDefault();
      closeDrawer();
    }
    if (e.key === 'Tab' && isDrawerOpen()) {
      const focusables = drawer.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  // Open drawer when clicking the Courses button
  if (openBtn) {
    openBtn.addEventListener('click', () => {
      const html = coursesContent && coursesContent.innerHTML
        ? coursesContent.innerHTML
        : '<p>Course list coming soon.</p>';
      openDrawer({ title: "Full Course List", html });
    });
  }

  // // Download Resume button: Preview Resume in a new tab (no forced download)
  // if (downloadBtn) {
  //   downloadBtn.addEventListener('click', (e) => {
  //     const url = downloadBtn.getAttribute('data-url') || '/Resume-Hershey Marbeda.pdf';
  //     const newTab = window.open(url, '_blank');
  //     if (newTab) {
  //       newTab.opener = null; // security: no access back to this window
  //       newTab.focus(); // ensure the new tab gets focus
  //     } else {
  //       // Fallback if popup blocked - use current window
  //       window.location.href = url;
  //     }
  //   });
  // }

  // Initialize Bootstrap Popovers globally (requires bootstrap.bundle.js)
  // Will activate any element with data-bs-toggle="popover"
  (function initPopovers() {
    if (!window.bootstrap) return; // Bootstrap JS not loaded
    const triggers = document.querySelectorAll('[data-bs-toggle="popover"]');
    if (!triggers.length) return;
    triggers.forEach((el) => {
      if (bootstrap.Popover.getInstance(el)) return; // already initialized
      new bootstrap.Popover(el, {
        container: el.getAttribute('data-bs-container') || 'body',
        placement: el.getAttribute('data-bs-placement') || 'right',
        trigger: el.getAttribute('data-bs-trigger') || 'focus'
      });
    }); 
  })();

})();