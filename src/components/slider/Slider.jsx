import React, { useState } from "react";
import styles from "./Slider.module.scss";

export default function Slider({ data }) {
  const sliderLen = data.length;
  const [pageIdx, setPageIdx] = useState(0);
  const [touchX, setTouchX] = useState(null);

  const handleChangeSlideStart = (e) => {
    let touchDown;
    if (e.type === "mousedown") {
      touchDown = e.clientX;
    } else if (e.type === "touchstart") {
      touchDown = e.touches[0].clientX;
    }
    setTouchX(touchDown);
  };

  const handleChangeSlideEnd = (e) => {
    const touchDown = touchX;
    if (touchDown === null) {
      return;
    }

    let currentTouch;
    if (e.type === "mouseup") {
      currentTouch = e.clientX;
    } else if (e.type === "touchmove") {
      currentTouch = e.touches[0].clientX;
    }
    const diff = touchDown - currentTouch;
    if (diff > 10) {
      setPageIdx((prev) => (prev === sliderLen - 1 ? prev : ++prev));
    }
    if (diff < -10) {
      setPageIdx((prev) => (prev === 0 ? prev : --prev));
    }
    setTouchX(null);
  };

  return (
    <div className={styles.slider}>
      <div
        className={`${styles.container}`}
        style={{ transform: `translateX(${"-" + pageIdx * 100 + "%"})` }}
        onTouchStart={handleChangeSlideStart}
        onTouchMove={handleChangeSlideEnd}
        onMouseDown={handleChangeSlideStart}
        onMouseUp={handleChangeSlideEnd}
      >
        {data.map((p, i) => (
          <img
            key={i}
            src={p}
            alt={`slide ${i + 1}`}
            className={styles.slide}
            draggable={false}
          />
        ))}
      </div>
      <div className={styles.pageNum}>{`${pageIdx + 1}/${sliderLen}`}</div>
    </div>
  );
}
