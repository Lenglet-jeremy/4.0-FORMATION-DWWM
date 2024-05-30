import { useContext } from "react";
import styles from "./House.module.scss";
import { HouseContext } from "../context/HouseContext";

function House({ house }) {
  const { addToCart } = useContext(HouseContext);
  return (
    <div className={styles.house}>
      <div className={styles.imageContainer}>
        <img src={house.image} alt="house" />
      </div>
      <div
        className={`${styles.houseTitle} d-flex flex-column justify-content-center align-items-center`}
      >
        <h3 className="mb-20">{house.name}</h3>
        <h4 className="mb-20">{house.price} €</h4>
        <button
          className="btn btn-primary mb-20"
          onClick={() => addToCart(house)}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default House;
