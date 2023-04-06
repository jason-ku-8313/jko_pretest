import React, { useState } from "react";
import { nanoid } from "nanoid";
import Slider from "../../components/slider/Slider";
import Footer from "../../components/footer/Footer";
import ProductPanel from "../../components/productPanel/ProductPanel";
import styles from "./Product.module.scss";

export default function Product({
  originalPrice,
  sellingPrice,
  discounts,
  orderingInfos,
  specCategories,
  specs,
}) {
  const [showPanel, setShowPanel] = useState(false);
  const [selectedSpecId, setSelectedSpecId] = useState(
    specs.find((spec) => !!spec.stock)?.id
  );
  const [cartItemCount, setCartItemCount] = useState(0);

  const handleTogglePanel = () => {
    setShowPanel((prev) => !prev);
  };

  const handleAddToCart = (id) => {
    setSelectedSpecId(id);
    setCartItemCount((prev) => prev + 1);
  };

  const selectedSpec = specs.find((spec) => spec.id === selectedSpecId);
  return (
    <div className={styles.product}>
      <Slider data={selectedSpec.images} />
      <div className={styles.container}>
        <div className={styles.top}>
          <h1>{selectedSpec.title}</h1>
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
          {selectedSpec.extraInfos.map(({ type, text }, idx) => [
            <div key={nanoid()} className={styles.productDetails}>
              <div className={styles.title}>{type}</div>
              <p className={styles.desc}>{text}</p>
            </div>,
            idx < selectedSpec.extraInfos.length - 1 && <hr key={nanoid()} />,
          ])}
        </div>
      </div>
      <Footer
        cartItemCount={cartItemCount}
        onClickAddToCart={handleTogglePanel}
      />
      <ProductPanel
        isOpen={showPanel}
        onClose={handleTogglePanel}
        data={{ specCategories, specs }}
        defaultSpec={selectedSpecId}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
