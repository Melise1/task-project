import { useState } from 'react'

const PRIORITIES = ['Low', 'Medium', 'High']

// Controlled form for creating a new task. Validates the title before submitting.
function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('Medium')
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const trimmedTitle = title.trim()

    if (!trimmedTitle) {
      setError('Please enter a task title.')
      return
    }

    onAddTask({ title: trimmedTitle, description: description.trim(), priority })

    // Reset the form after a successful submit.
    setTitle('')
    setDescription('')
    setPriority('Medium')
    setError('')
  }

  function handleTitleChange(event) {
    setTitle(event.target.value)
    if (error) setError('') // Clear the error once the user starts fixing it.
  }

  return (
    <form className="task-form" onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="task-title">
          Task Title <span aria-hidden="true">*</span>
        </label>
        <input
          id="task-title"
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="e.g. Write weekly report"
          aria-required="true"
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? 'task-title-error' : undefined}
        />
        {error && (
          <p id="task-title-error" className="form-error" role="alert">
            {error}
          </p>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="task-description">Description (optional)</label>
        <textarea
          id="task-description"
          rows="3"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Add any details"
        />
      </div>

      <div className="form-field">
        <label htmlFor="task-priority">Priority</label>
        <select
          id="task-priority"
          value={priority}
          onChange={(event) => setPriority(event.target.value)}
        >
          {PRIORITIES.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="btn btn--primary">
        Add Task
      </button>
    </form>
  )
}

export default TaskForm
