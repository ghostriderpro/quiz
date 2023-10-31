import Account from "./Account";
import classes from "../styles/Nav.module.css";
import logo from "../assets/images/logo.png";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="index.html" ClassName={classes.brand}>
            <img src={logo} alt="Learn Quiz" />
            <h3></h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
