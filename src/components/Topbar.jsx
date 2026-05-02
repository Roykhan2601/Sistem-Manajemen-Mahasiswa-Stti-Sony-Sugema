import { CalendarDays, MapPin, ShieldCheck } from 'lucide-react';
import { campusProfile } from '../data/sampleData';

function Topbar({ title, currentUser }) {
  const today = new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <header className="topbar">
      <div>
        <p className="eyebrow">{campusProfile.name}</p>
        <h2>{title}</h2>
      </div>
      <div className="topbar-actions">
        <div className="pill hide-mobile">
          <MapPin size={16} />
          Karawang
        </div>
        <div className="pill hide-mobile">
          <CalendarDays size={16} />
          {today}
        </div>
        <div className="pill">
          <ShieldCheck size={16} />
          {currentUser?.role === 'admin' ? 'Admin' : 'User'}
        </div>
      </div>
    </header>
  );
}

export default Topbar;
