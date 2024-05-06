import styles from "./Team.module.scss";
import OneTeam from "./OneTeam";
import { NavLink, useOutletContext, useParams } from "react-router-dom";

export default function Team() {
  const { teams, licensed, person, filterTeam, changeSign } =
    useOutletContext();
  const { conference } = useParams();
  console.log(conference);
  return (
    <div
      className="d-flex flex-column jc-start mt-30"
      style={{ width: "100%" }}
    >
      <div className={`d-flex ${styles.main} jc-between align-items-center`}>
        <h2 className={`${styles.presentation}`}>
          {licensed ? (
            <span>Welcome {person.name} !</span>
          ) : (
            <span>Veuillez vous connecter</span>
          )}
        </h2>
        <ul>
          <NavLink end to="/East">
            East
          </NavLink>
          <NavLink to="/West">West</NavLink>
          <NavLink to="">All</NavLink>
          <i
            onClick={changeSign}
            className={
              licensed ? "fas fa-right-from-bracket" : "fas fa-right-to-bracket"
            }
          ></i>
        </ul>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {licensed
          ? conference
            ? teams
                .filter((t) => t.conference === conference)
                .filter((t) => t.club.toLowerCase().startsWith(filterTeam))
                .map((t) => <OneTeam key={t._id} t={t} />)
            : teams
                .filter((t) => t.club.toLowerCase().startsWith(filterTeam))
                .map((t) => <OneTeam key={t._id} t={t} />)
          : null}
      </div>
    </div>
  );
}
