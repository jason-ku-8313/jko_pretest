import styles from "./Footer.module.scss";
import cart from "../../assets/cart.png";

type Props = {
  isSoldout: boolean;
  cartItemCount: number;
  onClickAddToCart: Function;
};

export default function Footer({
  isSoldout,
  cartItemCount,
  onClickAddToCart,
}: Props) {
  const handleClickAddToCart = () => {
    onClickAddToCart();
  };
  return (
    <div className={styles.footer}>
      <div className={styles.cart}>
        <div className={styles.icon}>
          <img src={cart} alt="show cart" />
          {cartItemCount > 0 && (
            <span className={styles.count}>{cartItemCount}</span>
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
