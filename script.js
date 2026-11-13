const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

const setMenu = (open) => {
  menuButton.setAttribute('aria-expanded', String(open));
  const en = window.currentLang === 'en';
  menuButton.setAttribute('aria-label', open ? (en ? 'Close menu' : 'Fechar menu') : (en ? 'Open menu' : 'Abrir menu'));
  mobileNav.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
};

menuButton?.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
mobileNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const filterButtons = document.querySelectorAll('.filters button');
const projects = document.querySelectorAll('[data-cat]');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle('active', item === button));
    projects.forEach((project) => {
      const show = filter === 'todos' || project.dataset.cat === filter;
      project.classList.toggle('is-hidden', !show);
      if (show) project.classList.add('visible');
    });
  });
});

document.querySelector('#ano').textContent = new Date().getFullYear();
