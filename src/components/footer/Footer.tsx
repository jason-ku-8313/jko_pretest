import styles from "./Footer.module.scss";
import cart from "../../assets/cart.png";
import { useContext } from "react";
import shoppingCartContext from "../../context/shopping-cart.context";

type Props = {
  isSoldout: boolean;
  onClickAddToCart: Function;
};

export default function Footer({ isSoldout, onClickAddToCart }: Props) {
  const shoppingCart = useContext(shoppingCartContext);

  const handleClickAddToCart = () => {
    onClickAddToCart();
  };

  const handleClickCart = () => {
    console.log(`Shopping Cart: ${JSON.stringify(shoppingCart)}`);
  };

  return (
    <div className={styles.footer}>
      <div className={styles.cart} onClick={handleClickCart}>
        <div className={styles.icon}>
          <img src={cart} alt="show cart" />
          {shoppingCart.items.length > 0 && (
            <span className={styles.count}>{shoppingCart.items.length}</span>
          )}
        </div>
        <span className={styles.text}>購物車</span>
      </div>
      <button
        className={styles.addToCart}
        onClick={handleClickAddToCart}
        disabled={isSoldout}
      >
        加入購物車
      </button>
      <button className={styles.buy} disabled={isSoldout}>
        直接購買
      </button>
    </div>
  );
}
