$('.multiple-slides').slick({
  dots: true,
  infinite: true,
  loop: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<i class="fa-solid fa-chevron-left left-arrow"></i>',
  nextArrow: '<i class="fa-solid fa-chevron-right right-arrow"></i>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

  
$(".testimonial-carousel").slick({
  infinite: true,
  slidesToShow: 2,
  arrows: false,
  autoplay: true,
  speed: 300,
  loop: true,
  dots: true,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});