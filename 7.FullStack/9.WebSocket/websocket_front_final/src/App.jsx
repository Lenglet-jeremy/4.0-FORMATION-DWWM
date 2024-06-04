import { Outlet } from "react-router-dom";
import UserProvider from "./components/Providers/UserProvider";
import AllUsersProviders from "./components/Providers/AllUsersProvider";
import MessagesProvider from "./components/Providers/MessagesProvider";
import SocketProvider from "./components/Providers/SocketProvider";
import MessageSocketProvider from "./components/Providers/MessageSocketProvider";

function App() {
  return (
    <div className="d-flex flex-column flex-fill mh100">
      <UserProvider>
        <AllUsersProviders>
          <MessagesProvider>
            <SocketProvider>
              <MessageSocketProvider>
                <Outlet />
              </MessageSocketProvider>
            </SocketProvider>
          </MessagesProvider>
        </AllUsersProviders>
      </UserProvider>
    </div>
  );
}

export default App;
