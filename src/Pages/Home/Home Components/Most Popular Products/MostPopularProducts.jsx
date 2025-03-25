import React, { useEffect, useState } from "react";
import MostPopularProductsImage from "./Most Popular Products Components/MostPopularProductsImage";
import TrendingItemsProducts from "./Most Popular Products Components/TrendingItemsProducts";
import TopSellingProducts from "./Most Popular Products Components/TopSellingProducts";
import TopRatedProducts from "./Most Popular Products Components/TopRatedProducts";

const MostPopularProducts = ({
  trendingProducts,
  topSellingProducts,
  topRatedProducts,
}) => {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
          <MostPopularProductsImage />
          <TrendingItemsProducts trendingProducts={trendingProducts} />
          <TopRatedProducts topRatedProducts={topRatedProducts} />
          <TopSellingProducts topSellingProducts={topSellingProducts} />
        </div>
      </div>
    </>
  );
};

export default MostPopularProducts;
