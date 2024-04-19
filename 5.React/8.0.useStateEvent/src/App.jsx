import { useState } from "react"

function App() {

  const [user, setUser] = useState({
    name : "",
    age : null,
  });

  const [allUsers, setAllUsers] = useState([])

function handleClick(e){
  e.preventDefault();
  console.log(user);
  setAllUsers([...allUsers, {...user}])
}

function handleClickSort(){
  const newUserList = [...allUsers]
  newUserList.sort((a,b) => a.name.localeCompare(b.name),
  setAllUsers(newUserList))
}

// function handleInputName(e){
//   let value = e.target.value;
//   console.log(value);
//   setUser({
//     ...user,
//     name : value,
//   })
// }

// function handleInputAge(e){
//   let value = e.target.value;
//   console.log(value);
//   setUser({
//     ...user,
//     age : value,
//   })
// }

  function handleInput(e){
    console.log(e.target.value);
    console.log(e.target.name);
    let value = e.target.value;
    let name = e.target.name;
    if (name === "age"){
      value = +value
    }
    setUser({
      ...user,
      [name] : value,
    })
  }


  return (
    <>
    <div className={`d-flex flex-column 
    justify-content-center 
    align-items-center mh-100`}>
      <form className="d-flex flex-column p20 mb-20">

        <input onInput={handleInput}
               type="text"
               name="name" 
               className="mb-20" 
               placeholder="name"
        />
        
        <input onInput={handleInput}
               type="text" 
               className="mb-20" 
               placeholder="age"
               name="age" />
        
        <button onClick={handleClick} className="btn btn-primary">
          Submit
        </button>

      </form>
      <button onClick={handleClickSort} className="btn btn-primary"> Trier</button>
      <ul style={{width:"700px", minHeight : "500px"}} 
          className="d-flex flex-col card p-20"
      >
        {allUsers.map((user, index) => (
          <li className="d-flex align-items-center mb-20">
            {user.name} | {user.age}
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
