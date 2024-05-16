import { ContactUs } from "../../components/spec/ContactUs/ContactUs";
import { Social } from "../../components/spec/Social/Social";
import styles from "./styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.info}>
        <h4>PROJECT</h4>

        <ContactUs />

        <Social />
      </div>

      <div className={styles.copyright}>
        <p>©2024 PROJECT. ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
};

export { Footer };
