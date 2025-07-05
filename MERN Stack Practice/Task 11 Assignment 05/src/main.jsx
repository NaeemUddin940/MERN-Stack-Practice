import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { ScrollProvider } from "./hooks/use-scroll-direction.js";
import  EcommerceContextProvider  from "./Context/EcommerceContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <EcommerceContextProvider>
      <ScrollProvider>
        <App />
      </ScrollProvider>
    </EcommerceContextProvider>
  </BrowserRouter>
);
