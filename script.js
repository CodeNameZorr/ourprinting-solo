/* ==========================================================
   SCRIPT.JS — logika website (biasanya tidak perlu diedit).
   Data toko, produk, dan harga diubah di config.js
   ========================================================== */

(function () {
  "use strict";

  const rupiah = (n) => "Rp " + Number(n).toLocaleString("id-ID");
  const waLink = (teks) => `https://wa.me/${TOKO.wa}?text=${encodeURIComponent(teks)}`;
  const igLink = `https://instagram.com/${TOKO.ig}`;

  /* ---------- Katalog ---------- */
  const grid = document.getElementById("productGrid");

  function hargaHTML(v, p) {
    return v.harga == null
      ? `<span class="price"><small>Tanya harga</small></span>`
      : `<span class="price">${rupiah(v.harga)}<small style="display:block">${p.satuan || "per pack"}</small></span>`;
  }

  PRODUK.forEach((p) => {
    const card = document.createElement("article");
    card.className = "card reveal";
    card.innerHTML = `
      <div class="card__img">
        <img src="${p.vinyl.foto}" alt="${p.nama} bahan vinyl" loading="lazy" />
        <span class="badge">Vinyl</span>
        ${p.pcs ? `<span class="badge badge--pcs">${p.pcs} pcs</span>` : ""}
        ${p.ilustrasi ? `<span class="badge badge--note">Foto ilustrasi</span>` : ""}
      </div>
      <div class="card__body">
        <span class="card__tema">${p.tema}</span>
        <h3>${p.nama}</h3>
        <p class="card__desc">${p.deskripsi}</p>
        <div class="toggle" role="group" aria-label="Pilih bahan ${p.nama}">
          <button type="button" data-v="vinyl" aria-pressed="true">Vinyl</button>
          <button type="button" data-v="hologram" aria-pressed="false">Hologram</button>
        </div>
        <div class="price-wrap">${hargaHTML(p.vinyl, p)}</div>
        <a class="btn btn--wa" target="_blank" rel="noopener" href="#">
          <svg class="ic"><use href="#i-wa"/></svg> Pesan
        </a>
      </div>`;

    const img = card.querySelector(".card__img img");
    const badge = card.querySelector(".badge");  // badge pertama = bahan
    const priceWrap = card.querySelector(".price-wrap");
    const order = card.querySelector(".btn");
    const buttons = card.querySelectorAll(".toggle button");
    let varian = "vinyl";

    function render() {
      const v = p[varian];
      const label = varian === "vinyl" ? "Vinyl" : "Hologram";
      img.src = v.foto;
      img.alt = `${p.nama} bahan ${label.toLowerCase()}`;
      badge.textContent = label;
      badge.classList.toggle("badge--holo", varian === "hologram");
      priceWrap.innerHTML = hargaHTML(v, p);
      // Link foto produk ikut dikirim di chat (WhatsApp tidak bisa melampirkan gambar lewat link, jadi dikirim sebagai link foto)
      const fotoUrl = location.protocol.startsWith("http") ? new URL(v.foto, location.href).href : "";
      order.href = waLink(
        `Halo Our Printing Solo, saya mau pesan ${p.nama} (${label}). Apakah masih tersedia?` +
        (fotoUrl ? `\n\nFoto produk:\n${fotoUrl}` : "")
      );
      buttons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.v === varian)));
    }
    buttons.forEach((b) => b.addEventListener("click", () => { varian = b.dataset.v; render(); }));
    render();
    grid.appendChild(card);
  });

  /* ---------- Galeri ---------- */
  const gal = document.getElementById("gallery");
  GALERI.forEach((g) => {
    const f = document.createElement("figure");
    f.className = "shot reveal";
    f.innerHTML = `<img src="${g.foto}" alt="${g.ket}" loading="lazy" /><figcaption>${g.ket}</figcaption>`;
    gal.appendChild(f);
  });

  /* ---------- Link WhatsApp & Instagram ---------- */
  document.querySelectorAll("[data-wa]").forEach((a) => {
    a.href = waLink(a.dataset.wa);
    a.target = "_blank";
    a.rel = "noopener";
  });
  const fab = document.getElementById("fab");
  fab.href = waLink("Halo Our Printing Solo, saya mau tanya-tanya soal stiker.");
  const ctWa = document.getElementById("ctWa");
  ctWa.href = waLink("Halo Our Printing Solo, saya mau order / konsultasi desain stiker.");
  document.getElementById("waText").textContent = TOKO.waTampil;
  const ctIg = document.getElementById("ctIg");
  ctIg.href = igLink;
  document.getElementById("igText").textContent = "@" + TOKO.ig;
  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- Menu mobile ---------- */
  const burger = document.getElementById("burger");
  const links = document.getElementById("navLinks");
  burger.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(open));
  });
  links.addEventListener("click", (e) => {
    if (e.target.closest("a")) { links.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
  });

  /* ---------- Animasi muncul saat scroll ---------- */
  const items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    items.forEach((el) => io.observe(el));
  } else {
    items.forEach((el) => el.classList.add("in"));
  }
})();
