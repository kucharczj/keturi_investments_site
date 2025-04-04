document.addEventListener('DOMContentLoaded', () => {
  // 1) Dynamically set footer year
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2) Hamburger menu toggle
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mainNav = document.getElementById('mainNav');

  if (hamburgerBtn && mainNav) {
    hamburgerBtn.addEventListener('click', function () {
      mainNav.classList.toggle('open');
      hamburgerBtn.classList.toggle('open');
    });
  }
});
