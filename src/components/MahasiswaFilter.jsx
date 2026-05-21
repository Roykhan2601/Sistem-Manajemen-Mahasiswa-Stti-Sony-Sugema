import { Search } from 'lucide-react';
import { jurusanList } from '../data/sampleData';

function MahasiswaFilter({ keyword, setKeyword, jurusanFilter, setJurusanFilter, statusFilter, setStatusFilter }) {
  return (
    <div className="filter-card">
      <div className="search-box">
        <Search size={18} />
        <input
          type="text"
          placeholder="Cari nama, NIM, program studi, atau kelas..."
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
        />
      </div>

      <select value={jurusanFilter} onChange={(event) => setJurusanFilter(event.target.value)}>
        <option value="Semua">Semua Program Studi</option>
        {jurusanList.map((jurusan) => (
          <option key={jurusan} value={jurusan}>{jurusan}</option>
        ))}
      </select>

      <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
        <option value="Semua">Semua Status</option>
        <option value="Aktif">Aktif</option>
        <option value="Cuti">Cuti</option>
        <option value="Lulus">Lulus</option>
        <option value="Tidak Aktif">Tidak Aktif</option>
      </select>
    </div>
  );
}

export default MahasiswaFilter;
