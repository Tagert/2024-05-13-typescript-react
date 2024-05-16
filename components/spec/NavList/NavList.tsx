import Link from "next/link";
import styles from "./styles/NavList.module.css";
import { LinksType } from "../../../types/links.type";

type NavListProps = {
  onBurgerBtnClick: () => void;
  links: LinksType[];
};

const NavList = ({ onBurgerBtnClick, links }: NavListProps) => {
  return (
    <div className={styles.outerContainer}>
      <nav className={styles.container}>
        {links.map((n) => (
          <Link key={n.id} href={n.href}>
            {n.title}
          </Link>
        ))}

        <button onClick={() => onBurgerBtnClick()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 50 50"
          >
            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
          </svg>
        </button>
      </nav>

      <Link href={"/add"} className={styles.linkHolder}>
        <svg
          fill="none"
          height="20"
          viewBox="0 0 20 20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 5.00012C3 3.89555 3.89543 3.00012 5 3.00012H15C16.1046 3.00012 17 3.89555 17 5.00012V15.0001C17 16.1047 16.1046 17.0001 15 17.0001H5C3.89543 17.0001 3 16.1047 3 15.0001V5.00012ZM5 4.00012C4.44772 4.00012 4 4.44784 4 5.00012V15.0001C4 15.5524 4.44772 16.0001 5 16.0001H15C15.5523 16.0001 16 15.5524 16 15.0001V5.00012C16 4.44784 15.5523 4.00012 15 4.00012H5ZM10.0001 6.00021C10.2762 6.00021 10.5001 6.22407 10.5001 6.50021V9.50021H13.5001C13.7762 9.50021 14.0001 9.72407 14.0001 10.0002C14.0001 10.2764 13.7762 10.5002 13.5001 10.5002H10.5001V13.5002C10.5001 13.7764 10.2762 14.0002 10.0001 14.0002C9.72392 14.0002 9.50006 13.7764 9.50006 13.5002V10.5002H6.50006C6.22392 10.5002 6.00006 10.2764 6.00006 10.0002C6.00006 9.72407 6.22392 9.50021 6.50006 9.50021H9.50006V6.50021C9.50006 6.22407 9.72392 6.00021 10.0001 6.00021Z"
            fill="currentColor"
          />
        </svg>
      </Link>
    </div>
  );
};

export { NavList };
