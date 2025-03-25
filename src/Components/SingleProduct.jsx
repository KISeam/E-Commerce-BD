import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaRegHeart, FaShoppingCart, FaStar, FaSearch } from "react-icons/fa";
import PageHeader from "./PageHeader";
import CartDesign from "./CartDesign";
import HeadDetails from "./HeadDetails";

const SingleProduct = () => {
  const [productCategory, setProductCategory] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("/Product-Data/Products.json")
      .then((res) => res.json())
      .then((data) => {
        const filterProduct = data.find((prod) => prod.id == id);
        setProduct(filterProduct);
      });
  }, [id]);

  useEffect(() => {
    fetch("/Product-Data/ProductCategory.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch categories");
        return res.json();
      })
      .then((data) => setProductCategory(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  useEffect(() => {
    if (product) {
      fetch("/Product-Data/Products.json")
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch related products");
          return res.json();
        })
        .then((data) => {
          const filteredRelatedProducts = data.filter(
            (item) =>
              item.category === product.category && item.id !== product.id
          );
          setRelatedProducts(filteredRelatedProducts);
        })
        .catch((error) =>
          console.error("Error fetching related products:", error)
        );
    }
  }, [product]);

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleCheckboxChange = (categoryName) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((cat) => cat !== categoryName)
        : [...prev, categoryName]
    );
  };

  return (
    <>
      <div className="flex flex-col gap-6 md:gap-10 lg:gap-12">
        <PageHeader page={"Products"} />
        <div className="w-full max-w-5xl mx-auto">
          <div>
            {product ? (
              <div className="flex flex-col lg:flex-row gap-8 bg-white rounded-2xl border border-gray-300 p-8">
                <div className="w-full lg:w-1/2">
                  <div className="relative w-full lg:h-[500px] overflow-hidden rounded-2xl">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                      <FaRegHeart className="h-6 w-6 text-gray-600 hover:text-red-500 cursor-pointer transition-colors duration-300" />
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2">
                  <h1 className="text-3xl font-bold text-gray-900">
                    {product.title}
                  </h1>
                  <p className="text-sm text-gray-500 mt-2">
                    {product.subtitle}
                  </p>
                  <div className="flex items-center space-x-2 mt-4">
                    <div className="flex items-center">
                      <span className="text-yellow-400 flex items-center">
                        <FaStar className="mr-1" />
                        <FaStar className="mr-1" />
                        <FaStar className="mr-1" />
                        <FaStar className="mr-1" />
                        <FaStar className="mr-1 text-gray-300" />
                      </span>
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.review} Reviews
                    </span>
                  </div>
                  <div className="mt-6">
                    <div className="flex flex-wrap items-end gap-4">
                      <p className="text-4xl font-bold text-gray-900">
                        ${product.discountPrice}
                      </p>
                      <p className="text-lg text-gray-500 line-through">
                        ${product.price}
                      </p>
                      <span className="text-sm font-semibold bg-gradient-to-r from-green-400 to-green-600 text-white px-3 py-1 rounded-full">
                        {product.discountPresent}% Off
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">
                      SKU: <span className="font-medium">{product.Model}</span>
                    </div>
                    <div className="text-sm font-semibold text-green-600">
                      In Stock
                    </div>
                  </div>
                  <div className="mt-6">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {product.details}
                    </p>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Product Specifications
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
                      <li className="bg-gray-50 p-3 rounded-lg">
                        <span className="font-medium">Category:</span>{" "}
                        {product.category}
                      </li>
                      <li className="bg-gray-50 p-3 rounded-lg">
                        <span className="font-medium">Color:</span>{" "}
                        {product.color}
                      </li>
                      <li className="bg-gray-50 p-3 rounded-lg">
                        <span className="font-medium">Model:</span>{" "}
                        {product.Model}
                      </li>
                      <li className="bg-gray-50 p-3 rounded-lg">
                        <span className="font-medium">Display Category:</span>{" "}
                        {product.productDisplayCategory}
                      </li>
                    </ul>
                  </div>
                  <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-6">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-l-lg transition-colors duration-300 cursor-pointer"
                        onClick={() => handleQuantityChange("decrease")}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        value={quantity}
                        className="w-12 text-center focus:outline-none text-gray-600"
                        readOnly
                      />
                      <button
                        className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-r-lg transition-colors duration-300 cursor-pointer"
                        onClick={() => handleQuantityChange("increase")}
                      >
                        +
                      </button>
                    </div>
                    <button className="flex items-center justify-center gap-2 px-6 py-2 bg-gradient-to-r from-black to-gray-800 text-white rounded-lg hover:from-gray-800 hover:to-black transition-all duration-300 shadow-lg cursor-pointer w-full sm:w-fit">
                      <FaShoppingCart className="h-5 w-5" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-center text-gray-500">
                Loading product details...
              </p>
            )}
          </div>
        </div>
        <div className="mb-14">
          <HeadDetails title={"Related"} colortitle={"Products"} />
          {relatedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <CartDesign
                  key={relatedProduct.id}
                  productId={relatedProduct.id}
                  title={relatedProduct.title}
                  image={relatedProduct.image}
                  category={relatedProduct.category}
                  rating={relatedProduct.rating}
                  discountPrice={relatedProduct.discountPrice}
                  price={relatedProduct.price}
                  discountPresent={relatedProduct.discountPresent}
                  productSell={relatedProduct.productSell}
                  viewCart={relatedProduct.viewCart}
                  review={relatedProduct.review}
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-10">
              No related products found in this category
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
