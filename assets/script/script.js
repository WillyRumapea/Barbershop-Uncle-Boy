const bookingButton = document.getElementById("booking-button");
const contactButton = document.getElementById("contact-button");
const hamMenu = document.getElementsByClassName("ham-menu")[0];
const navBar = document.getElementById("navbar-nav");

bookingButton.addEventListener("click", () => {
  window.location.href = "service/booking.html";
});

contactButton.addEventListener("click", () => {
  window.scroll(0, 1300);
});

hamMenu.addEventListener("click", () => {
  navBar.style.right = "100px";
});
