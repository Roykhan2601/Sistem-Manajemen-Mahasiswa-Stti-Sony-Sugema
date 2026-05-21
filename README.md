# Sistem Manajemen Mahasiswa STTI Sony Sugema Karawang

Aplikasi web Sistem Manajemen Mahasiswa untuk proyek Ujian Tengah Semester mata kuliah Pemrograman Web Berbasis Framework. Tampilan dibuat dengan tema kampus Sekolah Tinggi Teknologi Informatika Sony Sugema Karawang.

## Fitur Aplikasi

- Login Admin dan User
- Dashboard akademik
- Statistik jumlah mahasiswa, program studi, kelas, dan mahasiswa aktif
- CRUD data mahasiswa khusus Admin
- User dapat melihat daftar, detail, pencarian, dan filter mahasiswa
- Form input mahasiswa
- Tabel data mahasiswa
- Modal detail mahasiswa
- Pencarian berdasarkan nama, NIM, program studi, dan kelas
- Filter berdasarkan program studi dan status
- LocalStorage sebagai penyimpanan data lokal
- JavaScript OOP dengan class Mahasiswa
- React Functional Component
- useState, useEffect, dan props
- UI responsif dan mobile-friendly

## Akun Login

Form login dibuat satu halaman tanpa pilihan role. Sistem otomatis membaca hak akses berdasarkan username dan password.

### Admin

```txt
Username: admin
Password: admin123
```

Admin dapat menambah, melihat, mengedit, menghapus, dan reset data mahasiswa.

### User

```txt
Username: user
Password: user123
```

User hanya dapat melihat dashboard, daftar mahasiswa, pencarian, filter, dan detail mahasiswa. User tidak dapat menambah, mengedit, menghapus, atau reset data.

## Teknologi yang Digunakan

- React JS
- Vite
- JavaScript
- CSS
- LocalStorage
- Lucide React Icons

## Cara Menjalankan Project

Pastikan Node.js sudah terinstall.

```bash
npm install
npm run dev
```

Buka alamat yang muncul di terminal, biasanya:

```txt
http://localhost:5173
```

## Cara Mengatasi Error npm install

Jika muncul error registry atau timeout, jalankan:

```bash
npm config set registry https://registry.npmjs.org/
npm cache clean --force
npm install
```

Jika folder node_modules terkunci di Windows, tutup VS Code dan browser, lalu hapus folder `node_modules`.

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install
```

## Struktur Folder

```txt
sistem-manajemen-mahasiswa-stti/
├── public/
│   └── stti-badge.svg
├── src/
│   ├── components/
│   │   ├── MahasiswaDetail.jsx
│   │   ├── MahasiswaFilter.jsx
│   │   ├── MahasiswaForm.jsx
│   │   ├── MahasiswaList.jsx
│   │   ├── Navbar.jsx
│   │   ├── StatCard.jsx
│   │   └── Topbar.jsx
│   ├── data/
│   │   └── sampleData.js
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── LoginPage.jsx
│   │   └── MahasiswaPage.jsx
│   ├── styles/
│   │   └── App.css
│   ├── utils/
│   │   ├── auth.js
│   │   ├── Mahasiswa.js
│   │   └── storage.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Penjelasan Singkat Aplikasi

Aplikasi ini membantu pengelolaan data mahasiswa secara sederhana. Admin dapat melakukan CRUD data mahasiswa. User dapat melihat data tanpa mengubah isi data. Data disimpan di browser menggunakan LocalStorage, sehingga tetap tersedia setelah halaman dimuat ulang.

## Flowchart Utama Aplikasi

```txt
Mulai
  ↓
Login menggunakan satu form
  ↓
Validasi username, password, dan role
  ↓
Jika valid, masuk dashboard
  ↓
Pilih menu Data Mahasiswa
  ↓
Admin: tambah, edit, hapus, detail, cari, filter
User: detail, cari, filter
  ↓
Data disimpan atau dibaca dari LocalStorage
  ↓
Output tampil pada dashboard dan tabel mahasiswa
  ↓
Selesai
```

## Penjelasan OOP

Project ini memakai class `Mahasiswa` di file:

```txt
src/utils/Mahasiswa.js
```

Class tersebut memiliki constructor dan method untuk membentuk object mahasiswa sebelum disimpan ke LocalStorage.

## Panduan Git untuk Pengumpulan UTS

Gunakan GitHub untuk mengumpulkan project.

Contoh alur:

```bash
git init
git add .
git commit -m "feat: membuat project awal"
git branch development
git checkout development
git commit -m "feat: menambahkan login admin dan user"
git checkout main
git merge development
```

Minimal yang disarankan:

- 10 commit
- 2 branch: main dan development
- Pull request atau merge
- Commit message rapi

Contoh commit message:

```txt
feat: membuat halaman login
feat: membuat dashboard akademik
feat: menambahkan form mahasiswa
feat: menambahkan tabel mahasiswa
feat: menambahkan fitur edit data
feat: menambahkan fitur hapus data
feat: menambahkan fitur pencarian
feat: menambahkan filter program studi dan status
style: memperbaiki tampilan responsive
fix: memperbaiki validasi form
```
Project ini dibuat untuk memenuhi tugas UTS Pemrograman Web Berbasis Framework.
## Catatan Revisi

Pada versi ini, halaman API Eksternal dan halaman Panduan Git sudah dihapus dari sidebar aplikasi sesuai permintaan. Panduan Git tetap disimpan di README agar masih bisa dipakai untuk kebutuhan pengumpulan UTS.
