document.addEventListener('DOMContentLoaded', function () {
  const aboutLink = document.getElementById('aboutLink');
  const folderDropdown = document.querySelector('.folder-dropdown');
  const navList = document.querySelector('.desktop-nav ul');
  const hamburger = document.createElement('button');

  // Create Hamburger Button
  hamburger.innerHTML = '<div class="line"></div><div class="line"></div><div class="line"></div>';
  hamburger.classList.add('hamburger');
  document.querySelector('.header-inner').appendChild(hamburger);

  // Hamburger toggle
  hamburger.addEventListener('click', function () {
    navList.classList.toggle('open');
  });

  // About Link toggle for Mobile
  aboutLink.addEventListener('click', function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      folderDropdown.style.display = folderDropdown.style.display === 'block' ? 'none' : 'block';
    }
  });

  // Close dropdown on window resize
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      folderDropdown.style.display = '';
      navList.classList.remove('open');
    }
  });
});
