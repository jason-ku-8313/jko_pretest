import React, { useState } from "react";
import BottomPanel from "../../components/footer/Footer";
import ProductPanel from "../../components/productPanel/ProductPanel";
import Slider from "../../components/slider/Slider";
import styles from "./Product.module.scss";

export default function Product() {
  const [showPanel, setShowPanel] = useState(false);

  const handleTogglePanel = () => {
    setShowPanel((prev) => !prev);
  };

  return (
    <div className={styles.product}>
      <Slider />
      <div className={styles.container}>
        <div className={styles.top}>
          <h1>LN 新竹街口攻城獅台灣封城紫色炫風聯名款限定發售復古球衣系列</h1>
          <div className={styles.prices}>
            <div className={styles.price}>$2,999 - $3,999</div>
            <div className={`${styles.price} ${styles.del}`}>
              <del>$3,699 - $4,699</del>
            </div>
          </div>
          <div className={styles.discount}>
            <div className={styles.label}>街口結帳享九折優惠</div>
            <div className={styles.label}>訂單滿 399 免運費</div>
          </div>
          <hr />
          <div className={styles.orderingInfos}>
            <ul>
              <li className={styles.message}>請於訂單備註填寫您需要的球員</li>
              <li className={styles.message}>球員搭配之號碼不可替換</li>
              <li className={styles.message}>
                球員款客製訂單出貨需要十四個工作天
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.productDetails}>
            <div className={styles.title}>商品分類</div>
            <p className={styles.desc}>這邊可以填寫純文字內容。</p>
          </div>
          <hr />
          <div className={styles.productDetails}>
            <div className={styles.title}>商品描述</div>
            <p className={styles.desc}>
              靈感來自 90
              年代復古球衣，洞洞布料搭載拉克蘭袖設計，專業球衣打造休閒風尚，適合日常生活穿搭。
            </p>
          </div>
          <hr />
          <div className={styles.productDetails}>
            <div className={styles.title}>商品備註</div>
            <p className={styles.desc}>
              請於訂單備註填寫您需要的號碼，若未填寫將以空白球衣寄出，客製化商品不接受退換貨。
            </p>
          </div>
        </div>
      </div>
      <BottomPanel onClickAddToCart={handleTogglePanel} />
      <ProductPanel onClose={handleTogglePanel} isOpen={showPanel} />
    </div>
  );
}
