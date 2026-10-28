---
title: Dashboard Analisis CV-ATS
summary: Dashboard interaktif yang menganalisis dan memprediksi apakah sebuah CV lolos sistem ATS (Applicant Tracking System) menggunakan text mining dan machine learning.
tools: [Python, scikit-learn, NLP, Streamlit]
date: 2025-08-01
featured: true
dashboardUrl: https://cv-ats-cheker-v1.streamlit.app/
embedUrl: https://cv-ats-cheker-v1.streamlit.app/?embed=true
repoUrl: https://github.com/FrhnFS/cv-ats-cheker
highlights:
  - "2 model dibandingkan: Naive Bayes dan SVM"
  - "Bisa mengecek CV dalam format PDF secara langsung"
  - "Mendukung teks bahasa Indonesia dan Inggris"
---

## Latar Belakang

Banyak perusahaan menyaring CV secara otomatis dengan ATS sebelum dibaca manusia. Proyek ini mencoba mempelajari pola CV yang lolos dan memberi pencari kerja cara cepat untuk mengecek CV mereka.

## Proses

1. **Pembersihan teks**: menghapus simbol dan *stopword* bahasa Indonesia (Sastrawi) dan Inggris (NLTK)
2. **Ekstraksi fitur** dengan TF-IDF (1.000 kata teratas)
3. **Pemodelan**: membandingkan Multinomial Naive Bayes dan Support Vector Machine (SVM)
4. **Dashboard Streamlit** berisi:
   - Distribusi label dan word cloud (EDA)
   - Perbandingan akurasi dan *confusion matrix* antar model
   - Kata yang paling berpengaruh pada model terbaik
   - Visualisasi klaster dokumen dengan t-SNE
   - Fitur unggah CV (PDF) untuk diprediksi langsung

## Hasil

<!-- [ISI] Tambahkan akurasi tiap model dan model terbaik. -->

*Detail akurasi model akan ditambahkan.*

> Dashboard di-hosting di Streamlit Community Cloud. Jika aplikasi sedang "tidur", klik tombol untuk membangunkannya dan tunggu beberapa detik.
