import { Outlet } from "react-router-dom";
import UserProvider from "./components/Providers/UserProvider";

function App() {
  return (
    <div className="d-flex flex-column flex-fill mh100">
      <UserProvider>
        <Outlet />
      </UserProvider>
    </div>
  );
}

export default App;
