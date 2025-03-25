import React from "react";

const Offer = () => {
  return (
    <>
      <div className="my-16 md:my-20">
        <div className="relative">
          <div className="h-[200px] md:h-[300px] lg:h-[400px] w-full overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="/6.jpg"
              alt=""
            />
          </div>
          <div className="text-right absolute top-1/6 md:top-1/4 right-4 md:right-10 lg:right-20 2xl:right-30">
            <h1 className="text-xl md:text-3xl lg:text-5xl font-semibold text-gray-700 mb-2 md:mb-3 lg:mb-4">
              Fresh Fruits <br /> Healthy Products
            </h1>
            <h3 className="text-[#63B295] text-base md:text-lg lg:text-xl mb-2 md:mb-3 lg:mb-4">30% off sale <span className="text-gray-500">Hurry up!!!</span></h3>
            <button className="bg-[#63B295] text-white px-4 py-2 rounded-md hover:bg-[#518e79] transition duration-300 cursor-pointer">Shop Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
