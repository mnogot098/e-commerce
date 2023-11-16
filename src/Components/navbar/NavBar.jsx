import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import cart_icon from "../Assets/cart_icon.png";
import logo from "../Assets/store.png";
import "./NavBar.css";
import { shopContext } from "../../Context/ShopContext";
const NavBar = () => {

  const [menu, setMenu] = useState("shop");
  const {getTotalCardItems} = useContext(shopContext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" width={70} />
        <Link to="/"><p>E-MARKET</p> </Link>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>{" "}
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/mens">
            Men
          </Link>{" "}
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/womens">
            Women
          </Link>{" "}
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>{" "}
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-card">
        <Link style={{ textDecoration: "none" }} to="/login">
          <button>Login</button>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/card">
          <img src={cart_icon} alt="" width={40} />
        </Link>
        <div className="nav-card-count">{getTotalCardItems()}</div>
      </div>
    </div>
  );
};

export default NavBar;
