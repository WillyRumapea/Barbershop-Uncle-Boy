const listHargaCukur = {
  Undercut: 25000,
  "Comma Hair": 27000,
  "Two Block": 25000,
  "French Crop": 23000,
  Mullet: 30000,
};

const listStatus = {
  anak: 3000,
  remaja: 5000,
  dewasa: 7000,
};

const umurCustomer = document.getElementById("umur-customer");

function updateStatusCustomer() {
  if (umurCustomer.value <= 15) {
    statusCustomer = listStatus.anak;
  } else if (umurCustomer.value > 15 && umurCustomer.value < 20) {
    statusCustomer = listStatus.remaja;
  } else {
    statusCustomer = listStatus.dewasa;
  }
}

let statusCustomer = 0;

document.getElementById("tipe-cukur").addEventListener("input", (e) => {
  const styleSelected = e.target.value;
  let hargaCukur = document.getElementById("harga-cukur");

  if (!umurCustomer) {
    hargaCukur.value = "";
    return;
  }

  updateStatusCustomer(umurCustomer);

  hargaCukur.innerHTML = "";

  if (listHargaCukur[styleSelected]) {
    hargaCukur.value = listHargaCukur[styleSelected] + statusCustomer;
  } else {
    hargaCukur.value = "";
  }
});

document.getElementById("umur-customer").addEventListener("input", (e) => {
  const umurCustomer = e.target.value;
  let hargaCukur = document.getElementById("harga-cukur");

  if (!umurCustomer) {
    hargaCukur.value = "";
    return;
  }

  updateStatusCustomer(umurCustomer);

  const styleSelected = document.getElementById("tipe-cukur").value;
  if (listHargaCukur[styleSelected]) {
    hargaCukur.value = listHargaCukur[styleSelected] + statusCustomer;
  }
});
