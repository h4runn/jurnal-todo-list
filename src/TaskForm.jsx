import { useState } from 'react';
import styles from './TaskForm.module.css';

const TaskForm = ({ onAddTask }) => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('Umum');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    
    onAddTask(text, category);
    setText('');
    setCategory('Umum');
  };

  return (
    <form className={styles.formCard} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.inputField}
        placeholder="Tambah tugas baru..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className={styles.actionGroup}>
        <select
          className={styles.selectField}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Umum">📦 Umum</option>
          <option value="Kerja">💼 Kerja</option>
          <option value="Edukasi">🎓 Edukasi</option>
          <option value="Belanja">🛒 Belanja</option>
        </select>
        <button 
          type="submit" 
          className={styles.submitBtn} 
          disabled={!text.trim()}
        >
          Tambah
        </button>
      </div>
    </form>
  );
};

export default TaskForm;