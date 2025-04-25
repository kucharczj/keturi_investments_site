document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const desktopNav = document.querySelector('.desktop-nav');

  hamburgerBtn.addEventListener('click', () => {
    desktopNav.classList.toggle('open');
  });
});