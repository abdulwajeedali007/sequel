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
  // whatsapp floating button
  $(function () {
    $("#whatsapp-chatbot").floatingWhatsApp({
      phone: "+917218712789",

      showPopup: true,
      message: "Write here...",
      headerTitle: "Sequel whatsapp chatbox",
      size: "40px",
      // backgroundColor: "#01308c",
      headerColor: "#01308c",
    });
  });
});

//goto top
let gototop = document.querySelector(".gototop");
gototop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// year adding in footer
const year = new Date().getFullYear();
document.querySelector(".year").innerText = `© ${year}. | ALLRIGHTS RESERVED`;
