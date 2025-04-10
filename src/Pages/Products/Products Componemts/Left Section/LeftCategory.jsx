import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";

const LeftCategory = ({
  productCategories,
  selectedCategories,
  setSelectedCategories,
  setSearchQuery,
}) => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [localSearchQuery, setLocalSearchQuery] = useState("");

  useEffect(() => {
    if (categoryParam) {
      const decodedCategory = decodeURIComponent(categoryParam);
      setSelectedCategories([decodedCategory]);
    } else {
      setSelectedCategories([]);
    }
  }, [categoryParam]);

  const handleCheckboxChange = (categoryName) => {
    if (categoryName === "All") {
      setSelectedCategories([]);
    } else if (selectedCategories.includes(categoryName)) {
      setSelectedCategories([]);
    } else {
      setSelectedCategories([categoryName]);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(localSearchQuery);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="relative mb-8">
        <input
          className="w-full pl-4 pr-10 py-3 text-sm text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#63B295] focus:border-transparent transition-all duration-200"
          type="text"
          placeholder="Search products..."
          value={localSearchQuery}
          onChange={(e) => setLocalSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button 
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#63B295] transition-colors duration-200"
        >
          <IoSearchSharp className="text-lg cursor-pointer" />
        </button>
      </form>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <h3 className="text-lg font-semibold text-gray-800 bg-gray-50 px-6 py-4 border-b border-gray-200">
          Categories
        </h3>
        <div className="flex flex-col gap-2 p-4">
          <div
            className="flex items-center gap-3 text-sm text-gray-700 hover:text-[#63B295] px-4 py-2 rounded-md hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
            onClick={() => handleCheckboxChange("All")}
          >
            <input
              type="radio"
              checked={selectedCategories.length === 0}
              onChange={() => handleCheckboxChange("All")}
              className="w-4 h-4 text-[#63B295] border-gray-300 rounded-full focus:ring-[#63B295] cursor-pointer"
            />
            <span>All</span>
          </div>

          {productCategories
            .filter((category) => category.name !== "All")
            .map((category) => (
              <div
                key={category.id}
                className="flex items-center gap-3 text-sm text-gray-700 hover:text-[#63B295] px-4 py-2 rounded-md hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                onClick={() => handleCheckboxChange(category.name)}
              >
                <input
                  type="radio"
                  checked={selectedCategories.includes(category.name)}
                  onChange={() => handleCheckboxChange(category.name)}
                  className="w-4 h-4 text-[#63B295] border-gray-300 rounded-full focus:ring-[#63B295] cursor-pointer"
                />
                <span>{category.name}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LeftCategory;