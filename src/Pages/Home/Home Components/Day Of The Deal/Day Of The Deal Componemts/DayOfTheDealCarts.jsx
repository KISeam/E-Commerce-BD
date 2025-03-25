import React from "react";
import CartDesign from "../../../../../Components/CartDesign";

const DayOfTheDealCarts = ({ dealCatagory }) => {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
          {dealCatagory.map((product) => (
            <CartDesign
              key={product.id}
              productId={product.id}
              title={product.title}
              image={product.image}
              category={product.category}
              rating={product.rating}
              discountPrice={product.discountPrice}
              price={product.price}
              discountPresent={product.discountPresent}
              productSell={product.productSell}
              viewCart={product.viewCart}
              review={product.review}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DayOfTheDealCarts;
