import Cart from "./Cart/Cart";
import ProductList from "./ProductList/ProductList";
import Form from "./Form/Form";
import StateHandler from "./StateHandle/StateHandle";
import styles from "./app.module.scss";

export function App() {
  return (
    <>
      <div className={styles.containerA}>
        <ProductList />
        <Cart />
      </div>
      <div className={styles.containerB}>
        <Form />
        <StateHandler />
      </div>
    </>
  );
}
