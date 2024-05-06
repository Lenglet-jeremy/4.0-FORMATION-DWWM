import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

function App() {
  const [teams, setTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [licensed, setLicensed] = useState(true);
  const [filterTeam, setFilterTeam] = useState("");
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
  async function addUser(e) {
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
    console.log(i);
    setTeams(teams.map((t) => (t._id === i ? { ...t, liked: !t.liked } : t)));
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

  function changeSign(e) {
    e.preventDefault();
    setLicensed(!licensed);
  }

  function handleInput(e) {
    const value = e.target.value;
    console.log(value);
    setFilterTeam(value.trim().toLowerCase());
  }

  function handleClickDelete(i) {
    console.log(i);
    const newUserList = allUsers.filter((t) => t._id !== i);
    setAllUsers(newUserList);
  }

  const person = {
    name: "John",
    age: 20,
  };
  return (
    <div className={`d-flex align-items-center flex-column  ${styles.main}`}>
      <Header
        handleInput={handleInput}
        licensed={licensed}
        changeSign={changeSign}
      />
      <Outlet
        context={{
          teams,
          allUsers,
          handleInputUser,
          user,
          licensed,
          person,
          toggleLiked,
          addUser,
          handleClickDelete,
          filterTeam,
          changeSign,
        }}
      />
    </div>
  );
}

export default App;
