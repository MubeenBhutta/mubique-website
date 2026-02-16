<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 756cfb6f9012beee9c58a046526ab9a431ad96bd
/* services.js
   - filters
   - reveal using IntersectionObserver
   - card mouse tilt
   - details modal (simple)
*/

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Reveal with IntersectionObserver ---------- */
  const revealTargets = document.querySelectorAll('[data-reveal]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.18 });

  revealTargets.forEach(t => observer.observe(t));

  /* ---------- Filters ---------- */
  const filters = document.querySelectorAll('.filter-btn');
  const cardsGrid = document.getElementById('cardsGrid');
  const cards = cardsGrid ? Array.from(cardsGrid.querySelectorAll('.service-card')) : [];

  function setFilter(filter) {
    filters.forEach(b => b.classList.toggle('active', b.dataset.filter === filter));
    cards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = '';
        requestAnimationFrame(()=> card.classList.remove('hidden-by-filter'));
      } else {
        card.classList.add('hidden-by-filter');
        setTimeout(()=> card.style.display = 'none', 250);
      }
    });
  }

  filters.forEach(b => b.addEventListener('click', () => setFilter(b.dataset.filter)));
  // default
  setFilter('all');

  /* ---------- Card tilt (mouse parallax) ---------- */
  const tiltCards = document.querySelectorAll('.service-card');

  tiltCards.forEach(card => {
    const inner = card.querySelector('.card-inner') || card;
    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rx = (py - 0.5) * -10; // rotateX
      const ry = (px - 0.5) * 14;  // rotateY
      inner.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(8px)`;
      card.style.boxShadow = `0 30px 80px rgba(2,6,23,0.12)`;
    });

    card.addEventListener('pointerleave', () => {
      inner.style.transform = `none`;
      card.style.boxShadow = '';
    });
  });

  /* ---------- Details modal (simple) ---------- */
  document.body.insertAdjacentHTML('beforeend', `
    <div id="svc-modal" style="display:none;position:fixed;inset:0;align-items:center;justify-content:center;z-index:9999">
      <div style="background:rgba(2,6,23,0.6);position:absolute;inset:0"></div>
      <div id="svc-modal-card" style="position:relative;background:#fff;border-radius:12px;max-width:760px;width:94%;padding:20px;box-shadow:0 30px 80px rgba(2,6,23,0.5);transform:translateY(0)">
        <button id="svc-modal-close" style="position:absolute;right:10px;top:10px;border:0;background:transparent;font-size:20px;cursor:pointer">✕</button>
        <div id="svc-modal-content"></div>
      </div>
    </div>
  `);

  const modal = document.getElementById('svc-modal');
  const modalContent = document.getElementById('svc-modal-content');
  const modalClose = document.getElementById('svc-modal-close');

  document.querySelectorAll('.btn-details').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('.service-card');
      const title = card.querySelector('h3')?.textContent || 'Service';
      const desc = card.querySelector('.card-desc')?.textContent || '';
      const tags = Array.from(card.querySelectorAll('.card-tags span')).map(s => s.textContent).join(', ');
      modalContent.innerHTML = `
        <h2 style="margin-top:0">${title}</h2>
        <p style="color:#334155">${desc}</p>
        <p style="color:#334155"><strong>Includes:</strong> ${tags}</p>
        <div style="margin-top:12px"><a href="contact.html" class="btn primary">Request Quote</a></div>
      `;
      modal.style.display = 'flex';
    });
  });

  modalClose.addEventListener('click', () => modal.style.display = 'none');
  modal.addEventListener('click', (ev) => { if (ev.target === modal) modal.style.display = 'none' });

});
<<<<<<< HEAD
=======
=======
/* services.js
   - filters
   - reveal using IntersectionObserver
   - card mouse tilt
   - details modal (simple)
*/

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Reveal with IntersectionObserver ---------- */
  const revealTargets = document.querySelectorAll('[data-reveal]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.18 });

  revealTargets.forEach(t => observer.observe(t));

  /* ---------- Filters ---------- */
  const filters = document.querySelectorAll('.filter-btn');
  const cardsGrid = document.getElementById('cardsGrid');
  const cards = cardsGrid ? Array.from(cardsGrid.querySelectorAll('.service-card')) : [];

  function setFilter(filter) {
    filters.forEach(b => b.classList.toggle('active', b.dataset.filter === filter));
    cards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = '';
        requestAnimationFrame(()=> card.classList.remove('hidden-by-filter'));
      } else {
        card.classList.add('hidden-by-filter');
        setTimeout(()=> card.style.display = 'none', 250);
      }
    });
  }

  filters.forEach(b => b.addEventListener('click', () => setFilter(b.dataset.filter)));
  // default
  setFilter('all');

  /* ---------- Card tilt (mouse parallax) ---------- */
  const tiltCards = document.querySelectorAll('.service-card');

  tiltCards.forEach(card => {
    const inner = card.querySelector('.card-inner') || card;
    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rx = (py - 0.5) * -10; // rotateX
      const ry = (px - 0.5) * 14;  // rotateY
      inner.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(8px)`;
      card.style.boxShadow = `0 30px 80px rgba(2,6,23,0.12)`;
    });

    card.addEventListener('pointerleave', () => {
      inner.style.transform = `none`;
      card.style.boxShadow = '';
    });
  });

  /* ---------- Details modal (simple) ---------- */
  document.body.insertAdjacentHTML('beforeend', `
    <div id="svc-modal" style="display:none;position:fixed;inset:0;align-items:center;justify-content:center;z-index:9999">
      <div style="background:rgba(2,6,23,0.6);position:absolute;inset:0"></div>
      <div id="svc-modal-card" style="position:relative;background:#fff;border-radius:12px;max-width:760px;width:94%;padding:20px;box-shadow:0 30px 80px rgba(2,6,23,0.5);transform:translateY(0)">
        <button id="svc-modal-close" style="position:absolute;right:10px;top:10px;border:0;background:transparent;font-size:20px;cursor:pointer">✕</button>
        <div id="svc-modal-content"></div>
      </div>
    </div>
  `);

  const modal = document.getElementById('svc-modal');
  const modalContent = document.getElementById('svc-modal-content');
  const modalClose = document.getElementById('svc-modal-close');

  document.querySelectorAll('.btn-details').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('.service-card');
      const title = card.querySelector('h3')?.textContent || 'Service';
      const desc = card.querySelector('.card-desc')?.textContent || '';
      const tags = Array.from(card.querySelectorAll('.card-tags span')).map(s => s.textContent).join(', ');
      modalContent.innerHTML = `
        <h2 style="margin-top:0">${title}</h2>
        <p style="color:#334155">${desc}</p>
        <p style="color:#334155"><strong>Includes:</strong> ${tags}</p>
        <div style="margin-top:12px"><a href="contact.html" class="btn primary">Request Quote</a></div>
      `;
      modal.style.display = 'flex';
    });
  });

  modalClose.addEventListener('click', () => modal.style.display = 'none');
  modal.addEventListener('click', (ev) => { if (ev.target === modal) modal.style.display = 'none' });

});
>>>>>>> 36711d8c1529d7187527e0c5c7a821df6b60968f
>>>>>>> 756cfb6f9012beee9c58a046526ab9a431ad96bd
