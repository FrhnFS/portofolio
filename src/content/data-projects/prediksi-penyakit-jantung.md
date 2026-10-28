---
title: Prediksi Penyakit Jantung
summary: Aplikasi web untuk memprediksi risiko penyakit jantung dari data klinis pasien menggunakan algoritma K-Nearest Neighbors (KNN).
tools: [Python, scikit-learn, Pandas, Streamlit]
date: 2024-07-01
dashboardUrl: https://knnjantung.streamlit.app/
embedUrl: https://knnjantung.streamlit.app/?embed=true
repoUrl: https://github.com/FrhnFS/knn_jantung
highlights:
  - "Model KNN dengan k = 5"
  - "Prediksi manual dari input data pasien"
  - "Riwayat prediksi tersimpan"
---

## Latar Belakang

Deteksi dini membantu menurunkan risiko penyakit jantung. Proyek ini membangun model klasifikasi sederhana dan menyajikannya dalam aplikasi yang mudah dipakai.

## Proses

1. Memuat dataset klinis pasien dan menormalkan fitur dengan MinMaxScaler
2. Membagi data latih dan uji, lalu melatih model K-Nearest Neighbors (k = 5)
3. Mengukur akurasi dan *classification report*
4. Membangun aplikasi Streamlit dengan tiga halaman:
   - **Prediksi**: input data pasien dan lihat hasilnya
   - **Visualisasi data**: distribusi dan korelasi fitur
   - **Riwayat prediksi**: daftar prediksi yang pernah dibuat

## Hasil

<!-- [ISI] Tambahkan nilai akurasi model. -->

*Detail akurasi model akan ditambahkan.*
