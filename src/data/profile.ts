// ============================================================
//  DATA DIRI — ubah isi file ini untuk mengganti konten website.
//  Teks bertanda [ISI] masih perlu dilengkapi atau dicek.
// ============================================================

export const profile = {
  name: 'Farhan Bachtiar',
  role: 'Data Analyst & Web Developer',
  tagline:
    'Mahasiswa tingkat akhir yang senang mengubah data menjadi insight bermakna dan membangun solusi digital yang bermanfaat.',
  location: 'Bandung, Indonesia',
  available: true, // tampilkan label "Terbuka untuk pekerjaan"
  cvUrl: '', // [ISI] taruh CV di public/cv.pdf lalu isi '/cv.pdf'
};

export const about = [
  'Saya Farhan Bachtiar, mahasiswa tingkat akhir dari Bandung dengan minat besar pada analisis data dan pengembangan web.',
  'Saya terbiasa mengolah data mentah dengan Python, membangun model machine learning sederhana, dan menyajikannya lewat dashboard interaktif. Pengalaman di pengembangan web membuat saya bisa membawa hasil analisis menjadi aplikasi yang langsung dipakai.',
];

export const stats = [
  { value: '3', label: 'Proyek data' },
  { value: '4', label: 'Aplikasi web' },
  { value: '2', label: 'Dashboard online' },
];

export const education = [
  // [ISI] cek nama kampus, jurusan, dan tahun
  { title: 'S1 Teknik Informatika', place: 'Universitas Komputer Indonesia (UNIKOM)', period: '[ISI] – sekarang' },
];

export const experience = [
  {
    title: 'Kerja Praktik',
    place: 'Diskominfo Jawa Barat — membangun website CekBerita (cek hoaks)',
    period: '2026',
  },
  // [ISI] tambahkan sertifikat atau pengalaman lain di sini
];

export const skillGroups = [
  {
    title: 'Analisis Data & ML',
    items: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'SQL', 'Jupyter / Colab'],
  },
  {
    title: 'Visualisasi & Dashboard',
    items: ['Streamlit', 'Matplotlib', 'Seaborn', 'Next.js Dashboard', 'Word Cloud'],
  },
  {
    title: 'Web Development',
    items: ['Laravel', 'PHP', 'FastAPI', 'Next.js', 'TypeScript', 'Tailwind CSS', 'MySQL'],
  },
  { title: 'Tools', items: ['Git', 'GitHub', 'Docker', 'Vercel'] },
];

// Proyek umum (di luar data analis). Kosongkan array jika tidak ada.
export const generalProjects = [
  {
    title: 'CekBerita — Cek Hoaks Jabar',
    description:
      'Website layanan publik untuk mengecek berita hoaks, dibuat saat Kerja Praktik di Diskominfo Jawa Barat. Dilengkapi daftar artikel, panel admin, dan halaman pelaporan.',
    tags: ['Laravel 12', 'Blade', 'MySQL'],
    url: 'https://github.com/FrhnFS/cekberita',
  },
  {
    title: 'Event Ticketing System',
    description:
      'Sistem manajemen event dan tiket dengan alur pemesanan, pembayaran, QR check-in, serta penerapan 12 design pattern dan refactor dari kode legacy.',
    tags: ['Laravel', 'PHP', 'Design Pattern'],
    url: 'https://github.com/FrhnFS/event-ticketing',
  },
  {
    title: 'Bank Sampah Maps',
    description: 'Aplikasi web pemetaan lokasi bank sampah.', // [ISI] lengkapi deskripsi
    tags: ['Laravel', 'Tailwind CSS'],
    url: 'https://github.com/FrhnFS/BankSampahMaps',
  },
  {
    title: 'Point of Sale (POS)',
    description: 'Aplikasi kasir berbasis web untuk mencatat transaksi penjualan.', // [ISI] lengkapi deskripsi
    tags: ['Laravel', 'Tailwind CSS'],
    url: 'https://github.com/FrhnFS/pos',
  },
];

export const contacts = [
  // [ISI] tambahkan email Anda:
  // { label: 'Email', value: 'email@anda.com', url: 'mailto:email@anda.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/farhan-bachtiar', url: 'https://www.linkedin.com/in/farhan-bachtiar/' },
  { label: 'GitHub', value: 'github.com/FrhnFS', url: 'https://github.com/FrhnFS' },
];
