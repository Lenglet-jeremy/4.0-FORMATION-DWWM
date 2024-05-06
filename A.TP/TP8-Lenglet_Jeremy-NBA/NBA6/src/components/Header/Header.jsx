import { useState } from "react";
import Button from "../Button";
import styles from "./Header.module.scss";
import HeaderMobile from "./components/HeaderMobile";
import { NavLink } from "react-router-dom";

export default function Header({ handleInput, licensed, changeSign }) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div
      className={`d-flex flex-row jc-between align-items-center ${styles.header}`}
    >
      <h1 className={` mt-30 ${styles.mainTitle}`}>
        <NavLink to="/">NBA</NavLink>
      </h1>
      <div
        className={`d-flex justify-content-center align-items-center my-30 ${styles.searchBar}`}
      >
        <i className="fa-solid fa-magnifying-glass mr-15"></i>
        <input
          onInput={handleInput}
          className="flex-fill"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className={`${styles.burgerMenu}`}>
        <NavLink to="/">Teams</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
        <NavLink to="/users">Users</NavLink>
      </div>
      <i
        onClick={() => setShowMenu(true)}
        className={`fas fa-bars mr-10 ${styles.mobileHeader}`}
      ></i>
      {showMenu && (
        <>
          <div onClick={() => setShowMenu(false)} className="calc"></div>
          <HeaderMobile
            setShowMenu={setShowMenu}
            licensed={licensed}
            changeSign={changeSign}
          />
        </>
      )}
    </div>
  );
}
