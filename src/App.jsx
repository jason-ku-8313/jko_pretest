import Navbar from "./components/navbar/Navbar";
import Product from "./pages/product/Product";
import styles from "./App.module.scss";
import { product } from "./data";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Navbar />
        <Product {...product} />
      </div>
    </div>
  );
}

export default App;
