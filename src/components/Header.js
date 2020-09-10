import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header clearfix">
      <img className="header-logo" src="/images/logo.jpg" alt="logo" />

      <nav className="header-nav">
        <NavLink
          exact
          className="header-nav-link "
          to="/"
          activeClassName="selected"
        >
          Home
        </NavLink>

        <a className="header-nav-link" href="/produs-getALL">
          All Products DB
        </a>
        <a className="header-nav-link" href="/your-Cart">
          Your Cart
        </a>
        <NavLink
          exact
          className="header-nav-link"
          to="/add-products"
          activeClassName="selected"
        >
          Add Products
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
