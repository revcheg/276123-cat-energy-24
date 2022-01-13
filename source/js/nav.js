(function () {
  let navMain = document.querySelector('.nav');
  let navList = document.querySelector('.nav__list');
  let navBurger = document.querySelector('.nav__burger');

  navMain.classList.remove('nav--nojs');

  navBurger.addEventListener('click', function() {
    if (navList.classList.contains('nav__list--closed')) {
      navList.classList.remove('nav__list--closed');
    } else {
      navList.classList.add('nav__list--closed');
    }
  });
})();
