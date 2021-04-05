import  $ from 'jquery';

$(function() {

  $('.phones__sliders').slick({
    draggable: false,
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    // responsive: [
    //   {
    //     breakpoint: 992,
    //     settings: {
    //       arrows: false,
    //       draggable: true
    //     }
    //   }
    // ]
  });
});