import React from "react";
import styles from "./Footer.module.scss";

export default function Footer({ onClickAddToCart }) {
  const handleClickAddToCart = () => {
    onClickAddToCart();
  };
  return (
    <div className={styles.footer}>
      <div className={styles.cart}>
        <div className={styles.icon}>
          <img src="/cart.png" alt="show cart" />
          <span className={styles.count}>1</span>
        </div>
        <span className={styles.text}>購物車</span>
      </div>
      <button className={styles.addToCart} onClick={handleClickAddToCart}>
        加入購物車
      </button>
      <button className={styles.buy}>直接購買</button>
    </div>
  );
}
