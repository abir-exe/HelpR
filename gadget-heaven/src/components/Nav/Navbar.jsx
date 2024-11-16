import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { CartContext } from "../../utility/CartProvider";
import { Helmet } from "react-helmet-async";

const Navbar = () => {
  const { cartItems, wishlistItems } = useContext(CartContext);
  const location = useLocation();

  let pageTitle = "Gadget Heaven"; // Default title
  // Set the page title based on the current route
  if (location.pathname === "/") {
    pageTitle = "Home | Gadget Heaven";
  } else if (location.pathname === "/dashboard") {
    pageTitle = "Dashboard | Gadget Heaven";
  } else if (location.pathname === "/cart") {
    pageTitle = `Cart (${cartItems.length}) | Gadget Heaven`; // Show number of items in cart
  } else if (location.pathname === "/wishlist") {
    pageTitle = `Wishlist (${wishlistItems.length}) | Gadget Heaven`; // Show number of items in wishlist
  }

  return (
    <div className="mt-5">
      <Helmet>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <div className="navbar bg-[rgb(149,56,226)] text-white rounded-t-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/statistics">Statistics</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl font-bold">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/statistics">Statistics</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-6">
          <div className="bg-white text-black flex  rounded-full p-2">
            <div>
              <BsCart4 />
            </div>
            <div className="badge text-red-400 text-xs gap-3">
              ({cartItems.length})
            </div>
          </div>
          <div className="bg-white text-black rounded-full flex p-2">
            <div>
              <CiHeart />
            </div>
            <div className="badge  text-xs">{wishlistItems.length}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
