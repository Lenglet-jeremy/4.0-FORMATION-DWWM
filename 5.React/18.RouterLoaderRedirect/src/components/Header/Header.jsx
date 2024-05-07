import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

function Header() {
  let id = 123;
  let username = "John";
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill">
        <strong> React-router </strong>
      </div>
      <ul className={styles.headerList}>
        <NavLink to="/">Homepage</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to={`/details/${id}/${username}`}>Details</NavLink>
      </ul>
    </header>
  );
}

export default Header;
