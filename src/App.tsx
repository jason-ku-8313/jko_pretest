import Navbar from "./components/Navbar";
import Product from "./pages/Product";
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
