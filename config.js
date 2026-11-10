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
  tiktok: "ourprinting.solo",

  // ⚠️ GANTI DENGAN NOMOR WA KAMU
  // Format: awalan 62 (tanpa 0, tanpa +, tanpa spasi/strip).
  // Contoh: nomor 0812-3456-7890  ->  "6281234567890"
  wa: "6288221516004",

  // Tampilan nomor di website (bebas, hanya tulisan)
  waTampil: "0882-2151-6004",
};

/* ----------------------------------------------------------
   DAFTAR PRODUK
   - harga dalam Rupiah, TANPA titik. Contoh: 12000
   - harga: null  -> tampil "Tanya harga"
   - pcs: jumlah stiker per pack (isi null kalau tidak mau ditampilkan)
   - satuan: tulisan di bawah harga, misalnya "per pack" atau "per lembar"
   - ilustrasi: true -> muncul keterangan "Foto ilustrasi" di kartu
   - foto: nama file di folder assets/img/
   ---------------------------------------------------------- */
const PRODUK = [
  {
    nama: "Pack Spider-Man",
    tema: "Karakter & Komik · Reguler",
    pcs: 26,
    satuan: "per pack",
    deskripsi: "Kumpulan stiker Spider-Man dan Marvel dalam satu pack.",
    vinyl:    { harga: 12000, foto: "assets/img/spiderman-vinyl.jpg" },
    hologram: { harga: 15000, foto: "assets/img/spiderman-hologram.jpg" },
  },
  {
    nama: "Pack Oasis",
    tema: "Musik & Band · Reguler",
    pcs: 22,
    satuan: "per pack",
    deskripsi: "Stiker bertema Oasis dan Noel Gallagher, cocok untuk laptop dan botol minum.",
    vinyl:    { harga: 12000, foto: "assets/img/oasis-vinyl.jpg" },
    hologram: { harga: 15000, foto: "assets/img/oasis-hologram.jpg" },
  },
  {
    nama: "Pack Hindia",
    tema: "Musik & Band · Reguler",
    pcs: 15,
    satuan: "per pack",
    deskripsi: "Koleksi stiker bertema Hindia.",
    vinyl:    { harga: 12000, foto: "assets/img/hindia-vinyl.jpg" },
    hologram: { harga: 15000, foto: "assets/img/hindia-hologram.jpg" },
  },
  {
    nama: "Pack Band",
    tema: "Musik & Band · Reguler",
    pcs: 29,
    satuan: "per pack",
    deskripsi: "Logo band rock dan metal favorit dalam satu pack.",
    vinyl:    { harga: 12000, foto: "assets/img/rock-vinyl.jpg" },
    hologram: { harga: 15000, foto: "assets/img/rock-hologram.jpg" },
  },
  {
    nama: "Pack Islami",
    tema: "Kaligrafi & Quotes · Reguler",
    pcs: 16,
    satuan: "per pack",
    deskripsi: "Stiker kata-kata islami seperti Alhamdulillah dan Man Jadda Wa Jada.",
    vinyl:    { harga: 12000, foto: "assets/img/islami-vinyl.jpg" },
    hologram: { harga: 15000, foto: "assets/img/islami-hologram.jpg" },
  },
  {
    nama: "Stiker Mini",
    tema: "Ukuran Lebih Kecil",
    pcs: null,
    satuan: "per pack",
    ilustrasi: true,
    deskripsi: "Ukuran lebih kecil, pas untuk ditempel di case HP. Tanya tema yang tersedia lewat WhatsApp.",
    vinyl:    { harga: 5000, foto: "assets/img/mini-vinyl.jpg" },
    hologram: { harga: 8000, foto: "assets/img/mini-hologram.jpg" },
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
