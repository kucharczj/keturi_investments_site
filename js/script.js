document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mainNav      = document.getElementById('mainNav');
  const aboutLink    = document.getElementById('aboutLink');
  const aboutOverlay = document.getElementById('aboutOverlay');
  const backBtn      = document.getElementById('backBtn');

  // Toggle navigation when hamburger is clicked
  hamburgerBtn.addEventListener('click', function () {
    mainNav.classList.toggle('open');
    hamburgerBtn.classList.toggle('open');
  });

  // Show the About submenu overlay
  aboutLink.addEventListener('click', function (e) {
    e.preventDefault();
    aboutOverlay.classList.remove('overlay-hidden');
    aboutOverlay.classList.add('overlay-visible');
  });

  // Hide the About submenu overlay when back is clicked
  backBtn.addEventListener('click', function () {
    aboutOverlay.classList.remove('overlay-visible');
    aboutOverlay.classList.add('overlay-hidden');
  });
});
