import { RotateCcw } from 'lucide-react';
import { useMemo, useState } from 'react';
import MahasiswaDetail from '../components/MahasiswaDetail';
import MahasiswaFilter from '../components/MahasiswaFilter';
import MahasiswaForm, { emptyForm } from '../components/MahasiswaForm';
import MahasiswaList from '../components/MahasiswaList';
import Mahasiswa from '../utils/Mahasiswa';
import { resetMahasiswa, saveMahasiswa } from '../utils/storage';

function MahasiswaPage({ mahasiswa, setMahasiswa, currentUser }) {
  const isAdmin = currentUser?.role === 'admin';
  const [formData, setFormData] = useState(emptyForm);
  const [editMode, setEditMode] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [keyword, setKeyword] = useState('');
  const [jurusanFilter, setJurusanFilter] = useState('Semua');
  const [statusFilter, setStatusFilter] = useState('Semua');
  const [message, setMessage] = useState('');

  const filteredData = useMemo(() => {
    return mahasiswa.filter((item) => {
      const searchText = `${item.nama} ${item.nim} ${item.jurusan} ${item.kelas}`.toLowerCase();
      const cocokKeyword = searchText.includes(keyword.toLowerCase());
      const cocokJurusan = jurusanFilter === 'Semua' || item.jurusan === jurusanFilter;
      const cocokStatus = statusFilter === 'Semua' || item.status === statusFilter;
      return cocokKeyword && cocokJurusan && cocokStatus;
    });
  }, [mahasiswa, keyword, jurusanFilter, statusFilter]);

  const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(''), 2600);
  };

  const validateForm = () => {
    const wajibDiisi = ['nama', 'nim', 'email', 'hp', 'alamat'];
    return wajibDiisi.every((field) => String(formData[field]).trim() !== '');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isAdmin) {
      showMessage('Akses ditolak. User hanya dapat melihat data mahasiswa.');
      return;
    }

    if (!validateForm()) {
      showMessage('Data penting belum lengkap. Silakan periksa form.');
      return;
    }

    if (editMode) {
      const updatedData = mahasiswa.map((item) => {
        if (item.id === selectedId) {
          const updatedMahasiswa = new Mahasiswa({ ...formData, id: selectedId });
          return updatedMahasiswa.toObject();
        }
        return item;
      });
      setMahasiswa(updatedData);
      saveMahasiswa(updatedData);
      setEditMode(false);
      setSelectedId(null);
      setFormData(emptyForm);
      showMessage('Data mahasiswa berhasil diperbarui.');
      return;
    }

    const mahasiswaBaru = new Mahasiswa({ ...formData, id: Date.now() }).toObject();
    const nextData = [...mahasiswa, mahasiswaBaru];
    setMahasiswa(nextData);
    saveMahasiswa(nextData);
    setFormData(emptyForm);
    showMessage('Data mahasiswa berhasil ditambahkan.');
  };

  const handleEdit = (item) => {
    if (!isAdmin) {
      showMessage('Akses edit hanya untuk admin.');
      return;
    }

    setEditMode(true);
    setSelectedId(item.id);
    setFormData(item);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id) => {
    if (!isAdmin) {
      showMessage('Akses hapus hanya untuk admin.');
      return;
    }

    const target = mahasiswa.find((item) => item.id === id);
    const yakin = window.confirm(`Hapus data ${target?.nama || 'mahasiswa'}?`);
    if (!yakin) return;

    const nextData = mahasiswa.filter((item) => item.id !== id);
    setMahasiswa(nextData);
    saveMahasiswa(nextData);
    showMessage('Data mahasiswa berhasil dihapus.');
  };

  const handleReset = () => {
    if (!isAdmin) {
      showMessage('Reset data hanya bisa dilakukan admin.');
      return;
    }

    const yakin = window.confirm('Kembalikan data contoh awal?');
    if (!yakin) return;
    const resetData = resetMahasiswa();
    setMahasiswa(resetData);
    setFormData(emptyForm);
    setEditMode(false);
    showMessage('Data contoh berhasil dikembalikan.');
  };

  return (
    <section className="page-section">
      {message && <div className="toast-message">{message}</div>}

      {isAdmin ? (
        <MahasiswaForm
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
          onCancelEdit={() => {
            setEditMode(false);
            setSelectedId(null);
          }}
          editMode={editMode}
        />
      ) : (
        <div className="panel-card access-note">
          <p className="eyebrow">Mode User</p>
          <h3>Akses Lihat Data Mahasiswa</h3>
          <p>Anda masuk sebagai user. Anda hanya dapat melihat dashboard, mencari, memfilter, dan membuka detail mahasiswa. Fitur tambah, edit, hapus, dan reset data dinonaktifkan untuk user.</p>
        </div>
      )}

      <div className="toolbar-row">
        <MahasiswaFilter
          keyword={keyword}
          setKeyword={setKeyword}
          jurusanFilter={jurusanFilter}
          setJurusanFilter={setJurusanFilter}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />
        {isAdmin && (
          <button className="btn-light reset-btn" onClick={handleReset}>
            <RotateCcw size={16} /> Reset Data
          </button>
        )}
      </div>

      <MahasiswaList
        data={filteredData}
        onDetail={setSelectedDetail}
        onEdit={handleEdit}
        onDelete={handleDelete}
        isAdmin={isAdmin}
      />

      <MahasiswaDetail mahasiswa={selectedDetail} onClose={() => setSelectedDetail(null)} />
    </section>
  );
}

export default MahasiswaPage;
