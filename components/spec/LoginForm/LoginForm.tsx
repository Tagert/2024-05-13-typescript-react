import styles from "./styles/LoginForm.module.css";
import x_icon from "../../../public/assets/x_icon.svg";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

const LoginForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState(false);
  const [isBadData, setBadData] = useState(false);

  const onLogin = async () => {
    const loginBody = {
      email: email,
      password: password,
    };

    if (!email || !password) {
      setError(true);
      return;
    }

    setError(false);

    try {
      const res = await axios.post(
        "http://localhost:3000/users/login",
        loginBody
      );

      if (res.status === 201) {
        setBadData(false);
        localStorage.setItem("jwt_token", res.data.jwt_token);
        localStorage.setItem("jwt_refresh_token", res.data.jwt_refresh_token);
        router.push("/");
      }

      console.log("response:", res);
    } catch (err) {
      setBadData(true);
      console.log("err:", err);
    }
  };

  return (
    <div className={styles.login_card}>
      <div className={styles.login_modal} id="loginModal">
        <button className={styles.loginCloseBtn}>
          <Image alt="exit icon" className={styles.x_icon} src={x_icon} />
        </button>
        <div className={styles.active_login}>
          <h4>Welcome back</h4>
          <p>Log into your Account</p>
          <div className={styles.input}>
            <div className={styles.username_box}>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
                placeholder="Your email"
                autoComplete="on"
              />
            </div>

            <div className={styles.username_info_error}>
              <p className={styles.username_info}></p>
            </div>
          </div>

          <div className={styles.input}>
            <div className={styles.password_box}>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                type="password"
                placeholder="Your password"
              />
            </div>

            <div className={styles.password_info_error}>
              <p className={styles.password_info}></p>
            </div>
          </div>
        </div>

        <div className={styles.btn_info}>
          <button className={styles.loginBtn} onClick={onLogin}>
            Login
          </button>
          {isError && (
            <p className={styles.error}>Please fill all the inputs</p>
          )}
          {isBadData && (
            <p className={styles.error}>Your provided data is wrong</p>
          )}
        </div>
      </div>
    </div>
  );
};

export { LoginForm };
