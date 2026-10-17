## Design System: Retro Web Portfolio

### Arah umum
Portfolio developer bergaya web 90-an / OS retro: latar navy bergrid, judul pixel besar
berwarna, jendela krem dengan title bar ungu, dan pita section berwarna (orange, krem,
teal, ungu) yang bersambung. Kesan: kreatif dan mudah diingat, tetapi tetap profesional dan
mudah dibaca recruiter. Gaya hanya sebagai "kulit": semua konten yang ada dipertahankan.
Satu tema saja (navy), tanpa toggle terang/gelap.

### Warna
- Navy #1E1A4A (latar utama, bergrid #2E2870), navy-deep #151238, navy-surface #2A2466
- Orange #F07B2C: judul baris pertama, pita "Hello", label section, tombol secondary (outline)
- Teal #2BB3A8: judul baris kedua, tombol primary, pita Featured Projects
- Ungu #5B3FA8: title bar jendela, starburst; ungu tua #4A3494 untuk footer
- Krem #F3E6C8: isi jendela dan section terang
- Kuning #F5C542: sparkle, focus ring, judul kolom footer
- Ink #14112E: teks dan border di atas krem/orange/teal; shade #0B0920 untuk bayangan
- Teks di atas navy: krem, muted #B7B0D8, teal, orange, atau kuning
- Teks di atas krem/orange/teal: ink. Jangan teks teal/orange di atas krem
- Teks di atas ungu: krem atau kuning (teal tidak lolos untuk teks kecil)
- Semua teks wajib lolos kontras WCAG AA

### Tipografi
- Judul display: Pixelify Sans (bold), besar dan berwarna dengan bayangan pixel
- Label, tombol, nav, title bar jendela: Silkscreen, kecil, uppercase
- Body: monospace yang mudah dibaca (Geist Mono), 14–16px
- Font pixel tidak boleh dipakai untuk paragraf

### Aturan visual
- Corner radius 0 di semua elemen (sudut tajam)
- Border 2px solid di semua komponen
- Bayangan offset tajam tanpa blur (4px 4px 0 shade)
- Hover/active tombol: efek "ditekan" (bergeser 2px, bayangan mengecil)
- Motif latar: grid (navy), zigzag (pita teal), dither (pita orange CTA)
- Ilustrasi dekoratif dibuat sendiri dengan CSS/SVG (komputer CRT, smiley pixel,
  sparkle, starburst), tidak disalin dari referensi
- Hormati prefers-reduced-motion

### Komponen
- Kartu jendela: title bar berisi nama file + tombol kecil dekoratif (aria-hidden),
  konten di bawahnya. Contoh nama file: `sistem-inventaris.html`, `sertifikat-dicoding.pdf`
- Tombol: primary (isi teal), secondary (outline orange), outline (outline teal),
  orange (isi orange), dark (isi ink, untuk latar krem), disabled (abu-abu)
- Tabs bergaya OS untuk filter proyek/sertifikat
- Blok label section berwarna di sisi kiri: "SKILLS →", "EXPERIENCE →"
- Input dan dialog bergaya OS untuk form kontak
- Ikon: pixel icon set berlisensi bebas (mis. pixelarticons), 16px dan 24px

### Layout per section
- Navbar: logo "DA" + "Destian / Ardan" di kiri, link uppercase di tengah (aktif: orange
  bergaris bawah), tombol Contact outline teal di kanan
- Hero (navy bergrid): "Hi, I'm", nama besar (orange + teal), tagline, paragraf singkat,
  tombol View Projects + Download Resume, lokasi + ikon sosial. Sisi kanan: komputer CRT
  pixel yang layarnya menampilkan `destian.jpg`, badge magang Telkom & KAI, navigasi ikon
- Pita "Hello" (orange): smiley pixel + kalimat singkat + fakta (lulusan, magang, co-founder)
- Skills (krem): 4 jendela kategori dengan ikon dan chip. Tech stack hanya tampil di sini
- Projects (pita teal zigzag): jendela "Featured Projects" berisi thumbnail proyek +
  panel Quick Links (Projects, Experience, Certificates, Resume, GitHub, LinkedIn)
  yang menggantikan baris statistik lama, dan tombol "Let's Talk"
- Experience: timeline vertikal (perusahaan, posisi, periode, ringkasan)
- Certificates: grid kartu jendela kecil bernama file .pdf
- Contact: blok CTA "Let's build something together" + form bergaya dialog OS
- Footer (ungu): ajakan + email, daftar sosial, navigasi; bar bawah copyright

### Larangan
- Jangan menyalin ilustrasi, maskot, atau logo dari gambar referensi
- Jangan memakai logo merek lain sebagai dekorasi
- Jangan meninggalkan teks placeholder atau lorem ipsum
- Jangan membuat statistik pengisi seperti "100% Responsive"