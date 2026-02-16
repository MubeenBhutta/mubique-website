// Contact Form Submit (dummy functionality)
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thank you for contacting Mubique! We will reach out soon.');
  contactForm.reset();
});
