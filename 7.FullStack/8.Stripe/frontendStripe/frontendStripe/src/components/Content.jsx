import styles from "./Content.module.scss";
import House from "./House";
import { data } from "../data/location";
import { useContext, useState } from "react";
import { HouseContext } from "../context/HouseContext";

function Content() {
  const { houses } = useContext(HouseContext);
  const [filter, setFilter] = useState("");
  function handleInput(e) {
    const value = e.target.value;
    setFilter(value.trim().toLowerCase());
  }
  return (
    <div className="flex-fill container p-20">
      <h1 className="my-30">Découvrez nos nouvelles locations</h1>
      <div className={`card d-flex flex-column p-20 ${styles.contentCard}`}>
        <div
          className={`d-flex justify-content-center align-items-center my-30 ${styles.searchBar}`}
        >
          <i className="fa-solid fa-magnifying-glass mr-15"></i>
          <input
            onInput={handleInput}
            className="flex-fill"
            type="text"
            placeholder="Rechercher"
          />
        </div>
        <div className={styles.grid}>
          {houses
            .filter((h) => h.name.toLowerCase().startsWith(filter))
            .map((h) => (
              <House key={h._id} house={h} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
