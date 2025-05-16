document.addEventListener('DOMContentLoaded', function () {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileNav = document.getElementById('mobileNav');
  const mainMenu = document.getElementById('mainMenu');
  const aboutSubMenu = document.getElementById('aboutSubMenu');
  const aboutLink = document.getElementById('aboutLink');
  const backBtn = document.getElementById('backBtn');
  const folderDropdown = document.querySelector('.folder-dropdown');
  const navList = document.querySelector('.desktop-nav ul');

  // Hamburger toggle
  if (hamburgerBtn && mobileNav) {
    hamburgerBtn.addEventListener('click', function () {
      const isOpen = mobileNav.classList.toggle('open');
      hamburgerBtn.setAttribute('aria-expanded', isOpen);
      document.body.classList.toggle('no-scroll', isOpen);
    });
  }

  // Mobile submenu toggle
  if (aboutLink && aboutSubMenu && mainMenu && backBtn) {
    aboutLink.addEventListener('click', function (e) {
      e.preventDefault();
      if (window.innerWidth <= 768) {
        mainMenu.classList.add('hidden');
        aboutSubMenu.classList.remove('hidden');
      }
    });

    backBtn.addEventListener('click', function () {
      aboutSubMenu.classList.add('hidden');
      mainMenu.classList.remove('hidden');
    });
  }

  // Desktop folder hover
  if (folderDropdown) {
    const navItem = folderDropdown.closest('.nav-folder');
    if (navItem) {
      navItem.addEventListener('mouseenter', () => {
        folderDropdown.style.display = 'block';
      });
      navItem.addEventListener('mouseleave', () => {
        folderDropdown.style.display = 'none';
      });
    }
  }

  // Close on ESC key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      mobileNav.classList.remove('open');
      hamburgerBtn.setAttribute('aria-expanded', false);
      document.body.classList.remove('no-scroll');
      aboutSubMenu.classList.add('hidden');
      mainMenu.classList.remove('hidden');
    }
  });

  // Reset menus on resize
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      mobileNav.classList.remove('open');
      hamburgerBtn.setAttribute('aria-expanded', false);
      document.body.classList.remove('no-scroll');
      aboutSubMenu.classList.add('hidden');
      mainMenu.classList.remove('hidden');
    }
  });
});
