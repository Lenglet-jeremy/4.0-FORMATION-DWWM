import { Link } from "react-router-dom";
import styles from "./headerMobile.module.scss";

export default function HeaderMobile({ licensed, changeSign, setShowMenu }) {
  return (
    <ul className={`p-20 d-flex flex-column ${styles.container}`}>
      <Link
        to=""
        onClick={() => {
          setShowMenu(false);
        }}
      >
        All
      </Link>
      <Link
        to="/West"
        onClick={() => {
          setShowMenu(false);
        }}
      >
        West
      </Link>
      <Link
        to="/East"
        onClick={() => {
          setShowMenu(false);
        }}
      >
        East
      </Link>
      <Link
        onClick={(e) => {
          changeSign(e);
          setShowMenu(false);
        }}
      >
        {licensed ? "Logout" : "Login"}
      </Link>
      <Link to="/users">Users</Link>
      <Link to="/favorites">Favorites</Link>
    </ul>
  );
}
