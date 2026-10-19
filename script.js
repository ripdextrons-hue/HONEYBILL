
document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation
  const menuToggle = document.getElementById('menuToggle');
  const navigation = document.getElementById('navigation');

  if (menuToggle && navigation) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navigation.classList.toggle('open');

      menuToggle.setAttribute('aria-expanded', isOpen);
      menuToggle.setAttribute(
        'aria-label',
        isOpen ? 'Close menu' : 'Open menu'
      );

      menuToggle.textContent = isOpen ? '✕' : '☰';
    });

    navigation.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navigation.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Open menu');
        menuToggle.textContent = '☰';
      });
    });
  }

  // Scroll reveal animations
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12
    });

    revealElements.forEach(element => observer.observe(element));
  } else {
    revealElements.forEach(element => {
      element.classList.add('visible');
    });
  }

  // Automatically update copyright year
  const yearElement = document.getElementById('year');

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
