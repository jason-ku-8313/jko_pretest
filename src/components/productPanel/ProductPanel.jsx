import React from "react";
import { IoClose } from "react-icons/io5";
import styles from "./ProductPanel.module.scss";

export default function ProductPanel({ isOpen, onClose }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <div
        className={`${styles.productPanel} ${styles.fadeIn} ${
          !isOpen ? styles.hidden : ""
        }`}
      >
        <div className={styles.panel}>
          <div className={styles.header}>
            <img src="/product1.png" alt="" />
            <div className={styles.title}>
              <p className={styles.productName}>
                LN 新竹街口攻城獅台灣封城紫色炫風聯名款限定發售復古球衣系列
              </p>
              <span className={styles.price}>$3,999</span>
            </div>
            <span className={styles.close} onClick={handleClose}>
              <IoClose />
            </span>
          </div>
          <hr />
          <div className={styles.content}>
            <div className={styles.specs}>
              <div className={styles.title}>
                <p>尺寸</p>
                <span className={styles.desc}>補充說明</span>
              </div>
              <div className={styles.options}>
                <span className={`${styles.option} ${styles.selected}`}>S</span>
                <span className={`${styles.option} ${styles.disabled}`}>M</span>
                <span className={styles.option}>L</span>
                <span className={styles.option}>XL</span>
                <span className={styles.option}>XXL</span>
              </div>
            </div>
            <div className={styles.specs}>
              <div className={styles.title}>
                <p>顏色</p>
                <span className={styles.desc}>補充說明</span>
              </div>
              <div className={styles.options}>
                <span className={styles.option}>酷炫黑</span>
                <span className={`${styles.option} ${styles.selected}`}>
                  紫旋風
                </span>
                <span className={`${styles.option} ${styles.disabled}`}>
                  暴風紅
                </span>
                <span className={styles.option}>耀眼黃</span>
                <span className={styles.option}>我是第二行選項</span>
              </div>
            </div>
          </div>
          <hr />
          <div className={styles.footer}>
            <div className={styles.quantity}>
              <p>購買數量</p>
              <div className={styles.buttonGroup}>
                <button className={styles.disabled}>-</button>
                <input type="number" name="" id="" min={1} defaultValue={1} />
                <button>+</button>
              </div>
            </div>
            <button className={styles.addToCart}>加入購物車</button>
          </div>
        </div>
      </div>
      <div
        className={`${styles.overlay} ${!isOpen && styles.hidden}`}
        onClick={handleClose}
      />
    </>
  );
}
