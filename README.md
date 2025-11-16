# UKM PCC – Landing Page (Vite + React + Tailwind)

Landing page satu halaman dengan struktur modular dan scalable. Dibangun dengan Vite + React + Tailwind CSS, lengkap dengan tooling (ESLint, Prettier, Husky) dan panduan deploy ke Vercel.

## Fitur
- Desain minimalis, mobile-first (Tailwind CSS)
- Section: Hero, Produk/Service, Testimoni, CTA, Footer
- Optimasi performa: gambar lazy-load, minify build
- Struktur folder modular: `components/`, `utils/`, `assets/`
- Clean code: ESLint + Prettier + pre-commit (Husky + lint-staged)
- Variabel environment via `.env`

## Prasyarat
- Node.js LTS (18+)
- npm (di Windows PowerShell)

## Setup
```powershell
# Install dependencies
npm install

# Buat file env dari contoh
Copy-Item .env.example .env -Force

# Jalankan server dev
npm run dev
```
Aplikasi akan berjalan di URL yang ditampilkan oleh Vite (default: http://localhost:5173).

## Struktur Proyek
```
src/
	components/
		common/           # Komponen generik (Button, dsb.)
		sections/         # Hero, Products, Testimonials, CTA, Footer
	utils/              # Helper & pembacaan env
	assets/             # Aset modul (opsional; gambar publik ada di public/assets)
public/
	assets/             # Gambar responsif & favicon
```

## Script NPM
- `npm run dev` — jalankan dev server
- `npm run build` — build produksi (minified)
- `npm run preview` — pratinjau hasil build
- `npm run lint` / `npm run lint:fix` — cek/perbaiki lint
- `npm run format` / `npm run format:check` — format/preflight Prettier

## Tailwind CSS
Konfigurasi ada di `tailwind.config.js` dan `postcss.config.js`. Direktif Tailwind sudah ditambahkan di `src/index.css`.

## Pre-commit Hooks (Husky)
Husky menjalankan `lint-staged` untuk ESLint dan Prettier pada file yang di-commit. Sudah terpasang via script `prepare` dan file `.husky/pre-commit`.

## Variabel Environment
Definisikan variabel di `.env` (jangan commit file ini):
```
VITE_SITE_NAME=UKM PCC
VITE_API_BASE_URL=https://api.example.com
VITE_ENV=development
```
Akses di kode dengan `import.meta.env` (lihat `src/utils/env.js`).

## Build & Test Lokal
```powershell
npm run build; npm run preview
```
Buka URL pratinjau yang ditampilkan (mis. http://localhost:4173).

## Deploy ke Vercel
Opsi 1 – Import Repo Git di dashboard Vercel (direkomendasikan)
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Env: masukkan variabel dari `.env`

Opsi 2 – Vercel CLI
```powershell
# Instal CLI (opsional global)
npm install -g vercel

# Login (ikuti instruksi)
vercel login

# Tes build lokal sebelum deploy
npm run build

# Deploy (interaktif)
vercel

# Deploy produksi eksplisit (gunakan konfigurasi build lokal)
vercel deploy --prebuilt --prod
```

## Catatan Performa
- Gambar menggunakan `loading="lazy"` dan responsive `sizes/srcSet` sederhana
- Vite meminifikasi JS/CSS secara default (juga diatur eksplisit di `vite.config.js`)

## Lisensi Aset
Pastikan aset gambar milik sendiri atau bebas lisensi sebelum publikasi.
