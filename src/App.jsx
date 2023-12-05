import { Route, Routes } from "react-router-dom";
import Navbar from "./componets/navbar/Navbar";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import axios from "axios";
import {  UserContextProvider } from "./UserContext";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import { CartContextProvider } from "./CartContext";
import Checkout from "./pages/Checkout";
import SuccussPage from "./pages/SuccussPage";
import Order from "./pages/Order";
axios.defaults.baseURL='https://1mrxziahkt.us.aircode.run'
function App() {
  return (
    <div>
       <UserContextProvider>
        <CartContextProvider>
      <Navbar/>
        <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/success" element={<SuccussPage/>} />
        <Route path="/order" element={<Order/>} />
        </Routes>
       </CartContextProvider>
       </UserContextProvider>
    </div>
  );
}

export default App;
