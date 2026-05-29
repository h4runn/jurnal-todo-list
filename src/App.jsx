import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Inisialisasi state langsung membaca dari localStorage agar tidak bentrok tipe data
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      try {
        const parsedTasks = JSON.parse(savedTasks);
        if (Array.isArray(parsedTasks)) return parsedTasks;
      } catch (error) {
        console.error("Data rusak:", error);
      }
    }
    return []; // Kembali ke array kosong jika data tidak ada atau rusak
  });

  // Simpan data ke localStorage setiap kali ada perubahan pada state tasks
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input.trim() === '') return;
    
    setTasks(prevTasks => [...prevTasks, {
      id: Date.now(),
      text: input,
      done: false
    }]);
    setInput('');
  };

  const toggleTask = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const [input, setInput] = useState('');

  return (
    <div className="app">
      <div className="container">
        <h1>✅ To-Do List</h1>
        <p className="subtitle">Catatan Tugas Harian Siswa</p>

        <div className="input-area">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
            placeholder="Masukkan tugas baru..."
          />
          <button onClick={addTask}>Tambah</button>
        </div>

        <div className="task-list">
          {tasks.map((task) => (
            <div key={task.id} className="task-item">
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task.id)}
              />
              <span className={task.done ? 'done' : ''}>
                {task.text}
              </span>
              <button 
                onClick={() => deleteTask(task.id)} 
                className="delete-btn"
              >
                Hapus
              </button>
            </div>
          ))}
        </div>

        {tasks.length === 0 && (
          <p className="empty">Belum ada tugas. Tambahkan sekarang!</p>
        )}
      </div>
    </div>
  );
}

export default App;