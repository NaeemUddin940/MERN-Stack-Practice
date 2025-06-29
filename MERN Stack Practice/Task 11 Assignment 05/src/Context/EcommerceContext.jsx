import { useState } from "react";
import { createContext, useContext } from "react";

const CartContex = createContext();

const CartContextProvider = ({ children }) => {
  const [products, setProducts] = useState("a");
  const state = {
    products,
  };
  return <CartContextProvider value={state}>{children}</CartContextProvider>;
};

export const useCartContext = () => {
  useContext(CartContex);
};

export default CartContextProvider;
