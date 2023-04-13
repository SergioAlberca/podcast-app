import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <Link to={"/"}>
        <h2>Podcaster</h2>
      </Link>
    </header>
  );
}
