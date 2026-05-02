class Mahasiswa {
  constructor({ id, nama, nim, jenisKelamin, jurusan, kelas, semester, email, hp, alamat, status }) {
    this.id = id || Date.now();
    this.nama = nama;
    this.nim = nim;
    this.jenisKelamin = jenisKelamin;
    this.jurusan = jurusan;
    this.kelas = kelas;
    this.semester = Number(semester);
    this.email = email;
    this.hp = hp;
    this.alamat = alamat;
    this.status = status;
  }

  getInfoMahasiswa() {
    return `${this.nama} (${this.nim}) - ${this.jurusan} ${this.kelas}`;
  }

  updateStatus(statusBaru) {
    this.status = statusBaru;
    return this;
  }

  toObject() {
    return {
      id: this.id,
      nama: this.nama,
      nim: this.nim,
      jenisKelamin: this.jenisKelamin,
      jurusan: this.jurusan,
      kelas: this.kelas,
      semester: this.semester,
      email: this.email,
      hp: this.hp,
      alamat: this.alamat,
      status: this.status
    };
  }
}

export default Mahasiswa;
