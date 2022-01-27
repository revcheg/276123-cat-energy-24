(function () {
  let navMain = document.querySelector('.nav');
  let navList = document.querySelector('.nav__list');
  let navBurger = document.querySelector('.nav__burger');

  navMain.classList.remove('nav--nojs');

  navBurger.addEventListener('click', function() {
    navBurger.classList.toggle('nav__burger--closed');
    navList.classList.toggle('nav__list--closed');
  });
})();
