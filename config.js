/*
 * ============================================================
 *  KONFIGURASI PORTAL — Region Operation West Java Portal
 * ============================================================
 *  1. Isi SUPABASE_URL dan SUPABASE_ANON_KEY dari
 *     Supabase Dashboard → Project Settings → API.
 *  2. Daftar AREAS di bawah dipakai sebagai pilihan area saat
 *     admin menambah / mengimpor user (boleh ditambah).
 *
 *  Catatan: anon key memang aman ditaruh di GitHub (publik).
 *  Keamanan data dijaga oleh Row Level Security di Supabase.
 * ============================================================
 */
window.PORTAL_CONFIG = {
  PORTAL_TITLE: "Region Operation West Java Portal",
  PORTAL_SUBTITLE: "Dashboard & Monitoring Regional",

  SUPABASE_URL: "https://xhponhfuciqputafdukh.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhocG9uaGZ1Y2lxcHV0YWZkdWtoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQ2OTY0MzAsImV4cCI6MjExMDI3MjQzMH0.PigWYOdXpJuQmE7UPsiAGGdm-Qd5u1DohCIaHohiEIg",

  // ---- Tempat menyimpan file dashboard ----
  //  "github"   = di repo GitHub ini, dikompres + DIENKRIPSI (disarankan, kuota 100 GB/bulan)
  //  "supabase" = di Supabase Storage (kuota download 5 GB/bulan)
  STORAGE: "github",
  GITHUB_REPO: "WJ-DASHBOARD/wj-portal",   // username GitHub / nama repo
  GITHUB_BRANCH: "main",
  GITHUB_DIR: "data",     // folder untuk file dashboard terenkripsi

  // Pengguna cukup mengetik username; portal menambahkan domain ini.
  // Contoh: username "budi" → login sebagai budi@wjportal.id
  // (buat user di Supabase dengan email yang sama persis).
  USERNAME_DOMAIN: "wjportal.id",

  // Aturan anti multiple login:
  //  "kick"  = login baru otomatis mengeluarkan sesi lama (disarankan)
  //  "block" = login baru DITOLAK selama sesi lama masih aktif
  SESSION_MODE: "block",

  // Interval cek sesi (detik) & batas sesi dianggap tidak aktif (mode "block")
  HEARTBEAT_SECONDS: 30,
  BLOCK_STALE_SECONDS: 120,

  // Keluar otomatis jika tidak ada aktivitas (menit). 0 = tidak pernah keluar otomatis.
  IDLE_MINUTES: 60,

  // Simpan dashboard di browser pengguna supaya tidak diunduh ulang
  // (hemat kuota download Supabase). Unduh ulang hanya jika admin "Ganti file".
  CACHE_DASHBOARDS: true,

  // Kontak (tampil di Beranda setelah login). Kosongkan [] untuk menyembunyikan.
  // Isi phone (WhatsApp) dan/atau email jika ingin bisa diklik, mis. phone: "081234567890"
  CONTACTS: [],

  // Grup tersembunyi di menu kiri: ganti ikon (emoji) & nama sesuka hati
  OTHERS_ICON: "🌐",
  OTHERS_LABEL: "Others",

  // Gambar latar halaman Beranda (file di repo yang sama). Kosongkan "" untuk polos.
  HOME_BG: "bg-home.jpg",

  // Panjang minimal password pengguna
  MIN_PASSWORD: 6,

  // Pilihan role pengguna, mis. DSO/DSP/HOA (bisa ditambah, atau diketik bebas di portal)
  POSITIONS: ["DSO", "DSP", "HOA"],

  // Pilihan area untuk data user (bisa diketik bebas juga)
  AREAS: [
    "REGION",   // untuk user tingkat region (bukan area tertentu)
    "BANDUNG BARAT CIMAHI", "KAB BANDUNG", "KOTA BANDUNG", "PURWAKARTA",
    "SUBANG", "SUMEDANG", "CIREBON", "INDRAMAYU", "MAJAKUNING",
    "CIAMIS", "GARUT", "TASIKMALAYA",
  ],
};
