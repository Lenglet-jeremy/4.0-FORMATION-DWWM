import Button from "./Button";
import styles from "./Header.module.scss";

export default function Header({ changeView }) {
  return (
    <div
      className={`d-flex flex-row jc-between align-items-center ${styles.header}`}
    >
      <h1 className={` mt-30 ${styles.mainTitle}`}>NBA</h1>
      <div>
        <Button changeView={changeView} value="East" />
        <Button changeView={changeView} value="West" />
        <Button changeView={changeView} value="all" btnStyle={true} />
      </div>
    </div>
  );
}
