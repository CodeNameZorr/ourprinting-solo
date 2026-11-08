/* ==========================================================
   CONFIG.JS  —  FILE YANG PERLU KAMU EDIT
   Semua nomor WA, link IG, produk, dan HARGA ada di sini.
   Setelah diedit, simpan lalu upload ulang ke GitHub.
   ========================================================== */

const TOKO = {
  nama: "Our Printing Solo",
  slogan: "Your Ideas, Our Print!",
  kota: "Solo",

  // Username Instagram (tanpa @)
  ig: "ourprinting.solo",

  // ⚠️ GANTI DENGAN NOMOR WA KAMU
  // Format: awalan 62 (tanpa 0, tanpa +, tanpa spasi/strip).
  // Contoh: nomor 0812-3456-7890  ->  "6281234567890"
  wa: "6289501426127",

  // Tampilan nomor di website (bebas, hanya tulisan)
  waTampil: "0895-0142-6127",
};

/* ----------------------------------------------------------
   DAFTAR PRODUK
   - harga dalam Rupiah, TANPA titik. Contoh: 15000
   - Contoh harga di bawah hanya CONTOH, silakan ganti.
   - Kalau belum mau menampilkan harga, isi harga dengan null
     (nanti tampil "Tanya harga").
   - foto: nama file di folder assets/img/
   ---------------------------------------------------------- */
const PRODUK = [
  {
    nama: "Pack Spider-Man",
    tema: "Karakter & Komik",
    deskripsi: "Kumpulan stiker Spider-Man dan Marvel dalam satu lembar.",
    vinyl:    { harga: 10000, foto: "assets/img/spiderman-vinyl.jpg" },
    hologram: { harga: 15000, foto: "assets/img/spiderman-hologram.jpg" },
  },
  {
    nama: "Pack Oasis",
    tema: "Musik & Band",
    deskripsi: "Stiker bertema Oasis dan Noel Gallagher, cocok untuk laptop dan botol minum.",
    vinyl:    { harga: 10000, foto: "assets/img/oasis-vinyl.jpg" },
    hologram: { harga: 15000, foto: "assets/img/oasis-hologram.jpg" },
  },
  {
    nama: "Pack Hindia",
    tema: "Musik & Band",
    deskripsi: "Koleksi stiker bertema Hindia.",
    vinyl:    { harga: 10000, foto: "assets/img/hindia-vinyl.jpg" },
    hologram: { harga: 15000, foto: "assets/img/hindia-hologram.jpg" },
  },
  {
    nama: "Pack Rock Band",
    tema: "Musik & Band",
    deskripsi: "Logo band rock dan metal favorit dalam satu lembar.",
    vinyl:    { harga: 10000, foto: "assets/img/rock-vinyl.jpg" },
    hologram: { harga: 15000, foto: "assets/img/rock-hologram.jpg" },
  },
  {
    nama: "Pack Islami",
    tema: "Kaligrafi & Quotes",
    deskripsi: "Stiker kata-kata islami seperti Alhamdulillah dan Man Jadda Wa Jada.",
    vinyl:    { harga: 10000, foto: "assets/img/islami-vinyl.jpg" },
    hologram: { harga: 15000, foto: "assets/img/islami-hologram.jpg" },
  },
];

/* ----------------------------------------------------------
   GALERI (foto hasil tempel). Tambah/kurangi sesuka hati.
   ---------------------------------------------------------- */
const GALERI = [
  { foto: "assets/img/hasil-1.jpg", ket: "Stiker di botol minum" },
  { foto: "assets/img/hasil-2.jpg", ket: "Mudah dikelupas dari kertas" },
  { foto: "assets/img/hasil-3.jpg", ket: "Tempel di tumbler" },
  { foto: "assets/img/hasil-4.jpg", ket: "Potongan rapi" },
  { foto: "assets/img/hasil-5.jpg", ket: "Hasil di botol" },
];
