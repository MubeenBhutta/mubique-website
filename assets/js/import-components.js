// Import Header
fetch('./component/header.html')
  .then(res => res.text())
  .then(data => {
    const headerDiv = document.getElementById('header');
    if(headerDiv) headerDiv.innerHTML = data;

    const menuBtn = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if(menuBtn) menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  });

// Import Footer
fetch('./component/footer.html')
  .then(res => res.text())
  .then(data => {
    const footerDiv = document.getElementById('footer');
    if(footerDiv) footerDiv.innerHTML = data;

    const yearElem = document.getElementById('year');
    if(yearElem) yearElem.textContent = new Date().getFullYear();
  });

// Portfolio slider code (unchanged)
const portfolioSlider = document.querySelector(".portfolio-slider");
let isDown = false, startX, scrollLeft;

portfolioSlider.addEventListener("mousedown", e => {
  isDown = true;
  startX = e.pageX - portfolioSlider.offsetLeft;
  scrollLeft = portfolioSlider.scrollLeft;
});
portfolioSlider.addEventListener("mouseleave", () => isDown = false);
portfolioSlider.addEventListener("mouseup", () => isDown = false);
portfolioSlider.addEventListener("mousemove", e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - portfolioSlider.offsetLeft;
  const walk = (x - startX) * 2;
  portfolioSlider.scrollLeft = scrollLeft - walk;
});
