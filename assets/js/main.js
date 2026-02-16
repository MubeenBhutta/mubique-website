
document.addEventListener("DOMContentLoaded", () => {

  const testimonials = document.querySelectorAll(".testimonial-card");
  const nextBtn = document.querySelector(".testimonial-next");
  const prevBtn = document.querySelector(".testimonial-prev");
  const pagination = document.querySelector(".testimonial-pagination");

  if (!testimonials.length) return;

  let currentIndex = 0;
  const total = testimonials.length;

  // Create pagination dots
  for (let i = 0; i < total; i++) {
    const dot = document.createElement("span");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(i));
    pagination.appendChild(dot);
  }

  function updateSlider(index) {
    testimonials.forEach((card, i) => {
      card.classList.toggle("active", i === index);
    });

    document.querySelectorAll(".testimonial-pagination span").forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % total;
    updateSlider(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + total) % total;
    updateSlider(currentIndex);
  }

  function goToSlide(index) {
    currentIndex = index;
    updateSlider(currentIndex);
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  setInterval(nextSlide, 4000);

  updateSlider(currentIndex);
});
