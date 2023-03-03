import { create } from "zustand";
import { persist } from "zustand/middleware";

const useProductStore = create(
  persist(
    (set) => ({
      cartItems: [],
      addToCart: (product) => {
        set((state) => {
          const productIndex = state.cartItems.findIndex(
            (item) => item.id === product.id
          );
          if (productIndex !== -1) {
            const newCartItems = [...state.cartItems];
            newCartItems[productIndex].quantity += 1;
            return { cartItems: newCartItems };
          } else {
            const newProduct = { ...product, quantity: 1 };
            return { cartItems: [...state.cartItems, newProduct] };
          }
        });
      },
      removeFromCart: (productId) => {
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== productId),
        }));
      },
      clearCart: () => {
        set({ cartItems: [] });
      },
    }),
    { name: "product-list" }
  )
);

export default useProductStore;
