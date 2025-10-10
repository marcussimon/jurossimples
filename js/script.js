document.addEventListener('DOMContentLoaded', function() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarLinks = document.querySelector('.navbar-links');

  if (navbarToggler) {
    navbarToggler.addEventListener('click', function() {
      navbarLinks.classList.toggle('active');
    });
  }
});
