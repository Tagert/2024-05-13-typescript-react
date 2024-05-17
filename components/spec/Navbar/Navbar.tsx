import { useState } from "react";
import styles from "./styles/Navbar.module.css";
import Link from "next/link";
import { links } from "../../../constants/links";
import { NavList } from "../NavList/NavList";
import { MobileMenu } from "../MobileMenu/MobileMenu";

const Navbar = () => {
  const [logo, setLogo] = useState("PROJECT");

  const [isDisplayMobileMenu, setDisplayMobileMenu] = useState(false);

  const onBurgerBtnClick = () => {
    setDisplayMobileMenu(!isDisplayMobileMenu);
  };

  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.linkHolder}>
        <h1>{logo}</h1>
      </Link>

      <NavList onBurgerBtnClick={onBurgerBtnClick} links={links} />

      {isDisplayMobileMenu && <MobileMenu links={links} />}
    </div>
  );
};

export { Navbar };
