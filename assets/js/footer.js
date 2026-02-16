<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 756cfb6f9012beee9c58a046526ab9a431ad96bd
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
<<<<<<< HEAD
=======
=======
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
>>>>>>> 36711d8c1529d7187527e0c5c7a821df6b60968f
>>>>>>> 756cfb6f9012beee9c58a046526ab9a431ad96bd
