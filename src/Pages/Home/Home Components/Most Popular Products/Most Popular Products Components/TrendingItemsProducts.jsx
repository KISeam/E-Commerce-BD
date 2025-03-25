import React from "react";
import ProductCard from "../../../../../Components/ProductCard";

const TrendingItemsProducts = ({ trendingProducts }) => {
  return (
    <>
      <div>
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-700">
              Trending <span className="text-[#5CAF90]">Items</span>
            </h2>
          </div>
          <div className="flex flex-col gap-2 overflow-scroll h-122">
            {trendingProducts.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  category={product.category}
                  discountPrice={product.discountPrice}
                  price={product.price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingItemsProducts;
