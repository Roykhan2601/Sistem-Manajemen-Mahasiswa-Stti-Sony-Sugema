import { BookOpenText, GraduationCap, Layers3, UsersRound } from 'lucide-react';
import StatCard from '../components/StatCard';
import { campusProfile, jurusanList, kelasList } from '../data/sampleData';

function Dashboard({ mahasiswa }) {
  const mahasiswaAktif = mahasiswa.filter((item) => item.status === 'Aktif').length;
  const latestData = [...mahasiswa].slice(-5).reverse();

  return (
    <section className="page-section">
      <div className="hero-card">
        <div>
          <p className="eyebrow">Sistem Informasi Akademik</p>
          <h1>Sistem Manajemen Mahasiswa</h1>
          <p>
            Aplikasi ini dibuat untuk proyek UTS Pemrograman Web Berbasis Framework.
            Tema visual dibuat mendekati identitas kampus {campusProfile.name}.
          </p>
        </div>
        <div className="hero-badge">
          <GraduationCap size={42} />
          <span>{campusProfile.city}</span>
        </div>
      </div>

      <div className="stats-grid">
        <StatCard label="Total Mahasiswa" value={mahasiswa.length} icon={<UsersRound size={26} />} note="Data lokal tersimpan" />
        <StatCard label="Jurusan" value={jurusanList.length} icon={<BookOpenText size={26} />} note="Program studi aktif" />
        <StatCard label="Kelas" value={kelasList.length} icon={<Layers3 size={26} />} note="Kelas terdaftar" />
        <StatCard label="Mahasiswa Aktif" value={mahasiswaAktif} icon={<GraduationCap size={26} />} note="Status aktif" />
      </div>

      <div className="content-grid">
        <div className="panel-card large-panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Data Terbaru</p>
              <h3>Mahasiswa Terakhir Ditambahkan</h3>
            </div>
          </div>
          <div className="recent-list">
            {latestData.map((item) => (
              <div className="recent-item" key={item.id}>
                <div className="avatar-small">{item.nama.charAt(0)}</div>
                <div>
                  <strong>{item.nama}</strong>
                  <span>{item.nim} • {item.jurusan} • {item.kelas}</span>
                </div>
                <span className={`badge ${item.status.toLowerCase().replace(' ', '-')}`}>{item.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="panel-card">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Alur Sistem</p>
              <h3>Input, Proses, Output</h3>
            </div>
          </div>
          <ol className="flow-list">
            <li><strong>Input</strong><span>Admin mengisi form data mahasiswa.</span></li>
            <li><strong>Proses</strong><span>React memvalidasi data, OOP membentuk objek, lalu disimpan ke localStorage.</span></li>
            <li><strong>Output</strong><span>Data tampil di tabel, dashboard, detail, filter, dan pencarian.</span></li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
