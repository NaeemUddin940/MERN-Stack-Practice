export default function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_LOCAL_STORAGE":
      return action.payload;

    case "ADD_TO_CART":
      const existProduct = state.find((item) => item.id === action.payload.id);
      if (existProduct) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload);

    case "INCREMENT_QUANTITY":
      return state.map((product) =>
        product.id === action.payload.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );

    case "DECREMENT_QUANTITY":
      if(action.payload.quantity <= 1 ) return state
      return state.map((product) =>
        product.id === action.payload.id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );

    default:
      return state;
  }
}
