import styles from './EmptyState.module.css';

const EmptyState = ({ activeFilter }) => {
  const message = activeFilter === 'Semua'
    ? 'Belum ada catatan tugas. Yuk, mulai isi harimu!'
    : `Tidak ada tugas dengan status "${activeFilter}".`;

  return (
    <div className={styles.box}>
      <div className={styles.icon}>🎯</div>
      <h3 className={styles.text}>{message}</h3>
      <p className={styles.subtext}>Tetap produktif dan teratur setiap hari.</p>
    </div>
  );
};

export default EmptyState;