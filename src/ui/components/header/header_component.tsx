import { Link } from "react-router-dom";
import styles from "./header.module.css";
import loading from "../../../assets/spinner.gif";

interface Props {
  isLoadingRoute?: boolean;
}

export default function Header({ isLoadingRoute }: Props) {
  return (
    <header className={styles.header}>
      <Link to={"/"}>
        <h2 className={styles["header__title"]}>Podcaster</h2>
      </Link>
      {isLoadingRoute && <img className={styles["header__img"]} src={loading} alt="loading" />}
    </header>
  );
}
