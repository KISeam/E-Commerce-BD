import React from "react";
import Categories from "./AllCategories Components/Categories";

const AllCategories = ({categories}) => {
  return (
    <>
      <div>
        <div className="my-16 md:my-20">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            All Categories
          </h1>
          <Categories categories={categories} />
        </div>
      </div>
    </>
  );
};

export default AllCategories;
