import React from "react";
import { FaShoppingCart, FaEye, FaStar, FaFire } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { MdPreview } from "react-icons/md";
import { Link } from "react-router-dom";

const CartDesign = ({
  productId,
  title,
  image,
  category,
  rating,
  discountPrice,
  price,
  discountPresent,
  productSell,
  viewCart,
  review,
}) => {
  return (
    <>
      <Link to={`/products/${productId}`}>
        <div className="bg-white shadow-xl hover:shadow-2xl rounded-lg transform hover:scale-105 transition-transform duration-300 p-4">
          <div className="h-50 rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt={title}
            />
          </div>
          <div className="pt-4 px-2">
            <h2 className="text-base md:text-lg font-bold text-gray-800 truncate">
              {title}
            </h2>
            <p className="text-xs md:text-sm text-gray-500 mt-1">
              {category}
            </p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-400 flex items-center">
                <FaStar className="mr-1" />
                <FaStar className="mr-1" />
                <FaStar className="mr-1" />
                <FaStar className="mr-1" />
                <FaStar className="mr-1 text-gray-300" />
              </span>
              <span className="ml-2 text-gray-600 text-xs md:text-sm">
                ({rating})
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <p className="text-sm md:text-base font-semibold text-gray-800">
                ${discountPrice}{" "}
                <span className="text-xs md:text-sm text-gray-500 line-through">
                  ${price}
                </span>
              </p>
              <p className="text-xs md:text-sm text-green-600">{discountPresent}% Off</p>
            </div>
            <div className="flex items-center justify-between mt-2 text-xs md:text-sm text-gray-600 gap-2">
              <div className="flex items-center gap-1">
                <FaFire className="text-red-500" />
                <span>{productSell} sold</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-[1px] h-4 bg-gray-400"></div>
                <div className="w-[1px] h-4 bg-gray-400"></div>
              </div>
              <div className="flex items-center gap-1">
                <FaEye />
                <span>{viewCart} view</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-[1px] h-4 bg-gray-400"></div>
                <div className="w-[1px] h-4 bg-gray-400"></div>
              </div>
              <div className="flex items-center gap-1">
                <MdPreview />
                <span>{review} review</span>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-black to-gray-800 text-white rounded-lg hover:from-gray-800 hover:to-black shadow-lg cursor-pointer text-sm">
                <FaShoppingCart className="h-4 w-4" />
                <span className="mt-[1px]">Add to Cart</span>
              </button>
              <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-900 text-black hover:text-white cursor-pointer transition-colors duration-300">
                <FaRegHeart className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CartDesign;
