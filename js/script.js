document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileNav = document.getElementById('mobileNav');
  const aboutLink = mobileNav.querySelector('.has-submenu a');
  const aboutSubmenu = document.getElementById('aboutSubmenu');
  const backBtn = aboutSubmenu.querySelector('.back');

  hamburgerBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });

  aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    mobileNav.querySelector('.top-level').style.display = 'none';
    aboutSubmenu.style.display = 'block';
  });

  backBtn.addEventListener('click', (e) => {
    e.preventDefault();
    mobileNav.querySelector('.top-level').style.display = 'block';
    aboutSubmenu.style.display = 'none';
  });
});
