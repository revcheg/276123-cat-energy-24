(function () {
  let navMain = document.querySelector('.nav');
  let navList = document.querySelector('.nav__list');
  let navBurger = document.querySelector('.nav__burger');

  navMain.classList.remove('nav--nojs');

  navBurger.addEventListener('click', function() {
    navList.classList.toggle('nav__list--closed');
  });
})();
