// Target donasi
const targetDonasi = 2500000;

// Data donasi masuk (EDIT DI SINI)
const donasiMasuk = [
  { nama: "Ahmad", jumlah: 500000 },
  { nama: "Hamba Allah", jumlah: 25000 },
  { nama: "Siti", jumlah: 10000 },
  { nama: "Alfian", jumlah: 50000}
];

let total = 0;

const totalElement = document.getElementById("total");
const progressElement = document.getElementById("progress");
const listElement = document.getElementById("listDonasi");

donasiMasuk.forEach(donasi => {
  total += donasi.jumlah;

  const li = document.createElement("li");
  li.textContent = `${donasi.nama} - Rp ${donasi.jumlah.toLocaleString("id-ID")}`;
  listElement.appendChild(li);
});

// Update total
totalElement.textContent = "Rp " + total.toLocaleString("id-ID");

// Update progress bar
const persen = (total / targetDonasi) * 100;
progressElement.style.width = persen + "%";