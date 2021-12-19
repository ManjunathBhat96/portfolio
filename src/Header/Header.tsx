import React from "react";
import styles from "./header.module.scss";

function Header() {
  return (
    <div className={styles.headerSection}>
      <p className={styles.header}>Home</p>
      <p className={styles.header}>Work experience</p>
      <p className={styles.header}>Contact</p>
      {/* <p className={styles.header}>Home</p> */}
    </div>
  );
}

export default Header;
