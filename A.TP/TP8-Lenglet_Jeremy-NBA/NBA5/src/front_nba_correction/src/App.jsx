import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import Team from "./pages/Teams/Team";
import Users from "./pages/Users/Users";
import Favorites from "./pages/Favorites/Favorites";

function App() {
  const [teams, setTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [licensed, setLicensed] = useState(true);
  const [view, setView] = useState("all");
  const [filter, setFilter] = useState("");
  const [showPage, setShowPage] = useState("teams");
  const [user, setUser] = useState({
    name: "",
    player: "",
  });
  const [allUsers, setAllUsers] = useState([]);

  // récupération BDD avec useEffect
  useEffect(() => {
    async function getAllTeams() {
      try {
        const response = await fetch("http://localhost:5000/api/teams");
        if (response.ok) {
          const allTeams = await response.json();
          setTeams(allTeams);
        }
      } catch (error) {
        console.error(error);
      }
    }

    async function getAllPlayers() {
      try {
        const response = await fetch("http://localhost:5000/api/players");
        if (response.ok) {
          const allPlayers = await response.json();
          setAllUsers(allPlayers);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getAllTeams();
    getAllPlayers();
  }, []);

  // méthodes
  async function handleClick(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/players/add", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const user = await response.json();
        setAllUsers([...allUsers, { ...user }]);
        resetForm();
      }
    } catch (error) {
      console.error(error);
    }
  }

  function toggleLiked(i) {
    setTeams(
      teams.map((t, index) => (index + 1 === i ? { ...t, liked: !t.liked } : t))
    );
  }

  function resetForm() {
    setUser({
      name: "",
      player: "",
    });
  }

  function handleInputUser(e) {
    console.log(e.target.value);
    let value = e.target.value;
    const name = e.target.name;
    setUser({
      ...user,
      [name]: value,
    });
  }
  function login() {
    setLicensed(!licensed);
  }
  function changeView(value) {
    setView(value);
  }
  function handleInput(e) {
    const value = e.target.value;
    console.log(value);
    setFilter(value.trim().toLowerCase());
  }
  function handleTogglePages(value) {
    setShowPage(value);
  }
  function handleClickDelete(i) {
    console.log(i);
    const newUserList = allUsers.filter((t, index) => index !== i);
    setAllUsers(newUserList);
  }

  const person = {
    name: "John",
    age: 20,
  };
  return (
    <div className={`d-flex align-items-center flex-column  ${styles.main}`}>
      {showPage === "users" ? (
        <Users
          showUsers={handleTogglePages}
          handleClick={handleClick}
          handleInputUser={handleInputUser}
          user={user}
          allUsers={allUsers}
          handleClickDelete={handleClickDelete}
        />
      ) : showPage === "teams" ? (
        <>
          <Header
            changeView={changeView}
            handleInput={handleInput}
            licensed={licensed}
            login={login}
            handleTogglePages={handleTogglePages}
          />
          {isLoading ? (
            <Loading />
          ) : (
            <Team
              person={person}
              teams={teams}
              licensed={licensed}
              login={login}
              view={view}
              filter={filter}
              handleTogglePages={handleTogglePages}
              toggleLiked={toggleLiked}
            />
          )}
        </>
      ) : showPage === "favorites" ? (
        <Favorites
          showUsers={handleTogglePages}
          teams={teams}
          toggleLiked={toggleLiked}
        />
      ) : null}
    </div>
  );
}

export default App;
