// Menu mobile
const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav_list');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  toggle.classList.toggle('open');
});

// Rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// ScrollReveal animações
ScrollReveal({ distance: '60px', duration: 1000, easing: 'ease-out' });

ScrollReveal().reveal('.hero-content', { origin: 'top' });
ScrollReveal().reveal('.quem-somos .content', { origin: 'left' });
ScrollReveal().reveal('.card', { interval: 200, origin: 'bottom' });
ScrollReveal().reveal('.produtos img', { interval: 150, origin: 'right' });
ScrollReveal().reveal('.contato', { origin: 'bottom' });
