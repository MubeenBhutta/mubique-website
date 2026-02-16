// Update year
document.getElementById('year').textContent = new Date().getFullYear();

// Back to top button
document.getElementById('back-to-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Newsletter submission (dummy)
document.getElementById('subscribe-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for subscribing!');
  e.target.reset();
});
