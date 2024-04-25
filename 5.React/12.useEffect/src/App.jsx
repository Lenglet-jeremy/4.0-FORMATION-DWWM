import { useEffect } from "react";
import { useState } from "react";

function App() {
  console.log("render");
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("Course");
  useEffect(() => {
    console.log("effect");
    document.title = title;
  }, [title]);
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <h1>Hello</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)} className="btn btn-primary">
        {count}
      </button>
    </div>
  );
}

export default App;
