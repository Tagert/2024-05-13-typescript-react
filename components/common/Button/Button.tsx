import styles from "./styles/Button.module.css";
import { Spinner } from "../Spinner/Spinner";

type ButtonProps = {
  isLoading: boolean;
  onClick: () => void;
  title: string;
  type?: "WARNING" | "NORMAL";
  className?: string;
};

const Button = ({
  isLoading,
  onClick,
  title,
  type,
  className,
}: ButtonProps) => {
  return (
    <button
      className={`${styles.loginBtn} ${type === "WARNING" && styles.warring} ${
        className && className
      }`}
      onClick={onClick}
    >
      {isLoading ? <Spinner /> : <>{title}</>}
    </button>
  );
};

export { Button };
