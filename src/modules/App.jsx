import Cart from "./components/Cart/Cart";
import ProductList from "./components/ProductList/ProductList";
import styles from "./app.module.scss";

export function App() {
  return (
    <div className={styles.container}>
      <ProductList></ProductList>
      <Cart />
    </div>
  );
}
