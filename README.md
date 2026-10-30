# Surat Ulang Tahun Penuh Cinta

Website ulang tahun interaktif berbasis React + Vite. Tidak memerlukan backend, basis data, atau berkas musik.

## Menjalankan secara lokal

```sh
npm install
npm run dev
```

Jalankan `npm run build` untuk membuat versi produksi di folder `dist/`. Jalankan `npm run lint` untuk pemeriksaan Oxlint.

## Mengubah isi website

Edit [`src/data/birthdayContent.js`](./src/data/birthdayContent.js) untuk mengganti nama, PIN enam digit, teks pembuka, ucapan ulang tahun, pesan bunga, surat, 15 keterangan foto, URL video YouTube, lima alasan, janji, dan ucapan kejutan terakhir.

PIN hanya gerbang kejutan di sisi pengunjung, bukan sistem keamanan. Jangan simpan informasi rahasia di balik PIN ini.

## Menambahkan foto

- Letakkan foto kejutan terakhir dengan nama `main-photo.jpeg` di `public/assets/photos/`.
- Tambahkan `photo-01.jpeg` sampai `photo-15.jpeg` di `public/assets/photos/gallery/`.
- Ubah keterangan setiap foto di daftar `gallery` pada `src/data/birthdayContent.js`.

Foto bersifat opsional. Jika belum ada, website menampilkan placeholder yang sudah dirancang. Gunakan berkas JPEG/WebP dengan ukuran wajar agar halaman lebih cepat dibuka.

## Musik

Pemutar YouTube tertanam digunakan sebagai pemutar lagu sungguhan. Ganti `music.youtubeEmbedUrl` di berkas konten jika ingin menggunakan URL video YouTube lainnya. Pemutaran memerlukan koneksi internet dan baru dimulai ketika pengunjung menekan tombol putar di dalam video.

## Deploy ke Vercel

Impor repositori ke Vercel dan gunakan pengaturan berikut:

- Preset kerangka kerja: **Vite**
- Perintah build: `npm run build`
- Folder hasil build: `dist`

Tidak diperlukan konfigurasi rewrite karena navigasi menggunakan perpindahan tampilan dalam satu halaman, bukan rute URL.
