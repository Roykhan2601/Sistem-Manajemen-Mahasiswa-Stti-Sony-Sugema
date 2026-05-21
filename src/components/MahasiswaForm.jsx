import { Save, X } from 'lucide-react';
import { jurusanList, kelasByJurusan } from '../data/sampleData';

const emptyForm = {
  nama: '',
  nim: '',
  jenisKelamin: 'Laki-laki',
  jurusan: 'Teknik Informatika',
  kelas: 'TI 1A',
  semester: 1,
  email: '',
  hp: '',
  alamat: '',
  status: 'Aktif'
};

function MahasiswaForm({ formData, setFormData, onSubmit, onCancelEdit, editMode }) {
  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'jurusan') {
      const kelasPertama = kelasByJurusan[value]?.[0] || '';

      setFormData((prev) => ({
        ...prev,
        jurusan: value,
        kelas: kelasPertama
      }));

      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const pilihanKelas = kelasByJurusan[formData.jurusan] || [];

  const resetForm = () => {
    setFormData(emptyForm);
    onCancelEdit();
  };

  return (
    <form className="form-card" onSubmit={onSubmit}>
      <div className="section-heading">
        <div>
          <p className="eyebrow">Form Input</p>
          <h3>{editMode ? 'Edit Data Mahasiswa' : 'Tambah Data Mahasiswa'}</h3>
        </div>
        {editMode && (
          <button type="button" className="btn-light" onClick={resetForm}>
            <X size={16} /> Batal Edit
          </button>
        )}
      </div>

      <div className="form-grid">
        <label>
          Nama Lengkap
          <input name="nama" value={formData.nama} onChange={handleChange} placeholder="Contoh: Andi Saputra" required />
        </label>
        <label>
          NIM
          <input name="nim" value={formData.nim} onChange={handleChange} placeholder="Contoh: 11240001" required />
        </label>
        <label>
          Jenis Kelamin
          <select name="jenisKelamin" value={formData.jenisKelamin} onChange={handleChange}>
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>
        </label>
        <label>
          Program Studi
          <select name="jurusan" value={formData.jurusan} onChange={handleChange}>
            {jurusanList.map((jurusan) => <option key={jurusan} value={jurusan}>{jurusan}</option>)}
          </select>
        </label>
        <label>
          Kelas
          <select name="kelas" value={formData.kelas} onChange={handleChange} disabled={!formData.jurusan}>
            {pilihanKelas.map((kelas) => <option key={kelas} value={kelas}>{kelas}</option>)}
          </select>
        </label>
        <label>
          Semester
          <input name="semester" type="number" min="1" max="14" value={formData.semester} onChange={handleChange} required />
        </label>
        <label>
          Email
          <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="nama@student.stti.ac.id" required />
        </label>
        <label>
          Nomor HP
          <input name="hp" value={formData.hp} onChange={handleChange} placeholder="08xxxxxxxxxx" required />
        </label>
        <label>
          Status Mahasiswa
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="Aktif">Aktif</option>
            <option value="Cuti">Cuti</option>
            <option value="Lulus">Lulus</option>
            <option value="Tidak Aktif">Tidak Aktif</option>
          </select>
        </label>
        <label className="span-2">
          Alamat
          <textarea name="alamat" value={formData.alamat} onChange={handleChange} placeholder="Alamat lengkap mahasiswa" required />
        </label>
      </div>

      <button className="btn-primary" type="submit">
        <Save size={18} />
        {editMode ? 'Simpan Perubahan' : 'Tambah Mahasiswa'}
      </button>
    </form>
  );
}

export { emptyForm };
export default MahasiswaForm;
