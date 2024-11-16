import React, { useContext, useState } from "react";
import Heading from "../components/Heading";
import Card from "../components/Card"; // Import the Card component
import { CartContext } from "../utility/CartProvider";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import SuccessImg from "../assets/Group.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductWishCard from "./ProductWishCard";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const { cartItems, wishlistItems, clearCart, clearWishlist } =
    useContext(CartContext);
  const [activeTab, setActiveTab] = useState("cart");
  const [sortOrder, setSortOrder] = useState("asc");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const notify = () => toast("Wow so easy!");
  // total price
  const totalPrice = (activeTab === "cart" ? cartItems : wishlistItems).reduce(
    (sum, item) => sum + item.price,
    0
  );

  // purchase modal
  const handlePurchase = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // Clear items based on active tab
    clearCart();

    navigate("/");
  };

  // sort
  const sortedItems = [
    ...(activeTab === "cart" ? cartItems : wishlistItems),
  ].sort((a, b) =>
    sortOrder === "asc" ? a.price - b.price : b.price - a.price
  );

  return (
    <div className="">
      <Helmet>
        <title>Gadget Heaven || Dashboard</title>
      </Helmet>
      <div className=" py-8">
        <div className="bg-purple-600">
          <div className="w-2/3 mx-auto text-white -mt-10 p-10">
            <Heading
              title="Dashboard"
              subtitle="Your selected items are shown here."
            />
          </div>
          <div className="flex justify-center items-center gap-7 py-5 text-black">
            <button
              className={`btn btn-outline rounded-3xl px-10 ${
                activeTab === "cart" ? "btn-active" : ""
              }`}
              onClick={() => setActiveTab("cart")}
            >
              Cart
            </button>

            <button
              className={`btn btn-outline rounded-3xl text-white px-7 ${
                activeTab === "wishlist" ? "btn-active" : ""
              }`}
              onClick={() => setActiveTab("wishlist")}
            >
              Wishlist
            </button>
          </div>
        </div>
        {/* display total price  */}

        <div className="mt-10  my-20 gap-4">
          {activeTab === "cart" && (
            <>
              <div className="flex items-center justify-end gap-5 mt-10">
                <div className="mt-4 text-center font-semibold text-lg  ">
                  Total Price: ${totalPrice.toFixed(2)}
                </div>
                {/* sort button  */}
                <div className="flex justify-center my-4">
                  <button
                    onClick={() =>
                      setSortOrder((prevOrder) =>
                        prevOrder === "asc" ? "desc" : "asc"
                      )
                    }
                    className="btn btn-outline"
                  >
                    Sort by Price (
                    {sortOrder === "asc" ? "Ascending" : "Descending"})
                  </button>
                </div>
                <div>
                  <button
                    className="btn"
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                  >
                    Purchase
                  </button>
                  <dialog id="my_modal_1" className="modal">
                    <div className="modal-box text-center items-center justify-center">
                      <h3 className="font-bold text-lg">
                        <img className="mx-auto" src={SuccessImg} alt="" />
                      </h3>
                      <p className="py-4">Your payment has been successful</p>
                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button
                            onClick={handleCloseModal}
                            className="btn mx-auto"
                          >
                            Close
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>

              {sortedItems.length > 0 ? (
                sortedItems.map((product, index) => (
                  <ProductCard
                    key={index}
                    product={product}
                    showAddToCartButton={activeTab === "wishlist"}
                  />
                ))
              ) : (
                <p className="col-span-full text-center">
                  No items in cart.{activeTab}
                </p>
              )}
            </>
          )}

          {activeTab === "wishlist" && (
            <>
              {wishlistItems.length > 0 ? (
                wishlistItems.map((product, index) => (
                  <ProductWishCard key={index} product={product} />
                ))
              ) : (
                <p className="col-span-full text-center">
                  No items in wishlist.
                </p>
              )}
            </>
          )}

          {/* {showModal && ( */}
          {/* <div className="modal">
            <div className="modal-content">
              <h2>Purchase Confirmation</h2>
              <p>Your items will be purchased successfully.</p>
              <button onClick={handleCloseModal} className="btn btn-danger">
                Close
              </button>
            </div>
          </div> */}
          {/* Open the modal using document.getElementById('ID').showModal() method */}

          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
