$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    nav: true,
    dots: false,
  });
});

// year adding in footer
const year = new Date().getFullYear();
document.querySelector(".year").innerText = `© ${year}. | ALLRIGHTS RESERVED`;
