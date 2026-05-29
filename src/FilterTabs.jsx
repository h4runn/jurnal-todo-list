import styles from './FilterTabs.module.css';

const FilterTabs = ({ activeFilter, onFilterChange, stats }) => {
  const tabs = [
    { key: 'Semua', label: `Semua (${stats.total})` },
    { key: 'Aktif', label: `Aktif (${stats.aktif})` },
    { key: 'Selesai', label: `Selesai (${stats.selesai})` },
  ];

  return (
    <div className={styles.tabsWrapper}>
      {tabs.map((tab) => (
        <button
          key={tab.key}
          className={`${styles.tabBtn} ${activeFilter === tab.key ? styles.active : ''}`}
          onClick={() => onFilterChange(tab.key)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;