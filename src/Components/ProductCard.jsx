import React from "react";
import { IoBagOutline } from "react-icons/io5";

const ProductCard = ({ key, image, title, category, discountPrice, price }) => {
  return (
    <>
      <div>
        <div className="productCard p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-4 relative overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-16 h-16 object-cover rounded-md"
            />
            <div className="flex flex-col gap-[2px]">
              <h3 className="text-lg font-semibold text-gray-600 truncate">
                {title}
              </h3>
              <p className="text-sm text-gray-500">{category}</p>
              <div className="flex items-center gap-2 text-gray-600">
                <p className="text-base font-bold">&#2547; {discountPrice}</p>
                <span className="text-sm line-through opacity-70">
                  &#2547; {price}
                </span>
              </div>
            </div>
            <button className="p-1 rounded-sm border border-gray-400 bg-white text-black cursor-pointer transition-colors duration-300 opacity-0 mt-[38px] absolute">
              <IoBagOutline className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
