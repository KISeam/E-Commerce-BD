import React from "react";
import ProductCard from "../../../../../Components/ProductCard";

const TopSellingProducts = ({ topSellingProducts }) => {
  return (
    <>
      <div>
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-700">
              Top <span className="text-[#5CAF90]">Selling</span>
            </h2>
          </div>
          <div className="flex flex-col gap-2 overflow-scroll h-122">
            {topSellingProducts.map((product) => {
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

export default TopSellingProducts;
