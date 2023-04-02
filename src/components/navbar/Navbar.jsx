import React from "react";
import { SlArrowLeft } from "react-icons/sl";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.leftArrow}>
        <SlArrowLeft />
      </div>
      <h1>街口攻城獅官方商城</h1>
    </div>
  );
}
