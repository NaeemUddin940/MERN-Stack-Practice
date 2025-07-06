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

const EcommerceContext = createContext();

const initialState = {
  Products: [],
  searchFilter:[],
  shopFilter: [],
  loading: true,
  error: "",
};

const EcommerceContextProvider = ({ children }) => {
  const [allProducts, productsDispatch] = useReducer(
    FetchProducts,
    initialState
  );
  const [cart, cartDispatch] = useReducer(cartReducer,[]);

  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const [selected, setSelected] = useState({
    Price: null,
    Category: null,
    Color: null,
    Size: null,
  });

  // Fetch Products
  useEffect(() => {
    fetchProducts(productsDispatch);
  }, []);


  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);


  const handleSelect = useCallback((section, value) => {
    setSelected((prev) => ({
      ...prev,
      [section]: prev[section] === value ? null : value,
    }));
  }, []);

  const applyFilter = useCallback(() => {
    // let filtered = [...products];
    if (selected.Category) {
      filtered = filtered.filter(
        (product) => product.catagory === selected.Category.toLowerCase()
      );
    } else {
    }
    if (selected.Color) {
      filtered = filtered.filter((product) => product.color === selected.Color);
    }
    if (selected.Size) {
      filtered = filtered.filter((product) => product.size === selected.Size);
    }
    if (selected.Price === "Lowest") {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }
    if (selected.Price === "Highest") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    }

    // setFilterProduct(filtered);
  });

  useEffect(() => {
    let timer = setTimeout(() => {
      applyFilter();
    }, 150);
    return () => clearTimeout(timer);
  }, [selected]);

  // useEffect(() => {
  //   const storedCart = localStorage.getItem("cart");
  //   try {
  //     if (storedCart) {
  //       setCart(JSON.parse(storedCart));
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     localStorage.removeItem("cart");
  //   }
  // }, []);

  // useEffect(() => {
  //   if (cart.length > 0) {
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //   } else {
  //     localStorage.removeItem("cart");
  //   }
  // }, [cart]);

  // Add To Cart
  // const handleAddToCart = useCallback(
  //   (product) => {
  //     const existProduct = cart.find((item) => item.id === product.id);
  //     if (existProduct) {
  //       setCart(
  //         cart.map((item) =>
  //           item.id === product.id
  //             ? { ...item, quantity: item.quantity + 1 }
  //             : item
  //         )
  //       );
  //     } else {
  //       setCart([...cart, { ...product, quantity: 1 }]);
  //     }
  //   },
  //   [cart]
  // );

  // Remove From Cart
  // const handleRemoveCart = useCallback(
  //   (id) => {
  //     setCart(cart.filter((item) => item.id !== id));
  //   },
  //   [cart]
  // );

  // Increment Quantity
  const IncrementQuantity = useCallback(
    (item) => {
      const updatedCart = cart.map((product) =>
        product.id === item.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      setCart(updatedCart);
    },
    [cart]
  );

  // Decrement Quantity
  const DecrementQuantity = useCallback(
    (item) => {
      if (item.quantity <= 1) return;
      const updatedCart = cart.map((product) =>
        product.id === item.id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
      setCart(updatedCart);
    },
    [cart]
  );

  // This is Debounce Function
  function useDebounce(value, delay) {
    const [debounced, setDebounced] = useState(value);
    useEffect(() => {
      const timer = setTimeout(() => {
        setDebounced(value);
      }, delay);

      return () => clearTimeout(timer);
    }, [value, delay]);

    return debounced;
  }

  if (allProducts.loading)
    return (
      <div className="text-5xl h-full font-bold flex justify-center text-center items-center">
        <Loader />
      </div>
    );

  const state = {
    allProducts,
    productsDispatch,
    setIsDarkMode,
    cart,
    cartDispatch,
    IncrementQuantity,
    DecrementQuantity,
    useDebounce,
    selected,
    setSelected,
    handleSelect,
    applyFilter,
  };

  return (
    <EcommerceContext.Provider value={state}>
      {children}
    </EcommerceContext.Provider>
  );
};

export const useEcommerceContext = () => useContext(EcommerceContext);

export default EcommerceContextProvider;
