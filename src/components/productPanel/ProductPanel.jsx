import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import styles from "./ProductPanel.module.scss";

export default function ProductPanel({
  isOpen,
  onClose,
  data,
  defaultSpec,
  onAddToCart,
}) {
  const [selectedSpecId, setSelectedSpecId] = useState(defaultSpec);
  const { specCategories, specs } = data;
  const [selectedSpecs, setSelectedSpecs] = useState([
    ...specs.find(({ id }) => id === defaultSpec).labels,
  ]);
  const [quantity, setQuantity] = useState(1);

  const handleClickSpec = (e) => {
    setSelectedSpecs((prev) => {
      const specLevel = e.target.dataset["specLevel"];
      const wanted = e.target.innerText;
      if (prev[specLevel] === wanted) {
        return prev;
      }
      // find spec level
      const newState = [...prev];
      newState[specLevel] = wanted;
      const wantedSpec = specs.find(({ labels }) =>
        labels.every((l) => newState.includes(l))
      );
      // check qty
      if (wantedSpec?.stock) {
        // if available, update state
        setSelectedSpecId(wantedSpec.id);
        return newState;
      } else {
        // if no, find available spec at current level
        const otherAvailableSpec = specs
          .filter(({ labels }) => labels.includes(wanted))
          .find(({ stock }) => !!stock);
        setSelectedSpecId(otherAvailableSpec.id);
        return [...otherAvailableSpec.labels];
      }
    });
  };

  const isSoldout = (wanted, specLevel) => {
    const otherSelected = selectedSpecs.filter((_, idx) => idx !== specLevel);
    return specs
      .filter(({ labels }) =>
        otherSelected.every((selected) => labels.includes(selected))
      )
      .filter(({ labels }) => labels.includes(wanted))
      .every(({ stock }) => stock === 0);
  };

  const handleClickMinus = () => {
    setQuantity((prev) => (quantity === 1 ? 1 : --prev));
  };

  const handleClickPlus = () => {
    const max = selectedSpec.stock;
    setQuantity((prev) => (prev >= max ? max : ++prev));
  };

  const handleChangeQty = (e) => {
    const { value } = e.target;
    const max = selectedSpec.stock;
    setQuantity(value > max ? max : value <= 1 ? 1 : value);
  };

  const handleAddToCart = () => {
    onClose();
    onAddToCart(selectedSpecId);
  };

  const handleClose = () => {
    onClose();
  };

  const selectedSpec = specs.find((spec) => spec.id === selectedSpecId);
  const specLevels = specs
    .map(({ labels }) => labels)
    .reduce((acc, curr) => {
      curr.forEach((item, idx) => {
        if (!acc[idx]) {
          acc[idx] = [];
        }
        if (!acc[idx].includes(item)) {
          acc[idx].push(item);
        }
      });
      return acc;
    }, []);
  return (
    <>
      <div
        className={`${styles.productPanel} ${styles.fadeIn} ${
          !isOpen ? styles.hidden : ""
        }`}
      >
        <div className={styles.panel}>
          <div className={styles.header}>
            <img src={selectedSpec.images[0]} alt="product cover" />
            <div className={styles.title}>
              <p className={styles.productName}>{selectedSpec.title}</p>
              <span className={styles.price}>$3,999</span>
            </div>
            <span className={styles.close} onClick={handleClose}>
              <IoClose />
            </span>
          </div>
          <hr />
          <div className={styles.content}>
            {specCategories.map(([type, desc], catIdx) => (
              <div key={catIdx} className={styles.specs}>
                <div className={styles.title}>
                  <p>{type}</p>
                  <span className={styles.desc}>{desc}</span>
                </div>
                <div className={styles.options}>
                  {specLevels?.[catIdx].map((label, specIdx) => {
                    const disabled = isSoldout(label, catIdx);
                    const isSelected = label === selectedSpecs[catIdx];
                    return (
                      <span
                        key={specIdx}
                        data-spec-level={catIdx}
                        className={`
                          ${styles.option}
                          ${disabled ? styles.disabled : ""}
                          ${isSelected ? styles.selected : ""}
                        `}
                        onClick={!disabled ? handleClickSpec : () => {}}
                      >
                        {label}
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
                  value={quantity}
                  onChange={handleChangeQty}
                />
                <button
                  className={`${
                    quantity === selectedSpec.stock ? styles.disabled : ""
                  }`}
                  onClick={handleClickPlus}
                >
                  +
                </button>
              </div>
            </div>
            <button className={styles.addToCart} onClick={handleAddToCart}>
              加入購物車
            </button>
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
