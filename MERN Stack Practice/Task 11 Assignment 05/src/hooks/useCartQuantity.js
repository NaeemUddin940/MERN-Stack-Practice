import { useEffect } from "react";

export default function UpdateQuantity(item, operator) {
  //   const operation = {
  //     "+": (p) => p + 1,
  //     "-": (p) => (p > 1 ? p - 1 : p),
  //   };

  //   const operationFn = operation[operator];
  //   if (!operationFn) {
  //     console.error("Invalid Operator!!!");
  //   }

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
