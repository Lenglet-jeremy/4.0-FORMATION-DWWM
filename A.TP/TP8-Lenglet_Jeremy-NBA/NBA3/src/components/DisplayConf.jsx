import styles from "./DisplayConf.module.scss";
import OneTeam from "./OneTeam";

export default function DisplayConf({ teams, view }) {
  return (
    <>
      {view !== "All" && (
        <h2 className={`mt-30 ml-20 ${styles.east}`}>Conférence {view}</h2>
      )}
      <div className="d-flex flex-wrap justify-content-center">
        {view !== "All"
          ? teams
              .filter((t) => t.conference === view)
              .map((t) => <OneTeam key={t.id} t={t} />)
          : teams.map((t) => <OneTeam key={t.id} t={t} />)}
      </div>
    </>
  );
}
