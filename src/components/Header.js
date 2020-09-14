import React from "react";
import "../styles/Header.css";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import ShoppingBasketSharpIcon from "@material-ui/icons/ShoppingBasketSharp";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase.js";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://www.pngitem.com/pimgs/b/1-12001_amazon-com-logo-png.png"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchSharpIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/login">
          <div onClick={handleAuth} className="header__option">
            <span className="header__optionLineOne">
              Hello {user ? user?.email : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">returns</span>
          <span className="header__optionLineTwo">&Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketSharpIcon />
            <span className="header__optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
