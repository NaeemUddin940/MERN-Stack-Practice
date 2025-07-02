import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import Loader from "../Components/Loading/Loader";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  
  // Fetch Products
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      try {
        const response = await fetch("http://localhost:3000/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
        setAllProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Add To Cart
  const handleAddToCart = useCallback(
    (product) => {
      const existProduct = cart.find((item) => item.id === product.id);
      if (existProduct) {
        setCart(
          cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      } else {
        setCart([...cart, { ...product, quantity: 1 }]);
      }
    },
    [cart]
  );

  // Remove From Cart
  const handleRemoveCart = useCallback(
    (id) => {
      setCart(cart.filter((item) => item.id !== id));
    },
    [cart]
  );

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

  if (loading)
    return (
      <div className="text-5xl h-full font-bold flex justify-center text-center items-center">
        <Loader />
      </div>
    );

  const state = {
    products,
    loading,
    cart,
    setCart,
    handleAddToCart,
    handleRemoveCart,
    IncrementQuantity,
    DecrementQuantity,
    useDebounce,
    setProducts,
    allProducts,
  };

  return <CartContext.Provider value={state}>{children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);

export default CartContextProvider;
