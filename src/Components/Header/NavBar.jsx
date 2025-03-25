import React, { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GrAppsRounded } from "react-icons/gr";
import { MdOutlineAddLocation } from "react-icons/md";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/Product-Data/Products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        const uniqueCategories = [
          ...new Set(
            data.map(
              (product) => product.category || product.productDisplayCategory
            )
          ),
        ];
        setCategories(uniqueCategories.filter(Boolean));
      });
  }, []);

  return (
    <div className="bg-white border-t border-b border-gray-200 hidden lg:block">
      <div className="flex justify-between w-11/12 md:w-10/11 lg:w-9/12 mx-auto py-2">
        <div className="flex items-center">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-[#63B295] border-none text-white px-4 py-6 rounded-md hover:bg-[#518e79] transition duration-300 cursor-pointer flex gap-2"
            >
              <GrAppsRounded className="font-bold text-xl" />
              <p>All Categories</p>
              <MdOutlineKeyboardArrowDown className="font-bold text-xl" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box z-1 w-52 p-2 shadow-sm text-gray-600 bg-white"
            >
              <li>
                <Link to="/products" className="cursor-pointer">
                  All Products
                </Link>
              </li>
              {categories.map((category, index) => (
                <li key={index}>
                  <Link
                    to={`/products?category=${encodeURIComponent(category)}`}
                    className="cursor-pointer"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex lg:justify-between">
          <ul className="menu menu-horizontal px-1 gap-6 text-gray-600 text-[16px]">
            <Link to="/" className="cursor-pointer">
              Home
            </Link>
            <Link to="/about" className="cursor-pointer">
              About
            </Link>
            <Link to="/products" className="cursor-pointer">
              Products
            </Link>
            <Link to="/blog" className="cursor-pointer">
              Blog
            </Link>
            <Link to="/contact" className="cursor-pointer">
              Contact
            </Link>
            <Link to="/faq" className="cursor-pointer">
              FAQ
            </Link>
          </ul>
        </div>

        <div className="flex items-center">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-[#63B295] border-none text-white px-4 py-6 rounded-md hover:bg-[#518e79] transition duration-300 cursor-pointer flex gap-2"
            >
              <CiLocationOn className="font-bold text-xl" />
              <p>Dhaka</p>
              <MdOutlineKeyboardArrowDown className="font-bold text-xl" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box z-1 w-52 p-2 shadow-sm text-gray-500 bg-white"
            >
              <li className="m-1 rounded-sm hover:border-[#5caf90] border-none">
                <p>
                  <MdOutlineAddLocation />
                  Barisal
                </p>
              </li>
              <li className="m-1 rounded-sm hover:border-[#5caf90] border-none">
                <p>
                  <MdOutlineAddLocation />
                  Chittagong
                </p>
              </li>
              <li className="m-1 rounded-sm hover:border-[#5caf90] border-none">
                <p>

                  <MdOutlineAddLocation />
                  Khulna
                </p>
              </li>
              <li className="m-1 rounded-sm hover:border-[#5caf90] border-none">
                <p>
                  <MdOutlineAddLocation />
                  Mymensingh
                </p>
              </li>
              <li className="m-1 rounded-sm hover:border-[#5caf90] border-none">
                <p>
                  <MdOutlineAddLocation />
                  Rajshahi
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
