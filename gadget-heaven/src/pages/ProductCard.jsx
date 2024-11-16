import React, { useContext } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { CartContext } from "../utility/CartProvider";
import { useLoaderData } from "react-router-dom";

const ProductCard = ({ product, showAddToCartButton }) => {
  const { addToCart } = useContext(CartContext);
  const Product = useLoaderData();
  const { product_image, product_title, price, description } = product;

  return (
    <div className="">
      <div className="card bg-base-100 shadow-md p-4">
        <div className="flex justify-between items-center gap-3">
          <div className="flex items-center gap-5">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={product_image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{product_title}</div>
              <div className="text-sm opacity-50">{description}</div>
              {/* {showAddToCartButton && ( */}

              {/* )} */}
            </div>
            <p>Price:-${price}</p>
          </div>
          <button className="btn btn-danger mt-4 text-3xl text-red-400">
            <CiCircleRemove />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
