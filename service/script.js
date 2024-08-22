const listStatus = {
  tk: 10000,
  remaja: 15000,
  praDewasa: 20000,
  dewasa: 25000,
};

const listServis = {
  Pangkas: 0,
  "Warnai Rambut": 20000,
};

const umurCustomer = document.getElementById("umur-customer");
const bookingForm = document.getElementById("booking-form");
const services = document.getElementById("servis");
const harga = document.getElementById("harga-cukur");
let statusCustomer = 0;

function updateStatusCustomer() {
  if (umurCustomer.value >= 19) {
    statusCustomer = listStatus.dewasa;
  } else if (umurCustomer.value >= 16) {
    statusCustomer = listStatus.praDewasa;
  } else if (umurCustomer.value >= 7) {
    statusCustomer = listStatus.remaja;
  } else {
    statusCustomer = listStatus.tk;
  }
}

// services.addEventListener("input", (service) => {
//   const serviceSelected = service.target.value;

//   if (serviceSelected === "Warnai Rambut") {
//     harga.value = listServis["Warnai Rambut"];
//   } else {
//     updateStatusCustomer();
//     harga.value = updateStatusCustomer();
//   }
// });

bookingForm.addEventListener("input", () => {
  if (umurCustomer.value === "" && services.value === "") {
    harga.value = "";
    return;
  }

  if (services.value === "Warnai Rambut") {
    harga.value = listServis["Warnai Rambut"];
  } else {
    updateStatusCustomer();
    harga.value = statusCustomer;
  }
});
