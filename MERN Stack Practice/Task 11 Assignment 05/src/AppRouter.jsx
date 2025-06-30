import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/Product-Details";
export default function AppRouter() {
  return (
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/product-details/:id' element={<ProductDetails/>} />
      </Routes>
  )
}
