import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import CartContextProvider from "./Context/EcommerceContext.jsx";
import { ScrollProvider } from "./hooks/use-scroll-direction.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartContextProvider>
      <ScrollProvider>
        <App />
      </ScrollProvider>
    </CartContextProvider>
  </BrowserRouter>
);
