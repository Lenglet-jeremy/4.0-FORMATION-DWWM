import DisplayConf from "./DisplayConf";
import styles from "./Team.module.scss";

export default function Team({ person, teams, view, licensed, login }) {
  return (
    <div
      className="d-flex flex-column jc-start mt-30"
      style={{ width: "100%" }}
    >
      <div className="d-flex w-60 jc-between align-items-center">
        <h2 className={`mt-30 ${styles.presentation}`}>
          {licensed && <span>Welcome {person.name} !</span>}
        </h2>
        <button onClick={login} className="btn btn-reverse-primary">
          {licensed ? "Logout" : "Login"}
        </button>
      </div>
      {licensed ? (
        view === "All" ? (
          <>
            <DisplayConf teams={teams} view="All" />
          </>
        ) : view === "East" ? (
          <DisplayConf teams={teams} view={view} />
        ) : view === "West" ? (
          <DisplayConf teams={teams} view={view} />
        ) : null
      ) : (
        <p className="text-error d-flex justify-content-center mt-30 fz-20">
          Vous devez être licencié
        </p>
      )}
    </div>
  );
}
