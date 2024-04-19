import OneTeam from "./OneTeam";
import styles from "./Team.module.scss";

export default function Team({ person, teams }) {
  //   console.log({ person });
  //   console.log({ teams });
  return (
    <div
      className="d-flex flex-column jc-start mt-30"
      style={{ width: "100%" }}
    >
      <h2 className={`mt-30 ${styles.presentation}`}>
        Welcome {person.name} !
      </h2>
      {person.age > 17 ? (
        <>
          <h2 className={`mt-30 ml-20 ${styles.east}`}>Conférence Est</h2>
          <div className="d-flex flex-wrap justify-content-center">
            {teams
              .filter((t) => t.conference === "Est")
              .map((t) => (
                <OneTeam key={t.id} t={t} />
              ))}
          </div>
          <h2 className={`mt-30 ml-20 ${styles.east}`}>Conférence Ouest</h2>
          <div className="d-flex flex-wrap justify-content-center">
            {teams
              .filter((t) => t.conference === "Ouest")
              .map((t) => (
                <OneTeam key={t.id} t={t} />
              ))}
          </div>
        </>
      ) : (
        <p className="text-error">Vous devez être majeur</p>
      )}
    </div>
  );
}
