import { BookOpen, GraduationCap, LayoutDashboard, LogOut, ShieldCheck, UsersRound } from 'lucide-react';
import { campusProfile } from '../data/sampleData';

function Navbar({ activePage, setActivePage, currentUser, onLogout }) {
  const menus = [
    { key: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
    { key: 'mahasiswa', label: 'Data Mahasiswa', icon: <UsersRound size={18} /> }
  ];

  return (
    <aside className="sidebar">
      <div className="brand-card">
        <div className="brand-logo">
          <GraduationCap size={32} />
        </div>
        <div>
          <h1>{campusProfile.shortName}</h1>
          <p>Manajemen Mahasiswa</p>
        </div>
      </div>

      <div className="user-card">
        <div className="user-avatar">{currentUser?.nama?.charAt(0) || 'U'}</div>
        <div>
          <strong>{currentUser?.nama}</strong>
          <span><ShieldCheck size={13} /> {currentUser?.role === 'admin' ? 'Admin' : 'User'}</span>
        </div>
      </div>

      <nav className="nav-menu">
        {menus.map((menu) => (
          <button
            key={menu.key}
            onClick={() => setActivePage(menu.key)}
            className={activePage === menu.key ? 'nav-link active' : 'nav-link'}
          >
            {menu.icon}
            <span>{menu.label}</span>
          </button>
        ))}
      </nav>

    
      <button className="logout-btn" onClick={onLogout}>
        <LogOut size={18} /> Keluar
      </button>
    </aside>
  );
}

export default Navbar;
