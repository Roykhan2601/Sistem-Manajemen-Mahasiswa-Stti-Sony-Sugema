function StatCard({ label, value, icon, note }) {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>
      <div>
        <p>{label}</p>
        <h3>{value}</h3>
        <span>{note}</span>
      </div>
    </div>
  );
}

export default StatCard;
