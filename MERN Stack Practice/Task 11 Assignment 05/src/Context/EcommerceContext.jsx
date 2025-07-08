import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import Loader from "../Components/Loading/Loader";
import cartReducer from "../Reducers/cartReducer";
import useCartLocalStorage from "../hooks/useCartLocalStorage";
import { FilterReducer } from "../Reducers/FilterReducer";
import { products } from "../Data/Data";

const EcommerceContext = createContext();



const checkboxState = {
  Price: null,
  Category: null,
  Color: null,
  Size: null,
};

const EcommerceContextProvider = ({ children }) => {
  const [Products, setProducts] = useState(products);
  const [searchProducts, setSearchProducts] = useState([...Products]);
  // Showing Products On cart Reducer State
  const [cart, cartDispatch] = useReducer(cartReducer, []);

  // Dark Mode Toggle State
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Products Filter State
  const [filtered, setFiltered] = useState([]);

  // Checkbox Selected Reducer State
  const [selected, selectDispatch] = useReducer(FilterReducer, checkboxState);

  // Cart Products Save on Loacl Storage
  useCartLocalStorage(cart, cartDispatch);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Fetch Products
  // useEffect(() => {
  //   fetchProducts(productsDispatch);
  // }, []);

  const checkboxSelect = (section, value) => {
    selectDispatch({
      type: "TOGGLE_SELECT",
      payload: { section, value },
    });
  };

  function applyFilter() {
    let filtered = [...Products];
    if (selected.Category) {
      filtered = filtered.filter(
        (p) => p.catagory === selected.Category.toLowerCase()
      );
    }
    if (selected.Color) {
      filtered = filtered.filter((p) => p.colors === selected.Color);
    }
    if (selected.Size) {
      filtered = filtered.filter((p) => p.size === selected.Size);
    }
    if (selected.Price === "Highest") {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }
    if (selected.Price === "Lowest") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    }
    setFiltered(filtered);
  }
  useEffect(() => {
    applyFilter();
  }, [selected, Products]);

  if (!Products || Products.length === 0)
    return (
      <div className="text-5xl h-full bg-white font-bold flex justify-center text-center items-center">
        <Loader />
      </div>
    );

  const state = {
    Products,
    setProducts,
    setIsDarkMode,
    setSearchProducts,
    searchProducts,
    cart,
    cartDispatch,
    filtered,
    setFiltered,
    checkboxSelect,
    selected,
    selectDispatch,
    checkboxState,
  };

  return (
    <EcommerceContext.Provider value={state}>
      {children}
    </EcommerceContext.Provider>
  );
};

export const useEcommerceContext = () => useContext(EcommerceContext);

export default EcommerceContextProvider;
