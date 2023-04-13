import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import styles from "./App.module.scss";
import ShoppingCartProvider from "./context/shopping-cart.context";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className={styles.app}>
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <ShoppingCartProvider>
          <Product id={"prod_1"} />
        </ShoppingCartProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
