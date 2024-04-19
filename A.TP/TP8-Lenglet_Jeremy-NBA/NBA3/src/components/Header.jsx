import Button from "./Button";
import styles from "./Header.module.scss";

export default function Header({ changeView }) {
  return (
    <div
      className={`d-flex flex-row jc-between align-items-center ${styles.header}`}
    >
      <h1 className={` ${styles.mainTitle}`}>NBA</h1>
      <input  type="text" />
      <div>
        <Button changeView={changeView} value="East" />
        <Button changeView={changeView} value="West" />
        <Button changeView={changeView} value="All" btnStyle={true} />
      </div>
    </div>
  );
}
