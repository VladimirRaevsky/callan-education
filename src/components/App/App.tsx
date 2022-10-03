import Home from "../../pages/home/Home";

import styles from "./App.module.scss";

export default function App(): JSX.Element {
  return (
    <div className={styles.App}>
      <Home />
    </div>
  );
}
