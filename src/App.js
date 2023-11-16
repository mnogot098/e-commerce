import "./App.css";
import NavBar from "./Components/navbar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShoppingCategory from "./Pages/ShoppingCategory";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import kids_banner from "./Components/Assets/banner_kids.png"
import men_banner from "./Components/Assets/banner_mens.png"
import women_banner from "./Components/Assets/banner_women.png"
import Authentication from "./Pages/Authentication";
import Cart from "./Pages/Cart";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/mens" element={<ShoppingCategory banner={men_banner} category="men"/>}/>
          <Route path="/womens" element={<ShoppingCategory banner={women_banner} category="women"/>}/>
          <Route path="/kids" element={<ShoppingCategory banner={kids_banner} category="kid"/>}/>
          <Route path="/product" element={<Product/>}>
              <Route path=":productId" element={<Product/>}/>
          </Route>
          <Route path="/card" element={<Cart/>}/>
          <Route path="/login" element={<Authentication/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
