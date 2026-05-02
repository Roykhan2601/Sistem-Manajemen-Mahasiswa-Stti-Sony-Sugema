import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import MahasiswaPage from './pages/MahasiswaPage';
import { getSessionUser, logoutUser } from './utils/auth';
import { getStoredMahasiswa } from './utils/storage';

function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const [mahasiswa, setMahasiswa] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    setMahasiswa(getStoredMahasiswa());
    setCurrentUser(getSessionUser());
  }, []);

  const pageTitle = {
    dashboard: 'Dashboard Akademik',
    mahasiswa: 'Manajemen Data Mahasiswa'
  }[activePage];

  const handleLogout = () => {
    logoutUser();
    setCurrentUser(null);
    setActivePage('dashboard');
  };

  const renderPage = () => {
    if (activePage === 'dashboard') {
      return <Dashboard mahasiswa={mahasiswa} currentUser={currentUser} />;
    }

    return (
      <MahasiswaPage
        mahasiswa={mahasiswa}
        setMahasiswa={setMahasiswa}
        currentUser={currentUser}
      />
    );
  };

  if (!currentUser) {
    return <LoginPage onLogin={setCurrentUser} />;
  }

  return (
    <div className="app-shell">
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        currentUser={currentUser}
        onLogout={handleLogout}
      />
      <main className="main-content">
        <Topbar title={pageTitle} currentUser={currentUser} />
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
