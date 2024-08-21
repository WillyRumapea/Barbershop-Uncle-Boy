const bookingButton = document.getElementById("booking-button");
const contactButton = document.getElementById("contact-button");
const hamMenu = document.getElementsByClassName("ham-menu")[0];
const navBar = document.getElementById("navbar-nav");
let slideNavbar = false;

bookingButton.addEventListener("click", () => {
  window.location.href = "service/booking.html";
});

contactButton.addEventListener("click", () => {
  window.scroll(0, 1300);
});

hamMenu.addEventListener("click", () => {
  if (!slideNavbar) {
    navBar.style.transform = "translate(240px,75%)";
    slideNavbar = true;
  } else {
    navBar.style.transform = "translate(220%,75%)";
    slideNavbar = false;
  }
});
