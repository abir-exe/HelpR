import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import Heading from "../components/Heading";
import { CartContext } from "../utility/CartProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const product = useLoaderData();
  const { addToCart, addToWishlist } = useContext(CartContext);
  const [isInWishlist, setIsInWishlist] = useState(false);

  const notify = () => toast("Wow so easy!");
  const handleAddToCart = (product) => {
    addToCart(product); // Add product to cart
    toast("Item added to Cart!"); // Show toast
  };

  // Function to handle both adding to wishlist and showing the toast
  const handleAddToWishlist = (product) => {
    if (isInWishlist) {
      toast("You've already added this item to the Wishlist!");
    } else {
      addToWishlist(product);
      setIsInWishlist(true); // Update state to indicate the product is in the wishlist
      toast("Item added to Wishlist!");
    }
  };

  return (
    <div className="mb-72">
      <ToastContainer />
      <div className="bg-[rgb(149,56,226)] h-[200px] relative text-white ">
        <div className="w-3/4 mx-auto mb-40">
          <Heading
            title={"Details Products"}
            subtitle={
              "Explore the latest gadgets that will take your experience to the next level. From smart device to the coolest accessories, we have it all"
            }
          ></Heading>
        </div>
      </div>
      <div className="product-detail w-3/4 mx-auto absolute inset-x-0 top-[calc(100%-500px)] flex justify-center mb-40 bg-base-200  rounded-lg">
        {product ? (
          <>
            <div className="hero  h-[70vh] rounded-lg">
              <div className="hero-content flex-col lg:flex-row rounded-lg">
                <img
                  className="h-[60vh] w-1/2 rounded-lg"
                  src={product.product_image}
                  alt="Shoes"
                />
                <div>
                  <h1 className="text-5xl font-bold">
                    {" "}
                    {product.product_title}
                  </h1>

                  <p className=" py-3">Price: $ {product.price}</p>
                  <p className="py-3"> {product.description}</p>
                  <p className="py-3 px-6 bg-blue-300 btn">
                    {" "}
                    {product.availability}
                  </p>
                  <div className="flex items-center gap-3">
                    <p>
                      <div className="flex text-yellow-400">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </p>
                    <p className="py-2"> Rating: {product.rating}</p>
                  </div>
                  <div className="flex gap-10 items-center">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="btn bg-purple-500 text-white"
                    >
                      Add To Cart
                      <p className="text-2xl">
                        <CiShoppingCart />
                      </p>
                    </button>

                    {/* <button
                      onClick={() => handleAddToWishlist(product)}
                      className="text-3xl bg-white rounded-full p-5"
                    >
                      {" "}
                      <CiHeart />
                    </button> */}
                    <button
                      onClick={() => handleAddToWishlist(product)}
                      className={`text-3xl bg-white rounded-full p-5 ${
                        isInWishlist ? "cursor-not-allowed opacity-50" : ""
                      }`}
                      disabled={isInWishlist} // Disable button if already added
                    >
                      <CiHeart />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p>Product not found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
