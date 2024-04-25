import { useRef } from "react";
import Input from "./Input";

function App() {
  const inputRef = useRef(null);
  function handleClick() {
    inputRef.current.focus();
  }
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <Input ref={inputRef} />
      <button onClick={handleClick} className="btn btn-primary">
        Focus the input
      </button>
    </div>
  );
}

export default App;
