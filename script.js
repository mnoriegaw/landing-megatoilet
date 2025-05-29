// script.js
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const section = document.querySelector(link.getAttribute('href'));
      document.querySelectorAll('.full-text').forEach(el => el.style.display = 'none');
      section.querySelector('.full-text').style.display = 'block';
      section.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
