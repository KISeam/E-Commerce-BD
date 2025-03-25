import React from "react";

const StatsCards = () => {
  return (
    <div>
      <div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10">
            <div className="bg-white border-[1px] border-gray-300 rounded-lg px-14 py-8">
              <div className="flex flex-col justify-center items-center gap-1 text-center">
                <h1 className="text-5xl font-bold text-gray-300">65K+</h1>
                <h3 className="text-gray-600 text-lg font-semibold">Vendors</h3>
                <p className="text-sm text-gray-600">
                  Contrary to popular belief, Lorem is not simply random text.
                </p>
              </div>
            </div>
            <div className="bg-white border-[1px] border-gray-300 rounded-lg px-14 py-8">
              <div className="flex flex-col justify-center items-center gap-1 text-center">
                <h1 className="text-5xl font-bold text-gray-300">$45B+</h1>
                <h3 className="text-gray-600 text-lg font-semibold">
                  Earnings
                </h3>
                <p className="text-sm text-gray-600">
                  Contrary to popular belief, Lorem is not simply random text.
                </p>
              </div>
            </div>
            <div className="bg-white border-[1px] border-gray-300 rounded-lg px-14 py-8">
              <div className="flex flex-col justify-center items-center gap-1 text-center">
                <h1 className="text-5xl font-bold text-gray-300">25M+</h1>
                <h3 className="text-gray-600 text-lg font-semibold">Sold</h3>
                <p className="text-sm text-gray-600">
                  Contrary to popular belief, Lorem is not simply random text.
                </p>
              </div>
            </div>
            <div className="bg-white border-[1px] border-gray-300 rounded-lg px-14 py-8">
              <div className="flex flex-col justify-center items-center gap-1 text-center">
                <h1 className="text-5xl font-bold text-gray-300">70K+</h1>
                <h3 className="text-gray-600 text-lg font-semibold">
                  Products
                </h3>
                <p className="text-sm text-gray-600">
                  Contrary to popular belief, Lorem is not simply random text.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
