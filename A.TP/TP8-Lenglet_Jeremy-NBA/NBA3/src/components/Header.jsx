import Button from "./Button";
import styles from "./Header.module.scss";

export default function Header({ changeView, handleInput }) {
  return (
    <header className={`d-flex flex-row jc-between align-items-center`}>
      <h1 className={`mt-30 ${styles.mainTitle}`}>NBA</h1>
      <div
        className={`d-flex justify-content-center align-items-center my-30 ${styles.searchBar}`}
      >
        <i className="fa-solid fa-magnifying-glass mr-15"></i>
        <input
          onInput={handleInput}
          type="text"
          placeholder="Search"
          className="flex-fill"
        />
      </div>
      <nav>
        <Button changeView={changeView} value="East" />
        <Button changeView={changeView} value="West" />
        <Button changeView={changeView} value="all" btnStyle={true} />
      </nav>
    </header>
  );
}
