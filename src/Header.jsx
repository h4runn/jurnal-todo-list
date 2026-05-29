import styles from './Header.module.css';

const Header = ({ stats }) => {
  const { aktif } = stats;

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.logoArea}>
            <div className={styles.logoIcon}>✨</div>
            <div>
              <h1 className={`${styles.title} gradient-text`}>TaskGrid</h1>
              <p className={styles.subtitle}>
                {aktif === 0 
                  ? 'Semua tugas selesai! Luar biasa.' 
                  : `Kamu punya ${aktif} tugas aktif hari ini.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;