import React, { useState } from "react";
import { nanoid } from "nanoid";
import styles from "./Slider.module.scss";

// TODO: Implement mobile friendly slider
export default function Slider({ data }) {
  const totalPage = 4;
  const [pageIdx, setPageIdx] = useState(0);

  const handleDrag = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.slider}>
      <div className={styles.frame}>
        {data.map((p, i) => (
          <img
            key={nanoid()}
            src={p}
            alt={`slider ${i}`}
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
