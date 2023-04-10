import { Dispatch, SetStateAction, useState } from "react";
import Slider from "../../components/slider/Slider";
import Footer from "../../components/footer/Footer";
import ProductPanel from "../../components/productPanel/ProductPanel";
import styles from "./Product.module.scss";
import { ProductSpec, ShoppingCart } from "../../shared/interface";

type Props = {
  id: string;
  originalPrice: string[];
  sellingPrice: string[];
  discounts: string[];
  orderingInfos: string[];
  specCategories: string[][];
  specLabels: string[][];
  specs: ProductSpec[];
  onAddToCart: Dispatch<SetStateAction<ShoppingCart>>;
};

export default function Product({
  id: productId,
  originalPrice,
  sellingPrice,
  discounts,
  orderingInfos,
  specCategories,
  specLabels,
  specs,
  onAddToCart,
}: Props) {
  const [showPanel, setShowPanel] = useState(false);
  const [selectedSpecId, setSelectedSpecId] = useState<string | undefined>(
    specs.find((spec) => !!spec.stock)?.id
  );

  const handleTogglePanel = () => {
    setShowPanel((prev) => !prev);
  };

  const handleAddToCart = (specId: string, quantity: number) => {
    setSelectedSpecId(specId);
    onAddToCart(({ items }) => {
      const clone = [...items];
      const existing = clone.find(
        (item) => item.productId === productId && item.specId === specId
      );

      if (!!existing) {
        existing.quantity = quantity;
      } else {
        clone.push({ productId, specId, quantity });
      }
      return { items: clone };
    });
  };

  const selectedSpec = specs.find(({ id }) => id === selectedSpecId);
  if (!selectedSpec) {
    return <div>Product Not Found</div>;
  }
  return (
    <div className={styles.product}>
      <Slider data={selectedSpec.images} />
      <div className={styles.container}>
        <div className={styles.top}>
          <h1>{selectedSpec?.title}</h1>
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
            {discounts.map((text, idx) => (
              <div key={`discounts-${idx}`} className={styles.label}>
                {text}
              </div>
            ))}
          </div>
          <hr />
          <div className={styles.orderingInfos}>
            <ul>
              {orderingInfos.map((text, idx) => (
                <li key={`orderingInfos-${idx}`} className={styles.message}>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          {selectedSpec.extraInfos.map(({ type, text }, idx) => [
            <div key={type} className={styles.productDetails}>
              <div className={styles.title}>{type}</div>
              <p className={styles.desc}>{text}</p>
            </div>,
            idx < selectedSpec.extraInfos.length - 1 && (
              <hr key={`${type}-hr`} />
            ),
          ])}
        </div>
      </div>
      <Footer
        isSoldout={!selectedSpec.stock}
        onClickAddToCart={handleTogglePanel}
      />
      {selectedSpecId && (
        <ProductPanel
          isOpen={showPanel}
          onClose={handleTogglePanel}
          data={{ specCategories, specLabels, specs }}
          defaultSpecId={selectedSpecId}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
}