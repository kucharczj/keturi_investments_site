document.addEventListener('DOMContentLoaded', () => {
  // Set footer year dynamically
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Basic Hamburger toggle for mobile nav
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileNav = document.getElementById('mobileNav');

  hamburgerBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    hamburgerBtn.classList.toggle('open');
  });

  // Additional functionality: "About" sub-overlay toggle
  const aboutLink = document.getElementById('aboutLink');
  const aboutOverlay = document.getElementById('aboutOverlay');
  const backBtn = document.getElementById('backBtn');

  aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    aboutOverlay.classList.remove('overlay-hidden');
    aboutOverlay.classList.add('overlay-visible');
  });

  backBtn.addEventListener('click', () => {
    aboutOverlay.classList.remove('overlay-visible');
    aboutOverlay.classList.add('overlay-hidden');
  });
});
