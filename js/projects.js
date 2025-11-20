// Toggle expand/collapse for long project descriptions on the Projects page
// Works without any dependencies

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.projects-content .card');

  // Drawer elements
  const drawer = document.getElementById('project-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  const drawerTitle = document.getElementById('project-drawer-title');
  const drawerImage = document.getElementById('drawer-image');
  const drawerText = document.getElementById('drawer-text');
  const drawerClose = document.getElementById('drawer-close');

  // Accessibility state
  let previouslyFocused = null;

  function isDrawerOpen() {
    return drawer && drawer.classList.contains('open');
  }

  function openDrawer({ title, imageSrc, html, text }) {
    if (!drawer) return; // Fail-safe if drawer isn't present
    previouslyFocused = document.activeElement;
    drawerTitle.textContent = title || 'Project';
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
    if (backdrop) {
      backdrop.classList.add('open');
      backdrop.setAttribute('aria-hidden', 'false');
    }
    document.body.style.overflow = 'hidden';
    // Move focus to close button for accessibility
    setTimeout(() => {
      if (drawerClose) drawerClose.focus();
    }, 0);
  }

  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    if (backdrop) {
      backdrop.classList.remove('open');
      backdrop.setAttribute('aria-hidden', 'true');
    }
    document.body.style.overflow = '';
  }

  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  // Global key handling: ESC to close and focus trap within drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isDrawerOpen()) {
      e.preventDefault();
      closeDrawer();
      if (previouslyFocused && typeof previouslyFocused.focus === 'function') {
        previouslyFocused.focus();
      }
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

  // Setup per-card interactions
  cards.forEach((card) => {
    const btn = card.querySelector('.btn-toggle');
    const text = card.querySelector('.card-text');
    const img = card.querySelector('.card-img-top');
    const titleEl = card.querySelector('.card-title');
    if (!btn || !text) return;

    // Auto-hide inline "Read more" if text isn't actually overflowing
    if (btn.dataset.mode !== 'drawer') {
      const isOverflowing = text.scrollHeight > text.clientHeight + 1;
      if (!isOverflowing) {
        btn.style.display = 'none';
      }
    }

    btn.addEventListener('click', () => {
      // If button is marked to use drawer, open the half-screen panel instead of inline expand
      if (btn.dataset.mode === 'drawer') {
        openDrawer({
          title: titleEl ? titleEl.textContent.trim() : 'Project',
          imageSrc: img ? img.getAttribute('src') : '',
          html: text.innerHTML,
        });
        return;
      }

      // Default behavior: expand inline only for this card
      const expanded = card.classList.toggle('expanded');
      btn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      btn.textContent = expanded ? 'Read less' : 'Read more';
    });
  });
});