$(document).ready(function(){

  $('.carousel').slick({
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  });

  $('.gallery').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    infinite: true,
    arrows: true,
    adaptiveHeight: true,
    prevArrow: '<h5>Uz Atpakaļ</h5>',
    nextArrow: '<h5>Uz Priekšu</h5>',
    responsive: [
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
          arrows: true,
          adaptiveHeight: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
          arrows: true,
          adaptiveHeight: true,
        }
      }
    ]
  });
});
