export const fetchProducts = async (productsDispatch) => {
  productsDispatch({ type: "FETCH_START" });

  try {
    const response = await fetch("http://localhost:3000/products");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    productsDispatch({
      type: "FETCH_SUCCESS",
      payload: data,
    });
  } catch (err) {
    productsDispatch({ type: "FETCH_ERROR", error: "Failed To Fetch Data" });
  }
};
