import { useRef } from "react";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  let timeOutId = useRef(null);

  function handleChange(e) {
    setValue(e.target.value);
    clearTimeout(timeOutId.current);
    timeOutId.current = setTimeout(() => {
      console.log(e.target.value);
    }, 3000);
  }

  console.log("render App");
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}

export default App;
