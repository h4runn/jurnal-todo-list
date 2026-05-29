import styles from './TaskItem.module.css';

const TaskItem = ({ task, onToggle, onDelete }) => {
  const { id, text, category, completed } = task;

  // Object mapping warna badge kategori
  const categoryStyles = {
    Umum: { bg: '#f1f5f9', color: '#475569' },
    Kerja: { bg: '#e0f2fe', color: '#0369a1' },
    Edukasi: { bg: '#f3e8ff', color: '#6b21a8' },
    Belanja: { bg: '#dcfce7', color: '#15803d' },
  };

  const currentStyle = categoryStyles[category] || categoryStyles.Umum;

  const handleDeleteClick = () => {
    if (window.confirm('Apakah Anda yakin ingin menghapus tugas ini?')) {
      onDelete(id);
    }
  };

  return (
    <div className={`${styles.taskCard} ${completed ? styles.isCompleted : ''}`}>
      <div className={styles.leftSection}>
        <button 
          className={`${styles.checkbox} ${completed ? styles.checked : ''}`} 
          onClick={() => onToggle(id)}
          aria-label="Toggle Complete"
        />
        <div className={styles.content}>
          <p className={`${styles.taskText} ${completed ? styles.lineThrough : ''}`}>
            {text}
          </p>
          <span 
            className={styles.badge} 
            style={{ backgroundColor: currentStyle.bg, color: currentStyle.color }}
          >
            {category}
          </span>
        </div>
      </div>
      <button className={styles.deleteBtn} onClick={handleDeleteClick}>
        🗑️
      </button>
    </div>
  );
};

export default TaskItem;