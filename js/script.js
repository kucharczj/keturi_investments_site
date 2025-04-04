document.addEventListener('DOMContentLoaded', () => {

  // Year in footer example:
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Select elements we need to toggle
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mainNav      = document.getElementById('mainNav');
  const aboutLink    = document.getElementById('aboutLink');
  const aboutOverlay = document.getElementById('aboutOverlay');
  const backBtn      = document.getElementById('backBtn');

  // Hamburger toggles the entire nav open/closed
  hamburgerBtn.addEventListener('click', function () {
    mainNav.classList.toggle('open');
    hamburgerBtn.classList.toggle('open');
  });

  // Clicking “About” reveals sub‐overlay
  aboutLink.addEventListener('click', function (e) {
    e.preventDefault(); // don’t navigate away
    aboutOverlay.classList.remove('overlay-hidden');
    aboutOverlay.classList.add('overlay-visible');
  });

  // Clicking “Back” hides the sub‐overlay
  backBtn.addEventListener('click', function () {
    aboutOverlay.classList.remove('overlay-visible');
    aboutOverlay.classList.add('overlay-hidden');
  });
});
