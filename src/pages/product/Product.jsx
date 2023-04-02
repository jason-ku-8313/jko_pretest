import React, { useState } from "react";
import { nanoid } from "nanoid";
import Slider from "../../components/slider/Slider";
import Footer from "../../components/footer/Footer";
import ProductPanel from "../../components/productPanel/ProductPanel";
import styles from "./Product.module.scss";

export default function Product({
  name,
  originalPrice,
  sellingPrice,
  images,
  discounts,
  orderingInfos,
  extraInfos,
  specs,
  stocks,
}) {
  const [showPanel, setShowPanel] = useState(false);

  const handleTogglePanel = () => {
    setShowPanel((prev) => !prev);
  };

  return (
    <div className={styles.product}>
      <Slider data={images} />
      <div className={styles.container}>
        <div className={styles.top}>
          <h1>{name}</h1>
          <div className={styles.prices}>
            <div className={styles.price}>
              ${sellingPrice[0]} - ${sellingPrice[1]}
            </div>
            {originalPrice && (
              <div className={`${styles.price} ${styles.del}`}>
                <del>
                  ${originalPrice[0]} - ${originalPrice[1]}
                </del>
              </div>
            )}
          </div>
          <div className={styles.discount}>
            {discounts.map((text) => (
              <div key={nanoid()} className={styles.label}>
                {text}
              </div>
            ))}
          </div>
          <hr />
          <div className={styles.orderingInfos}>
            <ul>
              {orderingInfos.map((text) => (
                <li key={nanoid()} className={styles.message}>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          {extraInfos.map(({ type, text }, idx) => [
            <div key={nanoid()} className={styles.productDetails}>
              <div className={styles.title}>{type}</div>
              <p className={styles.desc}>{text}</p>
            </div>,
            idx < extraInfos.length - 1 && <hr key={nanoid()} />,
          ])}
        </div>
      </div>
      <Footer onClickAddToCart={handleTogglePanel} />
      <ProductPanel
        onClose={handleTogglePanel}
        isOpen={showPanel}
        data={{ name, specs, stocks, cover: images[0] }}
      />
    </div>
  );
}
