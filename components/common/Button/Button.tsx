import styles from "./styles/Button.module.css";
import { Spinner } from "../Spinner/Spinner";

type ButtonProps = {
  isLoading: boolean;
  onLogin: () => void;
  title: string;
};

const Button = ({ isLoading, onLogin, title }: ButtonProps) => {
  return (
    <button className={styles.loginBtn} onClick={onLogin}>
      {isLoading ? <Spinner /> : <>{title}</>}
    </button>
  );
};

export { Button };
