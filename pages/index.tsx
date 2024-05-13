import styles from "../styles/App.module.css";
import { Header } from "../layouts/Header/Header";

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
};

export default App;
