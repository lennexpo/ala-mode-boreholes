/* =========================================================
   Ala Mode Boreholes — Scripts
   ========================================================= */

/* ── Mobile Nav Toggle ── */
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Close nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

/* ── Contact Form ── */
const form        = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name    = form.querySelector('[name="name"]').value.trim();
    const phone   = form.querySelector('[name="phone"]').value.trim();
    const service = form.querySelector('[name="service"]').value;

    if (!name || !phone || !service) {
      alert('Please fill in your name, phone number, and the service you need.');
      return;
    }

    // Build WhatsApp message
    const location = form.querySelector('[name="location"]').value.trim();
    const message  = form.querySelector('[name="message"]').value.trim();

    const waText = encodeURIComponent(
      `*New Enquiry – Ala Mode Boreholes Website*\n\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Service: ${service}\n` +
      (location ? `Location: ${location}\n` : '') +
      (message  ? `Message: ${message}` : '')
    );

    // Open WhatsApp
    window.open(`https://wa.me/263772644663?text=${waText}`, '_blank');

    // Show success state
    form.style.display = 'none';
    if (formSuccess) formSuccess.style.display = 'block';
  });
}

/* ── Scroll-in animations ── */
const revealEls = document.querySelectorAll(
  '.svc-card, .gal-item, .vid-card, .why-list li, .hl-item'
);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  revealEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}
