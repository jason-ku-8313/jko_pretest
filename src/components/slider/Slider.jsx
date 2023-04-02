import React, { useState } from "react";
import styles from "./Slider.module.scss";

export default function Slider() {
  const totalPage = 4;
  const [pageIdx, setPageIdx] = useState(0);

  const products = [
    "/product1.png",
    "/product2.png",
    "/product3.png",
    "/product4.png",
  ];

  const handleDrag = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.slider}>
      <div className={styles.frame}>
        {products.map((p, i) => (
          <img
            key={i}
            src={p}
            alt=""
            className={styles.slide}
            onDrag={handleDrag}
            onTouchMove={handleDrag}
            draggable
          />
        ))}
        <div className={styles.pageNum}>{`${pageIdx + 1}/${totalPage}`}</div>
      </div>
    </div>
  );
}
