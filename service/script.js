const listStatus = {
  tk: 10000,
  remaja: 15000,
  praDewasa: 20000,
  dewasa: 25000,
};

const bawaCat = {
  iya: 10000,
  tidak: 20000,
};

const umurCustomer = document.getElementById("umur-customer");
const responseList = document.getElementById("response-list");
const bookingForm = document.getElementById("booking-form-haircut");
const harga = document.getElementById("harga-cukur");
const hargaWarna = document.getElementById("harga-warnain");
const coloringForm = document.getElementById("booking-form-coloring");
const toColoringForm = document.getElementsByClassName(
  "to-coloring-booking"
)[0];
const toHaircutForm = document.getElementsByClassName("to-haircut-booking")[0];
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

bookingForm.addEventListener("input", () => {
  const harga = document.getElementById("harga-cukur");

  if (umurCustomer.value === "") {
    harga.value = "";
    return;
  }

  updateStatusCustomer();
  harga.value = statusCustomer;
});

toColoringForm.addEventListener("click", (event) => {
  event.preventDefault();
  coloringForm.style.display = "flex";
  bookingForm.style.display = "none";
});

coloringForm.addEventListener("input", () => {
  if (responseList.value === "") {
    hargaWarna.value = "";
    return;
  } else if (responseList.value === "iya") {
    hargaWarna.value = bawaCat.iya;
  } else {
    hargaWarna.value = bawaCat.tidak;
  }
});

toHaircutForm.addEventListener("click", (event) => {
  event.preventDefault();
  coloringForm.style.display = "none";
  bookingForm.style.display = "flex";
});
