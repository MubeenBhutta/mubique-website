
// Import Header
fetch('./component/header.html')
  .then(res => res.text())
  .then(data => {
    document.body.insertAdjacentHTML('afterbegin', data);
    const menuBtn = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuBtn) { // add safety check
      menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('show');
      });
    }
  });

// Import Footer
fetch('./component/footer.html')
  .then(res => res.text())
  .then(data => {
    document.body.insertAdjacentHTML('beforeend', data);
    const yearElem = document.getElementById('year');
    if (yearElem) yearElem.textContent = new Date().getFullYear();
  });
