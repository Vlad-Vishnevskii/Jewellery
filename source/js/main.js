'use strict';
(function () {

  // mobile menu
  var mobileMenu = document.querySelector('.header__mobile-menu');
  var burgerBtn = document.querySelector('.header__burger-btn');
  var body = document.querySelector('body');

  if (mobileMenu.classList.contains('header__mobile-menu_no-js')) {
    mobileMenu.classList.remove('header__mobile-menu_no-js');
  }

  function openMobileMenu () {
    mobileMenu.classList.toggle('header__mobile-menu_open');
    body.classList.toggle('disable-scrolling-js');
  }

  function onBurgerClick () {
    openMobileMenu();
  }

  burgerBtn.addEventListener('click', onBurgerClick);


  // Initialize Swiper

  var swiperBlock = document.querySelector('.swiper')

  if (swiperBlock) {
    swiperBlock.classList.remove('swiper_no-js')
  }

  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,

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

  if (paginationMobileLength && paginationMobileStartIndex) {
    paginationMobileLength.textContent = (swiper.slides.length - 4) / 2;

    swiper.on('transitionEnd', function() {
      paginationMobileStartIndex.textContent = (swiper.realIndex / 2) + 1;
    });
  }

  //accordion

  var accordionsNoJS = document.querySelectorAll('.accordion_no-js');
  var accordionContentNoJS = document.querySelectorAll('.accordion__content_no-js');
  var questionsItemNoJS = document.querySelectorAll('.questions__item_no-js');
  var accordions = document.querySelectorAll('.accordion');
  var filter = document.querySelector('.filter');
  var filterMobileNoJs = document.querySelectorAll('.catalog__filter-mobile_no-js');
  var catalogNoJs = document.querySelectorAll('.catalog__no-js');

  function deleteNoJS() {
    for (var i = 0; i < accordionsNoJS.length; i++) {
      accordionsNoJS[i].classList.remove('accordion_no-js');
    }
    for (var j = 0; j < accordionContentNoJS.length; j++) {
      accordionContentNoJS[j].classList.remove('accordion__content_no-js');
    }
    for (var k = 0; k < questionsItemNoJS.length; k++) {
      questionsItemNoJS[k].classList.remove('questions__item_no-js');
    }

    for (var i = 0; i < filterMobileNoJs.length; i++) {
      filterMobileNoJs[i].classList.remove('catalog__filter-mobile_no-js');
    }

    for (var i = 0; i < catalogNoJs.length; i++) {
      catalogNoJs[i].classList.remove('catalog__no-js');
    }
  }

  deleteNoJS();

  accordions.forEach(function (item) {
    item.addEventListener('click', function () {
      if (item.classList.contains('accordion_active')) {
        item.classList.remove('accordion_active');
      } else {
        var activeAccordion = document.querySelector('.accordion_active');
        if (activeAccordion && activeAccordion !== item) {
          activeAccordion.classList.remove('accordion_active');
        }
        item.classList.add('accordion_active');
      }
    });
  });

  // accordion filter

  if (filter) {
    function filterAccordion (evt) {
      var target = evt.target;
      console.log(target)
      if (target.closest('.filter__trigger')) {
        var filterName = target.closest('.filter__type');
        filterName.classList.toggle('filter__type_active');
      }
    }

    filter.addEventListener('click', filterAccordion)
  }

  // open filter modal

  var filterOpenBtn = document.querySelector('.catalog__filter-btn-mobile');
  var catalogFilter = document.querySelector('.catalog__filter');
  var closeBtn = document.querySelector('.filter__close-btn-mobile');

  if (catalogFilter) {

    function openFilterModal () {
      catalogFilter.classList.add('catalog__filter-mobile_open');
      body.classList.add('disable-scrolling-js');
      closeBtn.addEventListener('click', onCloseButtonClick);
      catalogFilter.addEventListener('click', onOverlayClick);
    }

    function closeFilterModal () {
      catalogFilter.classList.remove('catalog__filter-mobile_open');
      body.classList.remove('disable-scrolling-js');
      closeBtn.removeEventListener('click', onCloseButtonClick);
      catalogFilter.removeEventListener('click', onOverlayClick);
    }

    function onOpenBtnFilterClick () {
      openFilterModal();
    }

    function onCloseButtonClick() {
      closeFilterModal();
    }

    function onOverlayClick(evt) {
      var target = evt.target;
      if (target.classList.contains('catalog__filter')) {
        closeFilterModal();
      }
    }
    filterOpenBtn.addEventListener('click', onOpenBtnFilterClick)
  }

  // open add to cart modal

  var btnAdd = document.querySelector('.product-card__btn-add');
  var popupToCart = document.querySelector('.popup-to-cart');
  var toCartCloseBtn = document.querySelector('.popup-to-cart__close-btn');
  var escape = 27;

  if (popupToCart) {

    function openPopupToCart () {
      popupToCart.classList.add('popup-to-cart_open');
      body.classList.add('disable-scrolling-js');
      toCartCloseBtn.addEventListener('click', onCloseButtonClick);
      document.addEventListener('keydown', onEscapePress);
      popupToCart.addEventListener('click', onOverlayClick);
    }

    function closePopupToCart () {
      popupToCart.classList.remove('popup-to-cart_open');
      body.classList.remove('disable-scrolling-js');
      toCartCloseBtn.removeEventListener('click', onCloseButtonClick);
      document.removeEventListener('keydown', onEscapePress);
      popupToCart.removeEventListener('click', onOverlayClick);
    }

    function onOpenBtnClick (evt) {
      evt.preventDefault();
      openPopupToCart();
    }

    function onEscapePress(evt) {
      if (evt.keyCode === escape) {
        closePopupToCart();
      }
    }

    function onCloseButtonClick() {
      closePopupToCart();
    }

    function onOverlayClick(evt) {
      var target = evt.target;
      if (target.classList.contains('popup-to-cart')) {
        closePopupToCart();
      }
    }
    btnAdd.addEventListener('click', onOpenBtnClick)
  }

  // open log in modal

  var btnLogIn = document.querySelector('.header__link_login');
  var popupLogIn = document.querySelector('.popup-log-in');
  var logInCloseBtn = document.querySelector('.popup-log-in__close-btn');
  var formFieldEmailWrapper = document.querySelector('.popup-log-in__form-field_email');
  var inputEmail = formFieldEmailWrapper.querySelector('input');
  var btnLogInMobile = document.querySelector('.header__mobile-link-login');

  if (popupLogIn) {

    function openPopupLogIn () {
      popupLogIn.classList.add('popup-log-in_open');
      body.classList.add('disable-scrolling-js');
      logInCloseBtn.addEventListener('click', onCloseButtonClick);
      document.addEventListener('keydown', onEscapePress);
      popupLogIn.addEventListener('click', onOverlayClick);
      inputEmail.focus();
    }

    function closePopupLogIn () {
      popupLogIn.classList.remove('popup-log-in_open');
      if (!mobileMenu.classList.contains('header__mobile-menu_open')) {
        body.classList.remove('disable-scrolling-js');
      }
      logInCloseBtn.removeEventListener('click', onCloseButtonClick);
      document.removeEventListener('keydown', onEscapePress);
      popupLogIn.removeEventListener('click', onOverlayClick);
    }

    function onOpenBtnClick (evt) {
      evt.preventDefault();
      openPopupLogIn();
    }

    function onEscapePress(evt) {
      if (evt.keyCode === escape) {
        closePopupLogIn();
      }
    }

    function onCloseButtonClick() {
      closePopupLogIn();
    }

    function onOverlayClick(evt) {
      var target = evt.target;
      if (target.classList.contains('popup-log-in')) {
        closePopupLogIn();
      }
    }
    btnLogIn.addEventListener('click', onOpenBtnClick);
    btnLogInMobile.addEventListener('click', onOpenBtnClick);

    window.addEventListener('DOMContentLoaded', function () {
      if (inputEmail) {
        inputEmail.addEventListener('change', function () {
          localStorage.setItem(inputEmail.value, 'inputEmail');
        });
      }
    });
  }

})();
