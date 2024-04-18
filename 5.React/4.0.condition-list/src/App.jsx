import Articles from "./components/Articles";
import Lessons from "./components/Lessons";
import Message from "./components/Message";

function App() {
  let name = "DWWM";
  return (
    <div
      // style={{ minHeight: "100vh" }}
      className="d-flex flex-column justify-content-center align-items-center p-20"
    >
      <Articles displayArticle={true} />
      <Message displayMessage={false} />
      <Lessons name={name} />
    </div>
  );
}

export default App;
