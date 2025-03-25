import React from "react";

const Services = () => {
  return (
    <>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white border-[1px] border-gray-400 rounded-lg p-6">
            <div className="flex flex-col justify-center items-center gap-3 text-center">
              <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/609/609361.png" alt="" />
              <h3 className="text-gray-600 text-lg font-semibold">Free Shipping</h3>
              <p className="text-sm text-gray-600">
                Free shipping on all US orders or orders above $200
              </p>
            </div>
          </div>

          <div className="bg-white border-[1px] border-gray-400 rounded-lg p-6">
            <div className="flex flex-col justify-center items-center gap-3 text-center">
              <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/4961/4961759.png" alt="" />
              <h3 className="text-gray-600 text-lg font-semibold">24x7 Support</h3>
              <p className="text-sm text-gray-600">
                Contact us 24 hours a day, 7 days a week
              </p>
            </div>
          </div>

          <div className="bg-white border-[1px] border-gray-400 rounded-lg p-6">
            <div className="flex flex-col justify-center items-center gap-3 text-center">
              <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/11153/11153363.png" alt="" />
              <h3 className="text-gray-600 text-lg font-semibold">30 Days Return</h3>
              <p className="text-sm text-gray-600">
                Simply return it within 30 days for an exchange
              </p>
            </div>
          </div>

          <div className="bg-white border-[1px] border-gray-400 rounded-lg p-6">
            <div className="flex flex-col justify-center items-center gap-3 text-center">
              <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/2059/2059129.png" alt="" />
              <h3 className="text-gray-600 text-lg font-semibold">Payment Secure</h3>
              <p className="text-sm text-gray-600">
                Contact us 24 hours a day, 7 days a week
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
