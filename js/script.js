document.addEventListener('DOMContentLoaded', function () {
  const aboutLink = document.getElementById('aboutLink');
  const folderDropdown = document.querySelector('.folder-dropdown');
  const navList = document.querySelector('.desktop-nav ul');

  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileNav = document.getElementById('mobileNav');

if (aboutLink && aboutSubMenu && mainMenu && backBtn) {
  aboutLink.addEventListener('click', function (e) {
    e.preventDefault(); // Always prevent default
    if (window.innerWidth <= 768) {
      // Mobile submenu behavior
      mainMenu.classList.add('hidden');
      aboutSubMenu.classList.remove('hidden');
    } else {
      // Desktop dropdown toggle (if needed)
      if (folderDropdown) {
        folderDropdown.style.display = folderDropdown.style.display === 'block' ? 'none' : 'block';
      }
    }
  });

  backBtn.addEventListener('click', function () {
    aboutSubMenu.classList.add('hidden');
    mainMenu.classList.remove('hidden');
  });
}


  // Mobile hamburger toggle
  if (hamburgerBtn && mobileNav) {
    hamburgerBtn.addEventListener('click', function () {
      const isOpen = mobileNav.classList.toggle('open');
      hamburgerBtn.setAttribute('aria-expanded', isOpen);
      document.body.classList.toggle('no-scroll', isOpen);
    });
  }

   // MOBILE SUBMENU TOGGLE 
  const aboutSubMenu = document.getElementById('aboutSubMenu');
  const mainMenu = document.getElementById('mainMenu');
  const backBtn = document.getElementById('backBtn');

  if (aboutLink && aboutSubMenu && mainMenu && backBtn) {
    aboutLink.addEventListener('click', function (e) {
      e.preventDefault();
      mainMenu.classList.add('hidden');
      aboutSubMenu.classList.remove('hidden');
    });

    backBtn.addEventListener('click', function () {
      aboutSubMenu.classList.add('hidden');
      mainMenu.classList.remove('hidden');
    });
  }
  
  // Close on ESC key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      mobileNav.classList.remove('open');
      hamburgerBtn.setAttribute('aria-expanded', false);
      document.body.classList.remove('no-scroll');
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      if (mobileNav) mobileNav.classList.remove('open');
      if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', false);
      document.body.classList.remove('no-scroll');
      if (folderDropdown) folderDropdown.style.display = '';
      if (navList) navList.classList.remove('open');
    }
  });
});
