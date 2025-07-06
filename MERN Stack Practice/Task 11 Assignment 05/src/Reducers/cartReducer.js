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

    default:
      return state;
  }
}
