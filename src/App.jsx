import { useEffect, useState } from 'react'
import DashboardSummary from './components/DashboardSummary.jsx'
import TaskForm from './components/TaskForm.jsx'
import TaskFilter from './components/TaskFilter.jsx'
import TaskList from './components/TaskList.jsx'
import './App.css'

const STORAGE_KEY = 'task-dashboard.tasks'

const SAMPLE_TASKS = [
  {
    id: crypto.randomUUID(),
    title: 'Plan the weekly sprint',
    description: 'List the goals and split them into small tasks.',
    priority: 'High',
    status: 'Pending',
  },
  {
    id: crypto.randomUUID(),
    title: 'Review pull requests',
    description: '',
    priority: 'Medium',
    status: 'Completed',
  },
  {
    id: crypto.randomUUID(),
    title: 'Update project README',
    description: 'Add setup steps and a feature list.',
    priority: 'Low',
    status: 'Pending',
  },
]

// Load saved tasks, falling back to the samples if storage is empty or unreadable.
function loadTasks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const parsed = JSON.parse(saved)
      if (Array.isArray(parsed)) return parsed
    }
  } catch {
    // Ignore storage errors (private mode, corrupted data) and use samples.
  }
  return SAMPLE_TASKS
}

function App() {
  // Lazy initializer so localStorage is read only once, on first render.
  const [tasks, setTasks] = useState(loadTasks)
  const [filter, setFilter] = useState('All')

  // Persist tasks whenever they change.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
    } catch {
      // Storage may be unavailable; the app still works in memory.
    }
  }, [tasks])

  function addTask({ title, description, priority }) {
    const newTask = {
      id: crypto.randomUUID(),
      title,
      description,
      priority,
      status: 'Pending',
    }
    setTasks((prev) => [newTask, ...prev])
  }

  function toggleTaskStatus(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, status: task.status === 'Pending' ? 'Completed' : 'Pending' }
          : task,
      ),
    )
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  const visibleTasks =
    filter === 'All' ? tasks : tasks.filter((task) => task.status === filter)

  return (
    <div className="app">
      <DashboardSummary tasks={tasks} />

      <main className="app-main">
        <section className="panel" aria-labelledby="form-heading">
          <h2 id="form-heading" className="panel-title">Add a task</h2>
          <TaskForm onAddTask={addTask} />
        </section>

        <section className="panel" aria-labelledby="list-heading">
          <div className="list-header">
            <h2 id="list-heading" className="panel-title">Tasks</h2>
            <TaskFilter activeFilter={filter} onFilterChange={setFilter} />
          </div>
          <TaskList
            tasks={visibleTasks}
            filter={filter}
            onToggleStatus={toggleTaskStatus}
            onDelete={deleteTask}
          />
        </section>
      </main>
    </div>
  )
}

export default App
