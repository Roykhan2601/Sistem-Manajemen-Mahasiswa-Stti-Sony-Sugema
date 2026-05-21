import { Edit, Eye, Trash2 } from 'lucide-react';

function MahasiswaList({ data, onDetail, onEdit, onDelete, isAdmin }) {
  return (
    <div className="table-card">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Read Data</p>
          <h3>Daftar Mahasiswa</h3>
        </div>
        <span className="data-count">{data.length} data ditemukan</span>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Mahasiswa</th>
              <th>NIM</th>
              <th>Program Studi</th>
              <th>Kelas</th>
              <th>Semester</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="7" className="empty-state">Data mahasiswa tidak ditemukan.</td>
              </tr>
            ) : (
              data.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="student-cell">
                      <div className="avatar-small">{item.nama.charAt(0)}</div>
                      <div>
                        <strong>{item.nama}</strong>
                        <span>{item.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>{item.nim}</td>
                  <td>{item.jurusan}</td>
                  <td>{item.kelas}</td>
                  <td>{item.semester}</td>
                  <td><span className={`badge ${item.status.toLowerCase().replace(' ', '-')}`}>{item.status}</span></td>
                  <td>
                    <div className="action-buttons">
                      <button className="icon-btn" onClick={() => onDetail(item)} title="Detail"><Eye size={16} /></button>
                      {isAdmin && (
                        <>
                          <button className="icon-btn edit" onClick={() => onEdit(item)} title="Edit"><Edit size={16} /></button>
                          <button className="icon-btn delete" onClick={() => onDelete(item.id)} title="Hapus"><Trash2 size={16} /></button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MahasiswaList;
