import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { nanoid } from "nanoid";
import styles from "./ProductPanel.module.scss";

export default function ProductPanel({ isOpen, onClose, data }) {
  const [selectedSpecs, setSelectedSpec] = useState({});
  const [quantity, setQuantity] = useState(1);
  const { name, specs, stocks, cover } = data;

  const handleClickSpec = (e) => {
    const ds = e.target.dataset;
    setSelectedSpec((prev) => ({
      ...prev,
      [ds.spectype]: ds.specid,
    }));
  };

  const handleClickMinus = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity((prev) => (quantity === 1 ? 1 : prev - 1));
  };

  const handleClickPlus = () => {
    // TODO: Should check available stock
    setQuantity((prev) => (quantity === 999 ? 999 : prev + 1));
  };

  const handleChangeQty = (e) => {
    // TODO: Should check available stock
    const { value } = e.target;
    if (value < 1) {
      return;
    }
    setQuantity(value > 999 ? 999 : value);
  };

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
            <img src={cover} alt="product cover" />
            <div className={styles.title}>
              <p className={styles.productName}>{name}</p>
              <span className={styles.price}>$3,999</span>
            </div>
            <span className={styles.close} onClick={handleClose}>
              <IoClose />
            </span>
          </div>
          <hr />
          <div className={styles.content}>
            {specs.map(({ type, desc, items }) => (
              <div key={nanoid()} className={styles.specs}>
                <div className={styles.title}>
                  <p>{type}</p>
                  <span className={styles.desc}>{desc}</span>
                </div>
                <div className={styles.options}>
                  {items.map(({ specId, text }) => {
                    const isSoldout = !stocks.find(
                      ({ specs, stock }) => specs.includes(specId) && stock > 0
                    );
                    const isSelected = selectedSpecs[type] === specId;
                    return (
                      <span
                        key={specId}
                        data-spectype={type}
                        data-specid={specId}
                        className={`
                          ${styles.option} 
                          ${isSoldout ? styles.disabled : ""} 
                          ${isSelected ? styles.selected : ""}
                        `}
                        onClick={handleClickSpec}
                      >
                        {text}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          <hr />
          <div className={styles.footer}>
            <div className={styles.quantity}>
              <p>購買數量</p>
              <div className={styles.buttonGroup}>
                <button
                  className={`${quantity === 1 ? styles.disabled : ""}`}
                  onClick={handleClickMinus}
                >
                  -
                </button>
                <input
                  type="number"
                  name=""
                  id=""
                  min={1}
                  value={quantity}
                  onChange={handleChangeQty}
                />
                <button
                  className={`${quantity === 999 ? styles.disabled : ""}`}
                  onClick={handleClickPlus}
                >
                  +
                </button>
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
