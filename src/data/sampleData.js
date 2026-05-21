export const campusProfile = {
  name: 'Sekolah Tinggi Teknologi Informatika Sony Sugema Karawang',
  shortName: 'STTI Sony Sugema',
  tagline: 'Kampus Teknologi Jembatan untuk Masa Depan Gemilang',
  city: 'Karawang',
  theme: 'Akademik, profesional, dan berbasis teknologi'
};

export const akunLogin = [
  {
    id: 1,
    nama: 'Administrator Akademik',
    username: 'admin',
    password: 'admin123',
    role: 'admin'
  },
  {
    id: 2,
    nama: 'Mahasiswa STTI',
    username: 'user',
    password: 'user123',
    role: 'user'
  }
];

export const jurusanList = [
  'Teknik Informatika',
  'Sistem Informasi',
  'Manajemen Informatika',
  'Teknik Komputer'
];

export const kelasByJurusan = {
  'Teknik Informatika': [
    'TI 1A',
    'TI 1B',
    'TI 2A',
    'TI 2B',
    'TI 3A',
    'TI 3B',
    'TI 4A',
    'TI 4B'
  ],
  'Sistem Informasi': [
    'SI 1A',
    'SI 1B',
    'SI 2A',
    'SI 2B',
    'SI 3A',
    'SI 3B',
    'SI 4A',
    'SI 4B'
  ],
  'Manajemen Informatika': [
    'MI 1A',
    'MI 1B',
    'MI 2A',
    'MI 2B',
    'MI 3A',
    'MI 3B',
    'MI 4A',
    'MI 4B'
  ],
  'Teknik Komputer': [
    'TK 1A',
    'TK 1B',
    'TK 2A',
    'TK 2B',
    'TK 3A',
    'TK 3B',
    'TK 4A',
    'TK 4B'
  ]
};

export const kelasList = Object.values(kelasByJurusan).flat();

export const initialMahasiswa = [
  {
    id: 1,
    nama: 'Mukhammad Roykhan Abidin',
    nim: '11240046',
    jenisKelamin: 'Laki-laki',
    jurusan: 'Teknik Informatika',
    kelas: 'TI 1A',
    semester: 2,
    email: 'roykhan.abidin@student.stti.ac.id',
    hp: '081234567890',
    alamat: 'Karawang Barat, Karawang',
    status: 'Aktif'
  },
  {
    id: 2,
    nama: 'Nabila Putri Azzahra',
    nim: '11240047',
    jenisKelamin: 'Perempuan',
    jurusan: 'Sistem Informasi',
    kelas: 'SI 1A',
    semester: 2,
    email: 'nabila.putri@student.stti.ac.id',
    hp: '081277771111',
    alamat: 'Telukjambe Timur, Karawang',
    status: 'Aktif'
  },
  {
    id: 3,
    nama: 'Rizky Maulana Saputra',
    nim: '11240048',
    jenisKelamin: 'Laki-laki',
    jurusan: 'Teknik Informatika',
    kelas: 'TI 1B',
    semester: 2,
    email: 'rizky.maulana@student.stti.ac.id',
    hp: '081288882222',
    alamat: 'Klari, Karawang',
    status: 'Aktif'
  },
  {
    id: 4,
    nama: 'Siti Nurhaliza',
    nim: '11240049',
    jenisKelamin: 'Perempuan',
    jurusan: 'Manajemen Informatika',
    kelas: 'MI 3A',
    semester: 6,
    email: 'siti.nurhaliza@student.stti.ac.id',
    hp: '081299993333',
    alamat: 'Cikampek, Karawang',
    status: 'Aktif'
  },
  {
    id: 5,
    nama: 'Dimas Pratama',
    nim: '11240050',
    jenisKelamin: 'Laki-laki',
    jurusan: 'Teknik Komputer',
    kelas: 'TK 1A',
    semester: 2,
    email: 'dimas.pratama@student.stti.ac.id',
    hp: '081211114444',
    alamat: 'Rengasdengklok, Karawang',
    status: 'Cuti'
  },
  {
    id: 6,
    nama: 'Alya Rahmawati',
    nim: '11240051',
    jenisKelamin: 'Perempuan',
    jurusan: 'Sistem Informasi',
    kelas: 'SI 2A',
    semester: 4,
    email: 'alya.rahmawati@student.stti.ac.id',
    hp: '081222225555',
    alamat: 'Karawang Timur, Karawang',
    status: 'Aktif'
  },
  {
    id: 7,
    nama: 'Fajar Nugroho',
    nim: '11240052',
    jenisKelamin: 'Laki-laki',
    jurusan: 'Teknik Informatika',
    kelas: 'TI 2A',
    semester: 4,
    email: 'fajar.nugroho@student.stti.ac.id',
    hp: '081233336666',
    alamat: 'Rawamerta, Karawang',
    status: 'Aktif'
  },
  {
    id: 8,
    nama: 'Indah Permatasari',
    nim: '11240053',
    jenisKelamin: 'Perempuan',
    jurusan: 'Manajemen Informatika',
    kelas: 'MI 3A',
    semester: 6,
    email: 'indah.permatasari@student.stti.ac.id',
    hp: '081244447777',
    alamat: 'Majalaya, Karawang',
    status: 'Lulus'
  },
  {
    id: 9,
    nama: 'Bayu Setiawan',
    nim: '11240054',
    jenisKelamin: 'Laki-laki',
    jurusan: 'Teknik Komputer',
    kelas: 'TK 1A',
    semester: 2,
    email: 'bayu.setiawan@student.stti.ac.id',
    hp: '081255558888',
    alamat: 'Jatisari, Karawang',
    status: 'Aktif'
  },
  {
    id: 10,
    nama: 'Putri Amelia',
    nim: '11240055',
    jenisKelamin: 'Perempuan',
    jurusan: 'Teknik Informatika',
    kelas: 'TI 2B',
    semester: 4,
    email: 'putri.amelia@student.stti.ac.id',
    hp: '081266669999',
    alamat: 'Purwasari, Karawang',
    status: 'Tidak Aktif'
  }
];
