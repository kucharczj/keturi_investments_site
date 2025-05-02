document.addEventListener('DOMContentLoaded', function () {
  const aboutLink = document.getElementById('aboutLink');
  const folderDropdown = document.querySelector('.folder-dropdown');
  const navList = document.querySelector('.desktop-nav ul');

  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileNav = document.getElementById('mobileNav');

  // Desktop "About" dropdown toggle (on mobile only)
  if (aboutLink) {
    aboutLink.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        folderDropdown.style.display = folderDropdown.style.display === 'block' ? 'none' : 'block';
      }
    });
  }

  // Mobile hamburger toggle
  hamburgerBtn.addEventListener('click', function () {
    const isOpen = mobileNav.classList.toggle('open');
    hamburgerBtn.setAttribute('aria-expanded', isOpen);
    document.body.classList.toggle('no-scroll', isOpen);
  });

  // Close on ESC key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      mobileNav.classList.remove('open');
      hamburgerBtn.setAttribute('aria-expanded', false);
      document.body.classList.remove('no-scroll');
    }
  });

  // Close nav on resize if switching to desktop
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      mobileNav.classList.remove('open');
      hamburgerBtn.setAttribute('aria-expanded', false);
      document.body.classList.remove('no-scroll');
      folderDropdown.style.display = '';
      navList.classList.remove('open');
    }
  });
});
