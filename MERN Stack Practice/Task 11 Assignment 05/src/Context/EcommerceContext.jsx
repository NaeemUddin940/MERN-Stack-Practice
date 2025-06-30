import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  const [products, setProducts] = useState();
  useEffect(() => {
    fetch(`http://localhost:3000/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const state = {
    products,
  };

  return <CartContext.Provider value={state}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  return useContext(CartContext);
};

export default CartContextProvider;
