$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
    },
  });
});

// year adding in footer
const year = new Date().getFullYear();
document.querySelector(".year").innerText = `© ${year}. | ALLRIGHTS RESERVED`;
