import styles from "./styles/LoginForm.module.css";
import Link from "next/link";
import x_icon from "../../../public/assets/x_icon.svg";
import Image from "next/image";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "../../common/Button/Button";
import cookie from "js-cookie";

const LoginForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState(false);
  const [isBadData, setBadData] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const onLogin = async () => {
    setLoading(true);
    const loginBody = {
      email: email,
      password: password,
    };

    if (!email || !password) {
      setError(true);
      setLoading(false);
      return;
    }

    setError(false);

    try {
      const res = await axios.post(
        `${process.env.SERVER_URL}/users/login`,
        loginBody
      );

      if (res.status === 201) {
        setBadData(false);
        cookie.set("jwt_token", res.data.jwt_token);
        localStorage.setItem("jwt_refresh_token", res.data.jwt_refresh_token);
        router.push("/");
      }

      setLoading(false);

      console.log("response:", res);
    } catch (err) {
      setBadData(true);
      console.log("err:", err);
      setLoading(false);
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onLogin();
    }
  };

  return (
    <div className={styles.login_card}>
      <div className={styles.login_modal} id="loginModal">
        <Link href="/" className={styles.loginCloseBtn}>
          <button>
            <Image alt="exit icon" className={styles.x_icon} src={x_icon} />
          </button>
        </Link>
        <div className={styles.active_login}>
          <h4>Welcome back</h4>
          <p>Please enter your login and password!</p>
          <div className={styles.input}>
            <div className={styles.username_box}>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
                placeholder="Your email"
                autoComplete="on"
                onKeyDown={handleKeyDown}
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
                onKeyDown={handleKeyDown}
              />
            </div>

            <div className={styles.password_info_error}>
              <p className={styles.password_info}></p>
            </div>
          </div>
        </div>

        <div className={styles.btn_info}>
          <Button isLoading={isLoading} onClick={onLogin} title="Login" />

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
