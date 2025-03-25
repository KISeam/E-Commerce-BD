import React, { useEffect, useState } from "react";
import NewArrivalsCarts from "./New Arrivals Components/NewArrivalsCarts";

const NewArrivals = ({ category }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      <div>
        <div className="my-16 md:my-20">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-700">
                  New <span className="text-[#5CAF90]">Arrivals</span>
                </h2>
                <p className="text-sm text-gray-500 mt-2">
                  Shop online for new arrivals and get free shipping!
                </p>
              </div>

              <div className="flex flex-wrap gap-2 overflow-hidden">
                {category.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`text-md font-medium ${
                      selectedCategory === cat.name
                        ? "text-white bg-[#5CAF90]"
                        : "text-gray-800 bg-gray-100"
                    } px-3 py-1 rounded-md w-fit cursor-pointer`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
            <NewArrivalsCarts selectedCategory={selectedCategory} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrivals;
