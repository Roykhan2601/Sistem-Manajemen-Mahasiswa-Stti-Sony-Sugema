import { akunLogin } from '../data/sampleData';

const SESSION_KEY = 'stti_session_user';

export function loginUser(username, password, role) {
  const foundUser = akunLogin.find((item) => {
    return item.username === username && item.password === password && item.role === role;
  });

  if (!foundUser) {
    return null;
  }

  const sessionData = {
    id: foundUser.id,
    nama: foundUser.nama,
    username: foundUser.username,
    role: foundUser.role
  };

  localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
  return sessionData;
}

export function getSessionUser() {
  const savedUser = localStorage.getItem(SESSION_KEY);
  if (!savedUser) {
    return null;
  }

  try {
    return JSON.parse(savedUser);
  } catch (error) {
    localStorage.removeItem(SESSION_KEY);
    return null;
  }
}

export function logoutUser() {
  localStorage.removeItem(SESSION_KEY);
}
