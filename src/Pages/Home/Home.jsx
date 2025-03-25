import React, { useEffect, useState } from "react";
import Hero from "./Home Components/Hero";
import AllCategories from "./Home Components/AllCategories/AllCategories";
import Services from "../../Components/Services";
import MostPopularProducts from "./Home Components/Most Popular Products/MostPopularProducts";
import LatestBlog from "./Home Components/LatestBlog/LatestBlog";
import DayOfTheDeal from "./Home Components/Day Of The Deal/DayOfTheDeal";
import NewArrivals from "./Home Components/New Arrivals/NewArrivals";
import Offer from "./Home Components/Offer";
import Image from "./Home Components/Image";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [dealCatagory, setDealCatagory] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [category, setCategory] = useState([]);
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [topSellingProducts, setTopSellingProducts] = useState([]);
  const [topRatedProducts, setTopRatedProducts] = useState([]);

  useEffect(() => {
    fetch("/Product-Data/ProductCategory.json")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setCategory(data);
      });
  }, []);

  useEffect(() => {
    fetch("/Product-Data/Products.json")
      .then((res) => res.json())
      .then((data) => {
        let dealCatagory = data.filter(
          (product) => product.productDisplayCategory == "Day-Of-The-Deal"
        );
        let trendingProducts = data.filter(
          (product) => product.productDisplayCategory === "Trending-Items"
        );
        let topSellingProducts = data.filter(
          (product) => product.productDisplayCategory === "Top-Selling"
        );
        let topRatedProducts = data.filter(
          (product) => product.productDisplayCategory === "Top-Rated"
        );
        setDealCatagory(dealCatagory);
        setTrendingProducts(trendingProducts);
        setTopSellingProducts(topSellingProducts);
        setTopRatedProducts(topRatedProducts);
      });
  }, []);

  useEffect(() => {
    fetch("/Blog-Data/Blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <>
      <div>
        <div>
          <Hero />
          <AllCategories categories={categories} />
          <DayOfTheDeal dealCatagory={dealCatagory} />
          <Offer />
          <NewArrivals category={category} />
          <Image />
          <div className="my-16 md:my-20">
            <Services />
          </div>
          <MostPopularProducts
            trendingProducts={trendingProducts}
            topSellingProducts={topSellingProducts}
            topRatedProducts={topRatedProducts}
          />
          <LatestBlog blogs={blogs} />
        </div>
      </div>
    </>
  );
};

export default Home;
