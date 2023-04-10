import Navbar from "./components/navbar/Navbar";
import Product from "./pages/product/Product";
import styles from "./App.module.scss";
import { product } from "./data";
import ShoppingCartProvider from "./context/shopping-cart.context";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <ShoppingCartProvider>
        <Product {...product} />
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
