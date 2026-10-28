---
title: Dashboard PKH & Kemiskinan Jawa Barat
summary: Dashboard web untuk menganalisis penerima Program Keluarga Harapan (PKH) dan tingkat kemiskinan di 27 kabupaten/kota Jawa Barat tahun 2017–2024, lengkap dengan prediksi dan evaluasinya.
tools: [Python, Pandas, FastAPI, Next.js, Google Colab]
date: 2026-02-01
cover: ../../assets/covers/pkh-jabar.svg
featured: true
repoUrl: https://github.com/FrhnFS/psd2
highlights:
  - "27 kabupaten/kota Jawa Barat, data 2017–2024"
  - "6 dataset terbuka dari BPS, Dinsos, dan Disnakertrans"
  - "Prediksi tren dievaluasi pada data tahun 2024"
---

## Latar Belakang

Program Keluarga Harapan (PKH) adalah bantuan sosial untuk keluarga miskin. Proyek ini melihat apakah sebaran penerima PKH di tiap kabupaten/kota Jawa Barat sejalan dengan kondisi kemiskinan, pengangguran, dan pertumbuhan ekonomi daerahnya.

## Data

Data diambil dari portal data terbuka pemerintah:

- Jumlah penerima PKH per kabupaten/kota (Dinsos)
- Persentase dan jumlah penduduk miskin per kabupaten/kota (BPS)
- Jumlah penduduk miskin berdasarkan daerah (BPS)
- Laju pertumbuhan PDRB (BPS)
- Jumlah pengangguran terbuka berdasarkan pendidikan (Disnakertrans)
- Peta batas wilayah kabupaten/kota Jawa Barat (GeoJSON)

## Proses

1. **Pipeline data** di Google Colab: membersihkan dan menyeragamkan nama wilayah, lalu menyusunnya menjadi tabel fakta (`fact_pkh`, `fact_kemiskinan_persen`, `fact_pengangguran`, dll.) dan tabel dimensi kabupaten/kota
2. **Backend FastAPI** yang menyediakan endpoint analisis untuk dashboard
3. **Dashboard Next.js** dengan grafik tren dan peta Jawa Barat
4. **Prediksi** satu tahun ke depan dengan metode *linear trend*, dilatih dengan data 2017–2023 dan dievaluasi terhadap data asli 2024

## Insight

<!-- [ISI] Tuliskan 2–3 temuan utama dari dashboard, misalnya daerah dengan kemiskinan tinggi tetapi penerima PKH relatif sedikit. -->

*Ringkasan temuan akan ditambahkan.*
