import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import PageHeader from "../../Components/PageHeader";
import RightProductsDetalis from "./Products Componemts/Right Section/RightProductsDetalis";
import LeftCategory from "./Products Componemts/Left Section/LeftCategory";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [productCategories, setProductCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch("/Product-Data/Products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("/Product-Data/ProductCategory.json")
      .then((res) => res.json())
      .then((data) => setProductCategories(data));
  }, []);

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      const decodedCategory = decodeURIComponent(categoryParam);
      if (!selectedCategories.includes(decodedCategory)) {
        setSelectedCategories([decodedCategory]);
      }
    } else {
      setSelectedCategories([]);
    }
  }, [searchParams]);

  useEffect(() => {
    if (selectedCategories.length > 0) {
      setSearchParams({ category: encodeURIComponent(selectedCategories[0]) });
    } else {
      setSearchParams({});
    }
  }, [selectedCategories, setSearchParams]);

  // const filteredProducts =
  //   selectedCategories.length > 0
  //     ? products.filter((product) =>
  //         selectedCategories.includes(product.category)
  //       )
  //     : products;

  const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedCategories.length === 0 || selectedCategories.includes(product.category))
  );

  return (
    <>
      <div>
        <div className="flex flex-col gap-6 md:gap-10 lg:gap-12">
          <PageHeader page={"Products"} />
          {loading ? (
            <div className="flex justify-center items-center h-screen">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
            </div>
          ) : (
            <div className="flex flex-col-reverse lg:flex-row gap-10 mb-10 lg:mb-16">
              <div className="w-full lg:w-1/4">
                <LeftCategory
                  productCategories={productCategories}
                  selectedCategories={selectedCategories}
                  setSelectedCategories={setSelectedCategories}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />
              </div>
              <div className="w-full lg:w-3/4">
                <RightProductsDetalis
                  products={filteredProducts}
                  navigate={navigate}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
