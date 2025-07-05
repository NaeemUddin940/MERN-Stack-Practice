export const fetchProducts = async (
  productsDispatch,
  filteredProductsDispatch
) => {
  productsDispatch({ type: "FETCH_START" });

  try {
    const response = await fetch("http://localhost:3000/products");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    productsDispatch({ type: "FETCH_SUCCESS", products: data });
    filteredProductsDispatch({ type: "FETCH_SUCCESS", products: data });
  } catch (err) {
    productsDispatch({ type: "FETCH_ERROR", error: "Failed To Fetch Data" });
  }
};
