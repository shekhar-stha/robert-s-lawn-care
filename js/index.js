$('.multiple-slides').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<i class="fa-solid fa-chevron-left left-arrow"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right right-arrow">',
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
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  
$(".testimonial-carousel").slick({
  infinite: true,
  slidesToShow: 2,
  arrows: false,
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