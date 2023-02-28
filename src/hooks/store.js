import { create } from "zustand";

const useStore = create((set) => ({
  cartItems: [],
  addToCart: (product) => {
    set((state) => {
      const productIndex = state.cartItems.findIndex(
        (item) => item.id === product.id
      );
      if (productIndex !== -1) {
        const newCartItems = [...state.cartItems];
        newCartItems[productIndex].cantidad += 1;
        return { cartItems: newCartItems };
      } else {
        const newProduct = { ...product, cantidad: 1 };
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
}));

export default useStore;
