import styles from "./styles/ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className={styles.container}>
      <h4>Contact Us</h4>
      <div className={styles.contactBox}>
        <div className={styles.userData}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
        </div>

        <div className={styles.messageBox}>
          <textarea name="message" placeholder="Message"></textarea>
          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
};

export { ContactUs };
