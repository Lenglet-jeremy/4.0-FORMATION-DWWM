import styles from "./Users.module.scss";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

export default function Users() {
  const { allUsers, handleInputUser, user, addUser, handleClickDelete } =
    useOutletContext();
  return (
    <div
      className={`d-flex flex-column justify-content-center align-items-center ${styles.main}`}
    >
      <Link to="/" className={`mb-20 ${styles.link}`}>
        Back to Homepage
      </Link>
      <form className="d-flex flex-column align-items-center p-20 mb-20">
        <div className={`mb-20 ${styles.searchBar}`}>
          <input
            onInput={handleInputUser}
            type="text"
            placeholder="name"
            name="name"
            value={user.name || ""}
          />
        </div>
        <div className={`mb-20 ${styles.searchBar}`}>
          <input
            onInput={handleInputUser}
            type="text"
            name="player"
            placeholder="player"
            value={user.player || ""}
          />
        </div>
        <button onClick={addUser} className="btn btn-primary">
          Submit
        </button>
      </form>
      <ul className={`d-flex flex-column card list p-20 ${styles.list}`}>
        {allUsers.map((u, index) => (
          <li key={index} className="d-flex flex-row align-items-center mb-20">
            <span className={`flex-fill mr-20 ${styles.display}`}>
              {u.name} | {u.player}
            </span>
            <button
              onClick={() => {
                handleClickDelete(u._id);
              }}
              className="btn btn-reverse-primary"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
