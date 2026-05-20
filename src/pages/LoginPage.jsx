import { LockKeyhole, ShieldCheck, UserRound } from 'lucide-react';
import { useState } from 'react';
import { campusProfile } from '../data/sampleData';
import { loginUser } from '../utils/auth';

function LoginPage({ onLogin }) {
  const [role, setRole] = useState('admin');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

 const handleRoleChange = (selectedRole) => {
  setRole(selectedRole);
  setMessage('');

  setUsername('');
  setPassword('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const loginResult = loginUser(username.trim(), password.trim(), role);
    if (!loginResult) {
      setMessage('Username, password, atau pilihan role tidak sesuai.');
      return;
    }

    onLogin(loginResult);
  };

  return (
    <main className="login-page">
      <section className="login-hero">
        <div className="login-badge">
          <ShieldCheck size={34} />
        </div>
        <p className="eyebrow">{campusProfile.name}</p>
        <h1>Sistem Manajemen Mahasiswa</h1>
        <p>
          Aplikasi akademik untuk mengelola data mahasiswa dengan tampilan profesional,
          penyimpanan lokal, CRUD, dan konsep React sesuai kebutuhan UTS Framework.
        </p>

        <div className="login-info-grid">
          <div>
            <strong>Admin</strong>
            <span>Kelola, tambah, edit, dan hapus data mahasiswa.</span>
          </div>
          <div>
            <strong>User</strong>
            <span>Lihat dashboard, daftar mahasiswa, filter, pencarian, dan detail data.</span>
          </div>
        </div>
      </section>

      <section className="login-card">
        <div className="login-card-header">
          <div className="brand-logo login-logo">
            <UserRound size={28} />
          </div>
          <div>
            <p className="eyebrow">Login Aplikasi</p>
            <h2>Masuk sebagai {role === 'admin' ? 'Admin' : 'User'}</h2>
          </div>
        </div>

        <div className="role-switcher">
          <button
            type="button"
            className={role === 'admin' ? 'role-btn active' : 'role-btn'}
            onClick={() => handleRoleChange('admin')}
          >
            Admin
          </button>
          <button
            type="button"
            className={role === 'user' ? 'role-btn active' : 'role-btn'}
            onClick={() => handleRoleChange('user')}
          >
            User
          </button>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <label>
            Username
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Masukkan username"
            />
          </label>

          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Masukkan password"
            />
          </label>

          {message && <div className="login-error">{message}</div>}

          <button type="submit" className="btn-primary login-submit">
            <LockKeyhole size={18} /> Masuk ke Aplikasi
          </button>
        </form>

        <div className="credential-box">
          <p><strong>Akun Admin:</strong> admin / admin123</p>
          <p><strong>Akun User:</strong> user / user123</p>
        </div>
      </section>
    </main>
  );
}

export default LoginPage;
