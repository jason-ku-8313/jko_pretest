import { useContext, useEffect, useState } from "react";
import Slider from "../../components/slider/Slider";
import Footer from "../../components/footer/Footer";
import ProductPanel from "../../components/productPanel/ProductPanel";
import Spinner from "../../components/spinner";
import styles from "./Product.module.scss";
import type { ProductApiData } from "../../shared/interface";
import {
  ShoppingCartContext,
  ShoppingCartContextType,
} from "../../context/shopping-cart.context";

type Props = {
  id: string;
};

const getProductApiData = async (
  productId: string
): Promise<ProductApiData> => {
  const resp = await fetch(`http://localhost:3000/api/product/${productId}`);
  if (resp.status !== 200) {
    throw Error(
      `An error occurred during fetching Product data. response-status[${resp.status}]`
    );
  }
  return await resp.json();
};

export default function Product({ id: productId }: Props) {
  const [product, setProduct] = useState<ProductApiData | null>(null);
  const [selectedSpecId, setSelectedSpecId] = useState<string | null>(null);
  const [showPanel, setShowPanel] = useState(false);
  const { updateCartItem } = useContext(
    ShoppingCartContext
  ) as ShoppingCartContextType;

  useEffect(() => {
    (async () => {
      try {
        const product = await getProductApiData(productId);
        const defaultSpec =
          product.specs.find((spec) => !!spec.stock)?.id || null;
        setProduct(product);
        setSelectedSpecId(defaultSpec);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const handleTogglePanel = () => {
    setShowPanel((prev) => !prev);
  };

  const handleAddToCart = (specId: string, quantity: number) => {
    setSelectedSpecId(specId);
    updateCartItem(productId, specId, quantity);
  };

  const selectedSpec = product?.specs.find(({ id }) => id === selectedSpecId);
  if (!product || !selectedSpec) {
    return (
      <div className={styles.product}>
        <Spinner />
      </div>
    );
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
