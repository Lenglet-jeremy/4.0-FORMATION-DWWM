import { useState } from "react";
import styles from "./App.module.scss";
import Team from "./pages/Teams/Team";
import Header from "./components/Header/Header";
import Users from "./pages/Users/Users";
import {datas} from "./data"
import Loading from "./components/Loading/Loading"

function App() {

  const [teams, setTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
    setTeams(datas);
  }, 5000);
  const [licensed, setLicensed] = useState(true);
  const [view, setView] = useState("all");
  const [filter, setFilter] = useState("");
  const [showUsers, setShowUsers] = useState(false);
  const [user, setUser] = useState({
    name: "",
    player: "",
  });
  const [allUsers, setAllUsers] = useState([]);

  function handleClickForm(e) {
    e.preventDefault();
    console.log(user);
    setAllUsers([...allUsers, { ...user }]);
  }

  function handleInputUser(e) {
    let value = e.target.value;
    const name = e.target.name;
    setUser({
      ...user,
      [name]: value,
    });
  }

  function handleClickDelete(id) {
    console.log(id);
    const newUserList = allUsers.filter((u, i) => i !== id);
    setAllUsers(newUserList);
  }

  function changeView(value) {
    setView(value);
  }

  function handleInput(e) {
    const value = e.target.value;
    console.log(value);
    setFilter(value.trim().toLowerCase());
  }

  function handleToggleUsers() {
    setShowUsers(!showUsers);
  }

  function login() {
    setLicensed(!licensed);
  }

  const person = {
    name: "John",
    age: 20,
  };
  return (
    <div className={`d-flex align-items-center flex-column  ${styles.main}`}>
      {showUsers ? (
        <Users
          handleToggleUsers={handleToggleUsers}
          handleInputUser={handleInputUser}
          handleClickForm={handleClickForm}
          user={user}
          allUsers={allUsers}
          handleClickDelete={handleClickDelete}
        />
      ) : (
        <>
          <Header changeView={changeView} handleInput={handleInput} />
          {isLoading ? (
            <Loading />
          ) : (<Team
            person={person}
            teams={teams}
            view={view}
            licensed={licensed}
            login={login}
            filter={filter}
            handleToggleUsers={handleToggleUsers}
          />
        ) }
          </>
      )}
    </div>
  );
}

export default App;
