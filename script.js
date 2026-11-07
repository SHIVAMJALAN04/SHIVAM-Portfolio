// ---------- Current year in footer ----------
document.getElementById('year').textContent = new Date().getFullYear();

// ---------- Nav shadow on scroll ----------
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 12);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// ---------- Mobile menu ----------
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// ---------- Scroll reveal ----------
const revealTargets = document.querySelectorAll(
  '.about-card, .skill-card, .project-card, .edu-card, .contact-links a, .section h2, .lead, .note'
);

revealTargets.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 70);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealTargets.forEach(el => observer.observe(el));

// ---------- Active nav link while scrolling ----------
const sections = [...document.querySelectorAll('section[id]')];
const navAnchors = [...navLinks.querySelectorAll('a[href^="#"]')];

const spy = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = entry.target.id;
    navAnchors.forEach(a => {
      const isActive = a.getAttribute('href') === `#${id}`;
      a.style.color = isActive ? 'var(--ink)' : '';
      a.style.fontWeight = isActive ? '600' : '';
    });
  });
}, { threshold: 0.35 });

sections.forEach(s => spy.observe(s));
