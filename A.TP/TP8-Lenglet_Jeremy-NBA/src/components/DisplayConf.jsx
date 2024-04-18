import styles from "./DisplayConf.module.scss";
import OneTeam from "./OneTeam";

export default function DisplayConf({ teams, filter }) {
  let filteredTeams = teams;

  if (filter !== "All") {
    filteredTeams = teams.filter((t) => t.conference === filter);
  }

  return (
    <>
      {filter === "All" && (
        <>
          <h2 className={`mt-30 ml-20 ${styles.east}`}>Conférence Est</h2>
          <div className="d-flex flex-wrap justify-content-center">
            {teams
              .filter((t) => t.conference === "East")
              .map((t) => (
                <OneTeam key={t.id} t={t} />
              ))}
          </div>
          <h2 className={`mt-30 ml-20 ${styles.east}`}>Conférence Ouest</h2>
          <div className="d-flex flex-wrap justify-content-center">
            {teams
              .filter((t) => t.conference === "West")
              .map((t) => (
                <OneTeam key={t.id} t={t} />
              ))}
          </div>
        </>
      )}
      {filter !== "All" && (
        <>
          <h2 className={`mt-30 ml-20 ${styles.east}`}>
            Conférence {filter === "East" ? "Est" : "Ouest"}
          </h2>
          <div className="d-flex flex-wrap justify-content-center">
            {filteredTeams.map((t) => (
              <OneTeam key={t.id} t={t} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
