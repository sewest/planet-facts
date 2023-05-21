import { Link } from "react-router-dom";
import styles from "./nav.module.css";

const planetNames = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

export default function Nav() {
  const toggleNav = () => {
    document.getElementById("mySidenav").classList.toggle(styles.open);
  };

  return (
    <nav>
      <header className={styles.header}>
        <h1>
          <Link to="/">The Planets</Link>
        </h1>
        <div className={styles.hamburger} onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* <button onClick={toggleNav}>Menu</button> */}
      </header>
      <ul className={styles.sidenav} id="mySidenav">
        {planetNames.map((planetName, index) => (
          <li key={index} onClick={toggleNav}>
            <Link to={`/${planetName.toLowerCase()}`}>{planetName}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
