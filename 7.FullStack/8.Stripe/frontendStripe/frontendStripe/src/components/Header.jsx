import styles from "./Header.module.scss";
import { useContext, useState } from "react";
import HeaderMenu from "./HeaderMenu";
import { HouseContext } from "../context/HouseContext";
import { Link } from "react-router-dom";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const { cart } = useContext(HouseContext);
  // console.log(cart);
  function handleClick() {
    setShowMenu(true);
  }
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill">
        <h3>
          <Link to="/">TRAVEL</Link>
        </h3>
      </div>
      <ul className={styles.headerList}>
        <Link to="/cart" className="mr-5 btn btn-reverse-primary">
          <span className="mr-15">Cart</span>
          <span>{cart.length}</span>
        </Link>
      </ul>
      <i
        onClick={handleClick}
        className={`fa-solid fa-bars mr-15 ${styles.headerXs}`}
      ></i>
      {showMenu && (
        <>
          <div onClick={() => setShowMenu(false)} className="calc"></div>
          <HeaderMenu />
        </>
      )}
    </header>
  );
}

export default Header;
