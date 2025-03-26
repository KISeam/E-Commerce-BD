import React from "react";
import { Link } from "react-router-dom";

const Image = () => {
  return (
    <>
      <div className="my-16 md:my-20">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="relative w-full">
            <div className="h-[200px] md:h-[250px] lg:h-[300px] overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="/3.jpg"
                alt=""
              />
            </div>
            <div className="text-right absolute top-1/10 md:top-1/10 lg:top-2/12 right-4 md:right-6 lg:right-8 2xl:right-10">
              <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold text-gray-700 mb-2 md:mb-3 lg:mb-4">
                Tasty Snack <br /> & Fastfood
              </h1>
              <h3 className="text-gray-500 text-base md:text-lg lg:text-xl mb-2 md:mb-3 lg:mb-4">
                The Flavor Of <br /> Something Special
              </h3>
              <Link to="/products" className="bg-[#63B295] text-white px-4 py-2 rounded-md hover:bg-[#518e79] transition duration-300 cursor-pointer">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="relative w-full">
            <div className="h-[200px] md:h-[250px] lg:h-[300px] overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="/4.jpg"
                alt=""
              />
            </div>
            <div className="text-right absolute top-1/10 md:top-1/10 lg:top-2/12 right-4 md:right-6 lg:right-8 2xl:right-10">
              <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold text-gray-700 mb-2 md:mb-3 lg:mb-4">
                Fresh Fruits <br /> & Veggies
              </h1>
              <h3 className="text-gray-500 text-base md:text-lg lg:text-xl mb-2 md:mb-3 lg:mb-4">
                A Healthy Meal For <br /> Every One
              </h3>
              <Link to="/products" className="bg-[#63B295] text-white px-4 py-2 rounded-md hover:bg-[#518e79] transition duration-300 cursor-pointer">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Image;
