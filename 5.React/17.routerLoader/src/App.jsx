import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import styles from "./App.module.scss";
import {
  Outlet,
  ScrollRestoration,
  useLoaderData,
  useLocation,
  useNavigation,
} from "react-router-dom";
import { useEffect } from "react";

function App() {
  const user = useLoaderData();
  console.log(user);
  const { pathname } = useLocation();
  const navigation = useNavigation();
  console.log(navigation);
  // useEffect(() => {
  //   console.log(pathname);
  // }, [pathname]);
  let name = "Jane";
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      {navigation.state === "loading" && <h2>Loading ...</h2>}
      <div className="flex-fill">
        <Outlet context={{ name, user }} />
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
export default App;
