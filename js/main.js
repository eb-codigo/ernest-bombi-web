// ═══════════════════════════════════════
// Ernest Bombí — main.js
// ═══════════════════════════════════════

// ── Nav mobile toggle ──
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggle?.addEventListener('click', () => {
  const isOpen = navLinks.style.display === 'flex';
  navLinks.style.display = isOpen ? 'none' : 'flex';
  navLinks.style.flexDirection = 'column';
  navLinks.style.position = 'absolute';
  navLinks.style.top = '100%';
  navLinks.style.left = '0';
  navLinks.style.right = '0';
  navLinks.style.background = 'var(--crema)';
  navLinks.style.padding = '1.5rem 5%';
  navLinks.style.borderBottom = '1px solid rgba(107,58,42,0.15)';
});

// Cierra el menú al hacer click en un link
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.style.display = 'none';
  });
});

// ── Nav: fondo al hacer scroll ──
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.style.boxShadow = '0 2px 20px rgba(26,26,26,0.08)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// ── Scroll reveal: aparición suave de secciones ──
const revealEls = document.querySelectorAll(
  '.sobre-text, .sobre-character, .track-card, .musica h2, .contacto h2'
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealEls.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`;
  observer.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
  // Añade clase .visible que activa la transición
  document.querySelectorAll('.visible-init').forEach(el => {
    el.classList.add('visible');
  });
});

// Clase que activa la visibilidad
const style = document.createElement('style');
style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(style);
