import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import styles from "./App.module.scss";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    console.log(pathname);
  }, [pathname]);
  let name = "Jane";
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <div className="flex-fill">
        <Outlet context={name} />
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
export default App;
