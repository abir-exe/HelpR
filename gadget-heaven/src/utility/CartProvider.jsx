import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const addToWishlist = (product) => {
    setWishlistItems((prevItems) => [...prevItems, product]);
  };
  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{ cartItems, wishlistItems, addToCart, addToWishlist, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
