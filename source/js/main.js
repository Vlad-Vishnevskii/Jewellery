'use strict';
(function () {

  // accordion

  var footerTop = document.querySelector('.footer__top');
  var accordionsNoJS = footerTop.querySelectorAll('.accordion_no-js');
  var accordionContentNoJS = footerTop.querySelectorAll('.accordion__content_no-js');
  var accordions = document.querySelectorAll('.accordion');

  function deleteNoJS() {
    for (var i = 0; i < accordionsNoJS.length; i++) {
      accordionsNoJS[i].classList.remove('accordion_no-js');
    }
    for (var j = 0; j < accordionContentNoJS.length; j++) {
      accordionContentNoJS[j].classList.remove('accordion__content_no-js');
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

})();
