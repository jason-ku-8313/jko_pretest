import Navbar from "./components/navbar/Navbar";
import Product from "./pages/product/Product";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Navbar />
        <Product />
      </div>
    </div>
  );
}

export default App;
