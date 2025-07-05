export const FetchProducts = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: '' };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        products: action.products,
        error: '',
      };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: "Something Error to fetch" };

    default:
      return state;
  }
};
