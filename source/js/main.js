'use strict';
(function () {

  // mobile menu
  var mobileMenu = document.querySelector('.header__mobile-menu');
  var burgerBtn = document.querySelector('.header__burger-btn');
  var body = document.querySelector('body');


  function onBurgerClick () {
    mobileMenu.classList.toggle('header__mobile-menu_open');
    body.classList.toggle('disable-scrolling-js');
  }

  burgerBtn.addEventListener('click', onBurgerClick);


  // Initialize Swiper

  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    // spaceBetween: 30,
    // slidesPerView: 4,
    // slidesPerGroup: 4,

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },

      // when window width is >= 640px
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 30
      },
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  // mobile pagination

  var paginationMobileLength = document.querySelector('.swiper-pagination-mobile__length');
  var paginationMobileStartIndex = document.querySelector('.swiper-pagination-mobile__start-index');
  paginationMobileLength.textContent = (swiper.slides.length - 4) / 2;

  swiper.on('transitionEnd', function() {
    paginationMobileStartIndex.textContent = (swiper.realIndex / 2) + 1;
  });





  // accordion

  // var footerTop = document.querySelector('.footer__top');
  // var accordionsNoJS = footerTop.querySelectorAll('.accordion_no-js');
  // var accordionContentNoJS = footerTop.querySelectorAll('.accordion__content_no-js');
  // var accordions = document.querySelectorAll('.accordion');

  // function deleteNoJS() {
  //   for (var i = 0; i < accordionsNoJS.length; i++) {
  //     accordionsNoJS[i].classList.remove('accordion_no-js');
  //   }
  //   for (var j = 0; j < accordionContentNoJS.length; j++) {
  //     accordionContentNoJS[j].classList.remove('accordion__content_no-js');
  //   }
  // }

  // deleteNoJS();

  // accordions.forEach(function (item) {
  //   item.addEventListener('click', function () {
  //     if (item.classList.contains('accordion_active')) {
  //       item.classList.remove('accordion_active');
  //     } else {
  //       var activeAccordion = document.querySelector('.accordion_active');
  //       if (activeAccordion && activeAccordion !== item) {
  //         activeAccordion.classList.remove('accordion_active');
  //       }
  //       item.classList.add('accordion_active');
  //     }
  //   });
  // });

})();
