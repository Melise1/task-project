// Header with the app title and live task counts derived from the tasks prop.
function DashboardSummary({ tasks }) {
  const total = tasks.length
  const completed = tasks.filter((task) => task.status === 'Completed').length
  const pending = total - completed

  const stats = [
    { label: 'Total Tasks', value: total, modifier: 'total' },
    { label: 'Pending Tasks', value: pending, modifier: 'pending' },
    { label: 'Completed Tasks', value: completed, modifier: 'completed' },
  ]

  return (
    <header className="summary">
      <h1 className="summary-title">Task Management Dashboard</h1>
      <ul className="summary-stats">
        {stats.map((stat) => (
          <li key={stat.label} className={`stat-card stat-card--${stat.modifier}`}>
            <span className="stat-label">{stat.label}</span>
            <span className="stat-value">{stat.value}</span>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default DashboardSummary
