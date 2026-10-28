// ============================================================
//  DATA DIRI — ubah isi file ini untuk mengganti konten website.
//  Teks bertanda [ISI] masih perlu dilengkapi atau dicek.
// ============================================================

// Gambar sampul sementara proyek umum (ganti dengan screenshot asli)
import coverCekBerita from '../assets/covers/cekberita.svg';
import coverEvent from '../assets/covers/event-ticketing.svg';
import coverBankSampah from '../assets/covers/bank-sampah.svg';
import coverPos from '../assets/covers/pos.svg';

export const profile = {
  name: 'Farhan Bachtiar',
  role: 'Data Analyst & Web Developer',
  tagline:
    'Membangun solusi data dari ujung ke ujung, dari pipeline dan analisis sampai dashboard dan aplikasi web. Bersertifikasi BNSP.',
  location: 'Bandung, Indonesia',
  available: true, // tampilkan label "Terbuka untuk pekerjaan"
  cvUrl: '', // [ISI] taruh CV di public/cv.pdf lalu isi '/cv.pdf'
};

export const about = [
  'Saya Farhan Bachtiar, lulusan S1 Teknik Informatika Universitas Komputer Indonesia (2026) dari Bandung, dengan dua sertifikasi kompetensi BNSP: Data Analyst dan Junior Web Developer.',
  'Kombinasi ini membuat saya bisa mengerjakan seluruh alur sebuah solusi data: mengumpulkan dan membersihkan data, menganalisis atau membangun model machine learning, lalu menyajikannya dalam dashboard interaktif dan aplikasi web yang langsung dipakai pengguna. Salah satunya adalah dashboard analisis kemiskinan dan bantuan PKH di 27 kabupaten/kota Jawa Barat yang dibangun dari data terbuka BPS dan Dinsos.',
  'Di sisi web, saya pernah membangun website layanan publik cek hoaks saat Kerja Praktik di Diskominfo Jawa Barat. Saya terbiasa bekerja dengan Python, Pandas, scikit-learn, SQL, Laravel, dan Next.js, dan senang mempelajari tools baru sesuai kebutuhan proyek.',
];

export const stats = [
  { value: '3', label: 'Proyek data' },
  { value: '4', label: 'Aplikasi web' },
  { value: '2', label: 'Sertifikasi BNSP' },
];

export const education = [
  { title: 'S1 Teknik Informatika', place: 'Universitas Komputer Indonesia (UNIKOM)', period: '2022 – 2026 · Lulus' },
];

export const experience = [
  {
    title: 'Kerja Praktik',
    place: 'Diskominfo Jawa Barat — membangun website CekBerita (cek hoaks)',
    period: '2026', // [ISI] cek tahun
  },
];

export const certificates = [
  {
    title: 'Data Analyst',
    field: 'Manajemen Data',
    issuer: 'BNSP · LSP Digital Teknologi Informasi Indonesia (Ditekindo)',
    date: 'Mei 2026',
    validUntil: 'Mei 2029',
    url: 'https://drive.google.com/file/d/14cl3AfvScZR9DSu9tGSRtX11gld0rWRL/view?usp=sharing',
    units: ['Business Intelligence', 'Mengumpulkan & menelaah data', 'Validasi data', 'Laporan hasil analisis'],
  },
  {
    title: 'Junior Web Developer',
    field: 'Pemrograman & Pengembangan Perangkat Lunak',
    issuer: 'BNSP · LSP Sumber Daya Mandiri TIK (SDMTIK)',
    date: 'April 2025',
    validUntil: 'April 2028',
    url: 'https://drive.google.com/file/d/1Tovj6QbThWh1F4MXQeJtIcbg6sTZaYtE/view?usp=drive_link',
    units: ['Implementasi user interface', 'Pemrograman terstruktur', 'Best practices', 'Library & komponen'],
  },
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
    image: coverCekBerita,
  },
  {
    title: 'Event Ticketing System',
    description:
      'Sistem manajemen event dan tiket dengan alur pemesanan, pembayaran, QR check-in, serta penerapan 12 design pattern dan refactor dari kode legacy.',
    tags: ['Laravel', 'PHP', 'Design Pattern'],
    url: 'https://github.com/FrhnFS/event-ticketing',
    image: coverEvent,
  },
  {
    title: 'Bank Sampah Maps',
    description: 'Aplikasi web pemetaan lokasi bank sampah.', // [ISI] lengkapi deskripsi
    tags: ['Laravel', 'Tailwind CSS'],
    url: 'https://github.com/FrhnFS/BankSampahMaps',
    image: coverBankSampah,
  },
  {
    title: 'Point of Sale (POS)',
    description: 'Aplikasi kasir berbasis web untuk mencatat transaksi penjualan.', // [ISI] lengkapi deskripsi
    tags: ['Laravel', 'Tailwind CSS'],
    url: 'https://github.com/FrhnFS/pos',
    image: coverPos,
  },
];

export const contacts = [
  // [ISI] tambahkan email Anda:
  // { label: 'Email', value: 'email@anda.com', url: 'mailto:email@anda.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/farhan-bachtiar', url: 'https://www.linkedin.com/in/farhan-bachtiar/' },
  { label: 'GitHub', value: 'github.com/FrhnFS', url: 'https://github.com/FrhnFS' },
];
