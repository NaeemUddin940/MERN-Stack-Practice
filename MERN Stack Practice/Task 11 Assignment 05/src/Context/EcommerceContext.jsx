import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [cart, setCart] = useState([]);


  // Add To Cart
  const handleAddToCart = useCallback((product) => {
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
  }, [cart]);

  // Remove From Cart
  const handleRemoveCart = useCallback((id) => {
    setCart(cart.filter((item) => item.id !== id));
  }, [cart]);

  // Fetch Products
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("http://localhost:3000/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return (
      <p className="text-5xl font-bold text-center items-center">Loading...</p>
    );
  if (error) return <p>{error}</p>;
  if (!products.length) return <p>No products available.</p>;

  const state = {
    products,
    loading,
    cart,
    setCart,
    handleAddToCart,
    handleRemoveCart,
  };

  return <CartContext.Provider value={state}>{children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);

export default CartContextProvider;
