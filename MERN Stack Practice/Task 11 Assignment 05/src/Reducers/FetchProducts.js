export const FetchProducts = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: "" };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        products: action.payload,
        searchFilter: action.payload,
        shopFilter: action.payload,
        error: "",
      };

    case "SEARCH_PRODUCTS":
      return {
        ...state,
        searchFilter: action.products,
      };

    case "FETCH_ERROR":
      return { ...state, loading: false, error: "Something Error to fetch" };

    default:
      return state;
  }
};
