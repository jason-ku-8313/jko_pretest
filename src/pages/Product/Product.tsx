import { useContext, useState } from "react";
import { useQuery } from "react-query";
import Slider from "../../components/Slider";
import Footer from "../../components/Footer";
import ProductPanel from "../../components/ProductPanel";
import Spinner from "../../components/Spinner";
import styles from "./Product.module.scss";
import type { ProductApiData } from "../../shared/interface";
import {
  ShoppingCartContext,
  ShoppingCartContextType,
} from "../../context/shopping-cart.context";
import { getProduct } from "../../api/product";

type Props = {
  id: string;
};

export default function Product({ id: productId }: Props) {
  const [selectedSpecId, setSelectedSpecId] = useState<string | null>(null);
  const [showPanel, setShowPanel] = useState(false);
  const { updateCartItem } = useContext(
    ShoppingCartContext
  ) as ShoppingCartContextType;
  const { isLoading, isError, data, error } = useQuery<ProductApiData, Error>(
    ["product", productId],
    () => getProduct(productId)
  );

  const handleTogglePanel = () => {
    setShowPanel((prev) => !prev);
  };

  const handleAddToCart = (specId: string, quantity: number) => {
    setSelectedSpecId(specId);
    updateCartItem(productId, specId, quantity);
  };

  if (isLoading) {
    return (
      <div className={styles.product}>
        <Spinner />
      </div>
    );
  }

  if (isError) {
    throw error;
  }

  const product = data as ProductApiData;
  const selectedSpec = selectedSpecId
    ? product.specs.find(({ id }) => id === selectedSpecId)
    : product.specs.find((spec) => !!spec.stock);
  if (!selectedSpec) {
    throw Error(`All specs in product [${productId}] have been soldout.`);
  }
  const {
    originalPrice,
    sellingPrice,
    discounts,
    orderingInfos,
    specCategories,
    specLabels,
    specs,
  } = product;
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
      <ProductPanel
        isOpen={showPanel}
        onClose={handleTogglePanel}
        data={{ specCategories, specLabels, specs }}
        defaultSpecId={selectedSpec.id}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
