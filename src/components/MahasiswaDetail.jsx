import { Mail, MapPin, Phone, UserRound, X } from 'lucide-react';

function MahasiswaDetail({ mahasiswa, onClose }) {
  if (!mahasiswa) return null;

  return (
    <div className="modal-backdrop">
      <div className="detail-modal">
        <button className="modal-close" onClick={onClose} aria-label="Tutup detail">
          <X size={20} />
        </button>
        <div className="detail-header">
          <div className="avatar-large">{mahasiswa.nama.charAt(0)}</div>
          <div>
            <p className="eyebrow">Detail Mahasiswa</p>
            <h2>{mahasiswa.nama}</h2>
            <span className={`badge ${mahasiswa.status.toLowerCase().replace(' ', '-')}`}>{mahasiswa.status}</span>
          </div>
        </div>

        <div className="detail-grid">
          <div><strong>NIM</strong><span>{mahasiswa.nim}</span></div>
          <div><strong>Jenis Kelamin</strong><span>{mahasiswa.jenisKelamin}</span></div>
          <div><strong>Program Studi</strong><span>{mahasiswa.jurusan}</span></div>
          <div><strong>Kelas</strong><span>{mahasiswa.kelas}</span></div>
          <div><strong>Semester</strong><span>{mahasiswa.semester}</span></div>
          <div><strong>Status</strong><span>{mahasiswa.status}</span></div>
        </div>

        <div className="contact-list">
          <p><Mail size={16} /> {mahasiswa.email}</p>
          <p><Phone size={16} /> {mahasiswa.hp}</p>
          <p><MapPin size={16} /> {mahasiswa.alamat}</p>
          <p><UserRound size={16} /> Data tersimpan di localStorage browser.</p>
        </div>
      </div>
    </div>
  );
}

export default MahasiswaDetail;
