import DisplayConf from "./DisplayConf";
import styles from "./Team.module.scss";

export default function Team({
  person,
  teams,
  view,
  licensed,
  login,
  filter,
  handleToggleUsers,
}) {
  return (
    <div
      className="d-flex flex-column jc-start mt-30"
      style={{ width: "100%" }}
    >
      <main className="d-flex jc-between align-items-center ">
        <h2 className={`mt-30 ${styles.presentation}`}>
          {licensed && <span>Welcome {person.name} !</span>}
        </h2>
        <nav>
          <button
            onClick={login}
            className="btn btn-reverse-primary mr-15 fz-20"
          >
            {licensed ? "Logout" : "Login"}
          </button>
          <button onClick={handleToggleUsers} className="btn btn-primary fz-20">
            Users
          </button>
        </nav>
      </main>
      {licensed ? (
        view === "all" ? (
          <>
            <DisplayConf teams={teams} filter={filter} />
          </>
        ) : view === "East" ? (
          <DisplayConf teams={teams} view={view} filter={filter} />
        ) : view === "West" ? (
          <DisplayConf teams={teams} view={view} filter={filter} />
        ) : null
      ) : (
        <p className="text-error d-flex justify-content-center mt-30 fz-20">
          Vous devez être licencié
        </p>
      )}
    </div>
  );
}
