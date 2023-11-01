import { Trash } from "react-feather";
import useStore from "../../hooks/useProductStore";
import Button from "../components/Button/Button";
import styles from "./cart.module.scss";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useStore();

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div className={styles.cart}>
      <h1 className={styles.title}>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className={styles.empty}>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} x {item.quantity}{" "}
              <Button
                variant="danger"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                <Trash color="white" size={16} />
              </Button>
            </li>
          ))}
        </ul>
      )}
      <Button
        variant="secondary"
        className={styles.clear_cart}
        onClick={handleClearCart}
      >
        Clear Cart
      </Button>
    </div>
  );
};

export default Cart;
