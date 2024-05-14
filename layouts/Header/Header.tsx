import styles from "./styles/Header.module.css";
import { Navbar } from "../../components/spec/Navbar/Navbar";

const Header = () => {
  return (
    <header className={styles.container}>
      <Navbar />
    </header>
  );
};

export { Header };
