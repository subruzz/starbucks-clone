$(".owl-carousel").owlCarousel({
  loop: false,
  margin: 10,
  nav: true,
  autoplay:true,
  autoplaySpeed:1000,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2, // Number of items to display on medium screens
    },
    450:{
      items:1
    },
    1000: {
      items: 3,
    },
  },
});