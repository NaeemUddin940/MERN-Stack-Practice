import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import Loader from "../Components/Loading/Loader";
import { FetchProducts } from "../Reducers/FetchProducts";
import { fetchProducts } from "../utils/FetchProducts";
import cartReducer from "../Reducers/cartReducer";
import useCartLocalStorage from "../hooks/useCartLocalStorage";

const EcommerceContext = createContext();

const initialState = {
  products: [],
  searchFilter: [],
  shopFilter: [],
  loading: true,
  error: "",
};

const EcommerceContextProvider = ({ children }) => {
  const [allProducts, productsDispatch] = useReducer(
    FetchProducts,
    initialState
  );
  const [cart, cartDispatch] = useReducer(cartReducer, []);
  const [filteredProducts, setFilteredProducts] = useState(
    allProducts.searchFilter
  );

  console.log(filteredProducts);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Fetch Products
  useEffect(() => {
    fetchProducts(productsDispatch);
  }, []);

  // Cart Products Save on Loacl Storage
  useCartLocalStorage(cart, cartDispatch);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  //   const applyFilter = useCallback(() => {
  //     let filtered = [...filteredProducts]

  //     if (selected.Category) {
  //       filtered = filtered.filter(
  //         (product) => product.catagory === selected.Category.toLowerCase()
  //       );
  //       console.log(filtered);
  //     }

  //     if (selected.Color) {
  //       console.log(selected.Color);
  //       filtered = filtered.filter((product) => product.color === selected.Color);

  //     }

  //     if (selected.Size) {
  //       filtered = filtered.filter((product) => product.size === selected.Size);
  //     }

  //     if (selected.Price === "Lowest") {
  //       filtered = filtered.sort((a, b) => a.price - b.price);
  //     }

  //     if (selected.Price === "Highest") {
  //     filtered = filtered.sort((a, b) => b.price - a.price);
  //   }

  //   setFilteredProducts(filtered); // filtered product array আলাদা state-এ রাখো
  // }, [allProducts.products, selected]);

  if (allProducts.loading)
    return (
      <div className="text-5xl h-full bg-white font-bold flex justify-center text-center items-center">
        <Loader />
      </div>
    );

  const state = {
    allProducts,
    productsDispatch,
    setIsDarkMode,
    cart,
    filteredProducts,
    cartDispatch,
    setFilteredProducts,
  };

  return (
    <EcommerceContext.Provider value={state}>
      {children}
    </EcommerceContext.Provider>
  );
};

export const useEcommerceContext = () => useContext(EcommerceContext);

export default EcommerceContextProvider;
