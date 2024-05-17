import styles from "./styles/Modal.module.css";
import { Button } from "../../common/Button/Button";

type ModalProps = {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const Modal = ({ message, onConfirm, onCancel }: ModalProps) => {
  return (
    <>
      <div className={styles.container}>
        <h4>{message}</h4>

        <div className={styles.btnHolder}>
          <Button
            isLoading={false}
            onClick={() => onCancel()}
            title="No, cancel"
          />

          <Button
            isLoading={false}
            onClick={() => onConfirm()}
            title="Yes, delete"
            type="WARNING"
          />
        </div>
      </div>

      <div onClick={() => onCancel()} className={styles.background}></div>
    </>
  );
};

export { Modal };
