const targetDonasi = 3000000;

// edit donasi cuy
const donasiMasuk = [
  { nama: "Orang Sugeh", jumlah: 1000},
  { nama: "Muslim Family", jumlah: 300000},
  { nama: "Muslim Family", jumlah: 500000},
  { nama: "Hamba Allah", jumlah: 500000},
  { nama: "Hamba Allah masuk surga Aamiin", jumlah: 200000}
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


totalElement.textContent = "Rp " + total.toLocaleString("id-ID");

const persen = (total / targetDonasi) * 100;
progressElement.style.width = persen + "%";