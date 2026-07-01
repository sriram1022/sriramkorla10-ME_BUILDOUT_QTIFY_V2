import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.logoLink}>
        <Logo />
      </a>
      <div className={styles.navActions}>
        <label className={styles.searchWrapper} htmlFor="navbar-search">
          <input
            id="navbar-search"
            className={styles.searchInput}
            type="search"
            placeholder="search a song"
            aria-label="Search"
          />
        </label>
        <Button className={styles.feedbackButton}>Give Feedback</Button>
      </div>
    </nav>
  );
}

export default Navbar;
