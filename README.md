# Task Management Dashboard

A responsive task dashboard built with React and Vite. Add, complete, filter and delete tasks. Everything runs in the browser: no backend, no external APIs, and plain CSS with no UI libraries.

## Features

- **Summary**: total, pending and completed counts that update automatically.
- **Add tasks**: title (required), optional description and priority (Low / Medium / High). Titles that are empty or only spaces are rejected with an error message.
- **Task cards**: title, description (when given), priority badge and status badge.
- **Toggle status**: switch a task between Pending and Completed.
- **Delete**: remove a task.
- **Filter**: show All, Pending or Completed tasks. The active filter is highlighted.
- **Empty state**: a friendly message when no tasks match the filter.
- **Persistence**: tasks are saved to `localStorage` and restored on reload. Three sample tasks appear on first load.
- **Responsive**: mobile-first layout that works down to 320px wide.
- **Accessible**: labelled inputs, real buttons and visible focus styles.

## Getting started

Requires [Node.js](https://nodejs.org/) 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually http://localhost:5173).

Build for production with `npm run build`, and preview the build with `npm run preview`.

## Project structure

```
src/
  App.jsx                       # State, handlers and layout
  App.css                       # All styles (mobile-first)
  main.jsx                      # Entry point
  components/
    DashboardSummary.jsx        # Title and task counts
    TaskForm.jsx                # Add-task form with validation
    TaskFilter.jsx              # All / Pending / Completed buttons
    TaskList.jsx                # List of cards or empty state
    TaskCard.jsx                # One task with its actions
```
