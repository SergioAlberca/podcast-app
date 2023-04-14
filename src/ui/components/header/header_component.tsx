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
        <h2>Podcaster</h2>
      </Link>
      {isLoadingRoute && <img src={loading} alt="loading" />}
    </header>
  );
}
