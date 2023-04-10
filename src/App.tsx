import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Product from "./pages/product/Product";
import styles from "./App.module.scss";
import { product } from "./data";
import { ShoppingCart } from "./shared/interface";
import ShoppingCartContext from "./context/shopping-cart.context";

function App() {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({ items: [] });

  return (
    <ShoppingCartContext.Provider value={shoppingCart}>
      <div className={styles.app}>
        <Navbar />
        <Product {...product} onAddToCart={setShoppingCart} />
      </div>
    </ShoppingCartContext.Provider>
  );
}

export default App;
