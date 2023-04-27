import { useState, ReactEventHandler, ChangeEventHandler } from "react";
import { IoClose } from "react-icons/io5";
import styles from "./ProductPanel.module.scss";
import { ProductSpec } from "../../shared/interface";

type Props = {
  isOpen: boolean;
  onClose: Function;
  data: {
    specCategories: string[][];
    specLabels: string[][];
    specs: ProductSpec[];
  };
  defaultSpecId: string;
  onAddToCart: Function;
};

const findSpecById = (specs: ProductSpec[], target: string): ProductSpec => {
  const spec = specs.find(({ id }) => id === target);
  if (!spec) {
    throw Error(`Spec [${target}] not found!`);
  }
  return spec;
};

export default function ProductPanel({
  isOpen,
  onClose,
  data,
  defaultSpecId,
  onAddToCart,
}: Props) {
  const { specCategories, specLabels, specs } = data;
  const [selectedSpecId, setSelectedSpecId] = useState(defaultSpecId);
  const [quantity, setQuantity] = useState(1);

  const handleClickSpec: ReactEventHandler<HTMLSpanElement> = (e) => {
    const eventTarget = e.currentTarget;
    setSelectedSpecId((prev) => {
      try {
        if (eventTarget.getAttribute("data-spec-level") === null) {
          throw Error("data-spec-level not found!");
        }
        const specLevel = Number(eventTarget.getAttribute("data-spec-level"));
        const clicked = eventTarget.innerText;
        const prevSpec = findSpecById(specs, prev);
        const wantedSpecLabels = prevSpec.labels.map((_, idx) =>
          idx === specLevel ? clicked : _
        );
        const wantedSpec = specs.find(({ labels }) =>
          wantedSpecLabels.every((l) => labels.includes(l))
        );

        if (wantedSpec && wantedSpec.stock) {
          return wantedSpec.id;
        }

        const similarSpecLabels = wantedSpecLabels.slice(0, specLevel + 1);
        const similarSpec = specs
          .filter(({ labels }) =>
            similarSpecLabels.every((l) => labels.includes(l))
          )
          .find(({ stock }) => !!stock);
        return similarSpec?.id ?? prev;
      } catch (err) {
        console.log("[handleClickSpec] Error Occurred: ", err);
        return prev;
      }
    });
  };

  const isSoldout = (wanted: string, specLevel: number) => {
    const isRootCategory = specLevel === 0;
    if (isRootCategory) {
      return specs
        .filter(({ labels }) => labels.includes(wanted))
        .every(({ stock }) => !stock);
    } else {
      const wantedCombination = selectedSpec.labels
        .slice(0, specLevel)
        .concat(wanted);
      const availableSpec = specs
        .filter(({ labels }) =>
          wantedCombination.every((label) => labels.includes(label))
        )
        .find(({ stock }) => !!stock);
      return !availableSpec;
    }
  };

  const handleClickMinus = () => {
    setQuantity((prev) => (quantity === 1 ? 1 : --prev));
  };

  const handleClickPlus = () => {
    const max = selectedSpec.stock;
    setQuantity((prev) => (prev >= max ? max : ++prev));
  };

  const handleChangeQty: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = Number(e.target.value);
    const max = selectedSpec.stock;
    setQuantity(value > max ? max : value <= 1 ? 1 : value);
  };

  const handleAddToCart = () => {
    onClose();
    onAddToCart(selectedSpecId, quantity);
  };

  const handleClose = () => {
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  const selectedSpec = findSpecById(specs, selectedSpecId);
  return (
    <>
      <div className={`${styles.productPanel} ${styles.fadeIn}`}>
        <div className={styles.panel}>
          <div className={styles.header}>
            <img src={selectedSpec.images[0]} alt="product cover" />
            <div className={styles.title}>
              <p className={styles.productName}>{selectedSpec.title}</p>
              <span className={styles.price}>${selectedSpec.price}</span>
            </div>
            <span className={styles.close} onClick={handleClose}>
              <IoClose />
            </span>
          </div>
          <hr />
          <div className={styles.content}>
            {specCategories.map(([type, desc], catIdx) => (
              <div key={type} className={styles.specs}>
                <div className={styles.title}>
                  <p>{type}</p>
                  <span className={styles.desc}>{desc}</span>
                </div>
                <div className={styles.options}>
                  {specLabels[catIdx].map((label) => {
                    const disabled = isSoldout(label, catIdx);
                    const isSelected = selectedSpec.labels.includes(label);
                    return (
                      <span
                        key={label}
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
      <div className={`${styles.overlay}`} onClick={handleClose} />
    </>
  );
}
