export default function FilterProductReducer(state, action) {
  switch (action.type) {
    case "SET_SELECTED":
      return {
        selected: {
          ...state.selected,
          [action.payload.section]:
            state.selected[action.payload.section] === action.payload.value
              ? null
              : action.payload.value,
        },
      };
    case "FILTER_PRODUCTS":
      return {
        ...state,
        searchFilter: action.payload,
      };

    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        searchFilter: action.payload, // default
      };

    case "CLEAR_SELECTED":
      return {
        ...state,
        selected: {
          Category: null,
          Color: null,
          Size: null,
          Price: null,
        },
        searchFilter: state.products, // reset to all
      };

    default:
      return state;
  }
}
