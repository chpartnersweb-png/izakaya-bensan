const toggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
const dialog = document.querySelector<HTMLDialogElement>('#mobile-menu');
if (toggle && dialog) {
  toggle.addEventListener('click', () => {
    dialog.showModal();
    toggle.setAttribute('aria-expanded', 'true');
    document.documentElement.classList.add('menu-is-open');
  });
  const closeMenu = () => dialog.close();
  dialog.querySelector('.menu-close')?.addEventListener('click', closeMenu);
  dialog.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  dialog.addEventListener('click', (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeMenu();
  });
  dialog.addEventListener('close', () => {
    toggle.setAttribute('aria-expanded', 'false');
    document.documentElement.classList.remove('menu-is-open');
  });
  window.matchMedia('(min-width: 1080px)').addEventListener('change', (event) => {
    if (event.matches && dialog.open) closeMenu();
  });
}
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08 });
  document.querySelectorAll<HTMLElement>('.reveal').forEach((element) => {
    element.classList.add('will-reveal');
    observer.observe(element);
  });
  reducedMotion.addEventListener('change', (event) => {
    if (!event.matches) return;
    observer.disconnect();
    document.querySelectorAll('.will-reveal').forEach((element) => element.classList.add('is-visible'));
  });
}
