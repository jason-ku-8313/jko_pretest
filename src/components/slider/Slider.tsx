import { useState, MouseEvent, TouchEvent, ReactEventHandler } from "react";
import styles from "./Slider.module.scss";

type Props = {
  data: string[];
};

export default function Slider({ data }: Props) {
  const sliderLen = data.length;
  const [pageIdx, setPageIdx] = useState(0);
  const [touchX, setTouchX] = useState<number | null>(null);

  const handleChangeSlideStart: ReactEventHandler = (e) => {
    let touchDown: number;
    if (e.type === "mousedown") {
      touchDown = (e as MouseEvent).clientX;
    } else if (e.type === "touchstart") {
      touchDown = (e as TouchEvent).touches[0].clientX;
    } else {
      return;
    }
    setTouchX(touchDown);
  };

  const handleChangeSlideEnd: ReactEventHandler = (e) => {
    const touchDown = touchX;
    if (touchDown === null) {
      return;
    }

    let currentTouch: number;
    if (e.type === "mouseup") {
      currentTouch = (e as MouseEvent).clientX;
    } else if (e.type === "touchmove") {
      currentTouch = (e as TouchEvent).touches[0].clientX;
    } else {
      return;
    }

    const diff = touchDown - currentTouch;
    if (diff > 5) {
      setPageIdx((prev) => (prev === sliderLen - 1 ? prev : ++prev));
    }
    if (diff < -5) {
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
        {!!data?.length &&
          data.map((p, i) => (
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
