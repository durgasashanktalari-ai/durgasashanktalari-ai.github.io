// Portfolio interactions. Replace the email placeholder below with your real email address.
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('visible'));
}

const emailButton = document.getElementById('emailButton');
const copyHint = document.getElementById('copyHint');
const EMAIL_PLACEHOLDER = 'YOUR_EMAIL@example.com'; // Replace this with your real email.
if (emailButton) {
  emailButton.addEventListener('click', async () => {
    if (EMAIL_PLACEHOLDER === 'YOUR_EMAIL@example.com') {
      copyHint.textContent = 'Open script.js and replace YOUR_EMAIL@example.com with your real email.';
      return;
    }
    try {
      await navigator.clipboard.writeText(EMAIL_PLACEHOLDER);
      copyHint.textContent = 'Email copied to clipboard.';
    } catch {
      copyHint.textContent = `Email: ${EMAIL_PLACEHOLDER}`;
    }
  });
}
