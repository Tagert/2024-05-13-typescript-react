import styles from "./styles/PageTemplate.module.css";
import { ReactNode } from "react";
import { Header } from "../../../layouts/Header/Header";
import { Footer } from "../../../layouts/Footer/Footer";

type PageTemplateProps = {
  children: ReactNode;
};

const PageTemplate = ({ children }: PageTemplateProps) => {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.content}>{children}</div>

      <Footer />
    </div>
  );
};

export { PageTemplate };
