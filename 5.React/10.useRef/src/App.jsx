import { useRef } from "react";
import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0);
  const count = useRef(0);
  // console.log(count);

  function handleClick() {
    // setCount(count + 1);
    // console.log(count);
    count.current++;
    console.log(count);
  }

  console.log("render App");
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <button onClick={handleClick} className="btn btn-primary">
        Click
      </button>
    </div>
  );
}

export default App;
