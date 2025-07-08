import { useEffect } from "react";

export default function UpdateQuantity(item, operator) {
  useEffect(() => {
    const updatedCart = cart.map((product) =>
      product.id === item.id
        ? {
            ...product,
            quantity:
              operator === "+" ? product.quantity + 1 : product.quantity - 1,
          }
        : product
    );
    return updatedCart;
  }, [cart]);
}
