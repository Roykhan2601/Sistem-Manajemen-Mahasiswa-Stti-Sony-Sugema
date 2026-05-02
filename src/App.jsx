import { useEffect, useState } from 'react';
import LoginPage from './pages/LoginPage';
import { getSessionUser } from './utils/auth';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    setCurrentUser(getSessionUser());
  }, []);

  if (!currentUser) {
    return <LoginPage onLogin={setCurrentUser} />;
  }

  return <main className="starter-page"><h1>Dashboard Akademik</h1></main>;
}

export default App;
