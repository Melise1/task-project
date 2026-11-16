const FILTERS = ['All', 'Pending', 'Completed']

// Button group that switches which tasks are visible.
function TaskFilter({ activeFilter, onFilterChange }) {
  return (
    <div className="task-filter" role="group" aria-label="Filter tasks by status">
      {FILTERS.map((filter) => {
        const isActive = filter === activeFilter
        return (
          <button
            key={filter}
            type="button"
            className={`filter-btn${isActive ? ' filter-btn--active' : ''}`}
            aria-pressed={isActive}
            onClick={() => onFilterChange(filter)}
          >
            {filter}
          </button>
        )
      })}
    </div>
  )
}

export default TaskFilter
