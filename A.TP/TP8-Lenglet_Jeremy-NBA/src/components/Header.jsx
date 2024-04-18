import styles from "./Header.module.scss";

export default function Header({ onFilterChange, activeFilter }) {
  return (
    <div className={`${styles.main}`}>
      <div className={`${styles.left}`}>
        <h1 className={`${styles.mainTitle}`}>NBA</h1>
      </div>
      <div className={`${styles.right}`}>

        <button className={`${styles.buttons} ${
                activeFilter === "East" ? styles.active : ""}`}
                onClick={() => onFilterChange("East")}
        >
          East
        </button>

        <button className={`${styles.buttons} ${
                activeFilter === "West" ? styles.active : ""}`}
                onClick={() => onFilterChange("West")}
        >
          West
        </button>

        <button className={`${styles.buttons} ${
                activeFilter === "All" ? styles.active : ""}`}
                onClick={() => onFilterChange("All")}
        >
          All
        </button>

      </div>
    </div>
  );
}
