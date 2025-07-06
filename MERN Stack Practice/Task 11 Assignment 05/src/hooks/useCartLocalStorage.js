import { useEffect } from "react";

export default function useCartLocalStorage(cart, cartDispatch){
      useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        try {
          if (storedCart) {
            cartDispatch({type: "ADD_TO_LOCAL_STORAGE", payload:JSON.parse(storedCart)});
          }
        } catch (error) {
          console.log(error);
          localStorage.removeItem("cart");
        }
      }, []);
    
      useEffect(() => {
        if (cart.length > 0) {
          localStorage.setItem("cart", JSON.stringify(cart));
        } else {
          localStorage.removeItem("cart");
        }
      }, [cart]);
}