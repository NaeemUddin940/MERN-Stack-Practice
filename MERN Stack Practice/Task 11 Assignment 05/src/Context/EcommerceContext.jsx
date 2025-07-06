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
import { FilterReducer } from "../Reducers/FilterReducer";

const EcommerceContext = createContext();

const initialState = {
  products: [],
  searchFilter: [],
  selected: { Price: null, Category: null, Color: null, Size: null },
  shopFilter: [],
  loading: true,
  error: "",
};

const EcommerceContextProvider = ({ children }) => {
  const [allProducts, productsDispatch] = useReducer(
    FetchProducts,
    initialState
  );

  const [selected, dispatch] = useReducer(FilterReducer, initialState);
  const checkboxSelect = (section, value) => {
    dispatch({
      type: "TOGGLE_FILTER",
      payload: { section, value },
    });
  };

  const [cart, cartDispatch] = useReducer(cartReducer, []);

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
    selected,
    checkboxSelect,
    dispatch,
    cartDispatch,
    initialState,
  };

  return (
    <EcommerceContext.Provider value={state}>
      {children}
    </EcommerceContext.Provider>
  );
};

export const useEcommerceContext = () => useContext(EcommerceContext);

export default EcommerceContextProvider;
