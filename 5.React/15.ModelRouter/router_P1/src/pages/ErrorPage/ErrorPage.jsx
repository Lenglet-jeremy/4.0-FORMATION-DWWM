import { Link, useRouteError } from "react-router-dom";
import styles from "./ErrorPage.module.scss";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="d-flex flex-column center mhFull">
      <h1>{error.status}</h1>
      <h2 className="mb-20">{error.statusText}</h2>
      <Link to="/" className={styles.errorLink}>
        Back to Homepage
      </Link>
    </div>
  );
}
