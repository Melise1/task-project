// A single task with its badges and actions.
function TaskCard({ task, onToggleStatus, onDelete }) {
  const { id, title, description, priority, status } = task
  const isCompleted = status === 'Completed'

  return (
    <li className={`task-card${isCompleted ? ' task-card--completed' : ''}`}>
      <div className="task-card-header">
        <h3 className="task-title">{title}</h3>
        <div className="task-badges">
          <span className={`badge badge--${priority.toLowerCase()}`}>
            {priority} priority
          </span>
          <span className={`badge badge--${status.toLowerCase()}`}>{status}</span>
        </div>
      </div>

      {description && <p className="task-description">{description}</p>}

      <div className="task-actions">
        <button
          type="button"
          className="btn btn--secondary"
          onClick={() => onToggleStatus(id)}
        >
          {isCompleted ? 'Mark Pending' : 'Mark Completed'}
        </button>
        <button
          type="button"
          className="btn btn--danger"
          onClick={() => onDelete(id)}
          aria-label={`Delete task: ${title}`}
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default TaskCard
