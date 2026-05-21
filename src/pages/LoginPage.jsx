import { LockKeyhole, ShieldCheck, UserRound } from 'lucide-react';
import { useState } from 'react';
import { campusProfile } from '../data/sampleData';
import { loginUser } from '../utils/auth';

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username.trim() || !password.trim()) {
      setMessage('Username dan password wajib diisi.');
      return;
    }

    const loginResult = loginUser(username.trim(), password.trim());
    if (!loginResult) {
      setMessage('Username atau password salah.');
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
            <span>Login dengan akun admin untuk menambah, mengedit, dan menghapus data mahasiswa.</span>
          </div>
          <div>
            <strong>User</strong>
            <span>Login dengan akun user untuk melihat dashboard, daftar mahasiswa, pencarian, filter, dan detail data.</span>
          </div>
        </div>
      </section>

      <section className="login-card single-login-card">
        <div className="login-card-header">
          <div className="brand-logo login-logo">
            <UserRound size={28} />
          </div>
          <div>
            <p className="eyebrow">Login Aplikasi</p>
            <h2>Masuk ke Aplikasi</h2>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="login-form" autoComplete="off">
          <label>
            Username
            <input
              type="text"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
                setMessage('');
              }}
              placeholder="Masukkan username"
              autoComplete="off"
            />
          </label>

          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setMessage('');
              }}
              placeholder="Masukkan password"
              autoComplete="new-password"
            />
          </label>

          {message && <div className="login-error">{message}</div>}

          <button type="submit" className="btn-primary login-submit">
            <LockKeyhole size={18} /> Masuk ke Aplikasi
          </button>
        </form>
      </section>
    </main>
  );
}

export default LoginPage;
