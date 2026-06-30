import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href="/">
        <Logo />
      </a>
      <div className={styles.navActions}>
        <Button>Give Feedback</Button>
      </div>
    </nav>
  );
}

export default Navbar;
