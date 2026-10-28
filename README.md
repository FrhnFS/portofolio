# Website Portfolio

Dibangun dengan [Astro](https://astro.build) dan di-deploy ke Vercel.

## Menjalankan di komputer

```bash
npm install
npm run dev
```

Buka http://localhost:4321

## Mengubah isi

| Yang ingin diubah | File |
|---|---|
| Nama, tentang saya, pendidikan, skill, proyek umum, kontak | `src/data/profile.ts` |
| Foto profil | ganti `src/assets/foto-profil.jpg` (nama file tetap sama) |
| File CV | taruh di `public/cv.pdf` |
| Proyek data analis | `src/content/data-projects/*.md` |

### Menambah proyek data analis

Salin salah satu file di `src/content/data-projects/`, ganti nama file (nama file = alamat halaman, misalnya `prediksi-harga.md` → `/data/prediksi-harga/`), lalu ubah isinya. Pilihan di bagian atas file:

- `cover`: gambar screenshot, misalnya `./img/dashboard.png` (taruh gambar di `src/content/data-projects/img/`)
- `dashboardUrl`: link dashboard publik (Tableau Public, Looker Studio, Power BI)
- `embedUrl`: link embed agar dashboard tampil langsung di halaman
- `repoUrl`: link GitHub/Kaggle
- `featured: true`: proyek ditampilkan paling atas

## Deploy ke Vercel

1. Upload folder ini ke repository GitHub
2. Di vercel.com, pilih **Add New → Project**, lalu pilih repository tersebut
3. Vercel otomatis mengenali Astro, jadi klik **Deploy**
4. Ganti `site` di `astro.config.mjs` dengan alamat Vercel Anda
