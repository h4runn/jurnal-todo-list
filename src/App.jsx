import { useState } from 'react';
import './index.css';
import Header from './Header';
import TaskForm from './TaskForm';
import FilterTabs from './FilterTabs';
import TaskItem from './TaskItem';
import EmptyState from './EmptyState';

const initialTasks = [
  { id: 1, text: 'Selesaikan modul React State', category: 'Edukasi', completed: true },
  { id: 2, text: 'Review code presentasi project', category: 'Kerja', completed: false }
];

const App = () => {
  // ── STATE ──────────────────────────────────────────────
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState('Semua');

  // ── DERIVED DATA (Kalkulasi Stat & Filter) ─────────────
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Aktif') return !task.completed;
    if (filter === 'Selesai') return task.completed;
    return true;
  });

  const stats = {
    total: tasks.length,
    selesai: tasks.filter((t) => t.completed).length,
    aktif: tasks.filter((t) => !t.completed).length,
  };

  // ── HANDLERS (Immutability Murni) ─────────────────────
  const handleAddTask = (text, category) => {
    const newTask = {
      id: Date.now(),
      text: text,
      category: category,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleToggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <Header stats={stats} />
      <main className="container">
        <TaskForm onAddTask={handleAddTask} />
        <FilterTabs activeFilter={filter} onFilterChange={setFilter} stats={stats} />
        
        {filteredTasks.length === 0 ? (
          <EmptyState activeFilter={filter} />
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {filteredTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={handleToggleTask}
                onDelete={handleDeleteTask}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;