$(document).ready(function () {

  // Modal
  $('.open-modal-city').on('click', function(e) {
    e.preventDefault();
    $('.modal--city').fadeIn(200);
  });

  $('.open-modal-master').on('click', function(e) {
    e.preventDefault();
    $('.modal--master').fadeIn(200);
  });

  $('.open-modal-pay').on('click', function(e) {
    e.preventDefault();
    $('.modal--pay').fadeIn(200);
  });

  $('.modal__close').on('click', function() {
    $('.modal').fadeOut(200);
  });

  $('.modal').mouseup(function (e) {
    let modalContent = $(".modal__box");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).fadeOut(200);
    }
  });

  // Maskedinput
  $(function($){
    $('.phone-mask').mask(('+7 ') + '(999) 999-99-99');
  });

  // Reviews sl
  var swiper = new Swiper(".reviews__sl", {
    spaceBetween: 0,
    slidesPerView: 1,
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        spaceBetween: 20,
        slidesPerView: 'auto',
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  // Zoom
  $('.gallery-js').each(function() {
    $(this).magnificPopup({
      type : 'image',
      delegate: 'a',
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
        opener: function(element) {
          return element.find('img');
        }
      }
    });
  });

});