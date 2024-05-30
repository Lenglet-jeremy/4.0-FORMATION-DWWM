import Footer from "./components/Footer";
import Header from "./components/Header";
import styles from "./App.module.scss";
import HouseProvider from "./components/Providers/HouseProvider";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <HouseProvider>
        <Header />
        <Outlet />
        <Footer />
      </HouseProvider>
    </div>
  );
}

export default App;
