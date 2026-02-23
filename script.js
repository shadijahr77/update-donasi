const targetDonasi = 2500000;

// edit donasi cuy
const donasiMasuk = [
  { nama: "Ahmad", jumlah: 500000 },
  { nama: "Hamba Allah", jumlah: 25000 },
  { nama: "Siti", jumlah: 100000 },
  { nama: "Alfian", jumlah: 50000},
  { nama: "alumni ketum 2022", jumlah: 10000000}
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