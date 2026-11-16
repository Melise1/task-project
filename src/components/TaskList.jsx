import TaskCard from './TaskCard.jsx'

const EMPTY_MESSAGES = {
  All: 'No tasks yet. Add your first task using the form.',
  Pending: 'Nothing pending — nice work! 🎉',
  Completed: 'No completed tasks yet. You can do it!',
}

// Renders the filtered tasks, or a friendly message when there are none.
function TaskList({ tasks, filter, onToggleStatus, onDelete }) {
  if (tasks.length === 0) {
    return (
      <p className="empty-state" role="status">
        {EMPTY_MESSAGES[filter]}
      </p>
    )
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggleStatus={onToggleStatus}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}

export default TaskList
