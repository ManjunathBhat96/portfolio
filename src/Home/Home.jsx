import React from "react";
import styles from "./home.module.scss";
import Header from "../Header/Header";

function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <p className={styles.title}>Hi, I'm Manjunath Bhat</p>
    </div>
  );
}

export default Home;
