fetch('./component/header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
    const menuBtn = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if(menuBtn) menuBtn.addEventListener('click', () => navLinks.classList.toggle('show'));
  });

// Import Footer
fetch('./component/footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
    document.getElementById('year').textContent = new Date().getFullYear();
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
