import React from "react";
import { Link } from "react-router-dom";

const MostPopularProductsImage = () => {
  return (
    <div className="relative">
      <div className="w-full">
        <img
          src="/5.jpg"
          alt="Most Popular Products"
          className="w-full object-cover rounded-lg"
        />
      </div>

      <div className="absolute top-10 left-10 w-9/12 space-y-6">
        <h3 className="text-xl font-semibold text-gray-600">
          Our top most products check it now
        </h3>
        <Link to="/products" className="px-4 py-2 bg-[#5caf90] text-white rounded-lg text-sm">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default MostPopularProductsImage;
