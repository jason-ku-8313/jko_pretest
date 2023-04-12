import Navbar from "./components/navbar";
import Product from "./pages/product";
import styles from "./App.module.scss";
import ShoppingCartProvider from "./context/shopping-cart.context";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <ShoppingCartProvider>
        <Product id={"prod_1"} />
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
