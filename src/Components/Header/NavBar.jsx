import React, { useEffect, useRef, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GrAppsRounded } from "react-icons/gr";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [categories, setCategories] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    fetch("/Product-Data/Products.json")
      .then((res) => res.json())
      .then((data) => {
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-white border-t border-b border-gray-200 hidden lg:block">
      <div className="flex justify-between items-center w-11/12 md:w-10/11 lg:w-9/12 mx-auto py-2">
        <div className="flex items-center ">
          <div className="relative" ref={dropdownRef}>
            <div
              tabIndex={0}
              role="button"
              className="btn bg-[#63B295] border-none text-white px-4 py-6 rounded-md hover:bg-[#518e79] transition duration-300 cursor-pointer flex gap-2"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown
            >
              <GrAppsRounded className="font-bold text-xl" />
              <p>All Categories</p>
              <MdOutlineKeyboardArrowDown className="font-bold text-xl" />
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <ul
                tabIndex={0}
                className="dropdown-content menu absolute rounded-box z-10 w-52 p-2 shadow-sm text-gray-600 bg-white"
              >
                <li>
                  <Link
                    to="/products"
                    className="cursor-pointer"
                    onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
                  >
                    All Products
                  </Link>
                </li>
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link
                      to={`/products?category=${encodeURIComponent(category)}`}
                      className="cursor-pointer"
                      onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="navbar-center hidden lg:flex lg:justify-between">
          <ul className="menu menu-horizontal px-1 gap-6 text-gray-600 text-[16px]">
            <Link to="/" className="cursor-pointer">
              Home
            </Link>
            <Link to="/products" className="cursor-pointer">
              Products
            </Link>
            <Link to="/blog" className="cursor-pointer">
              Blog
            </Link>
            <Link to="/faq" className="cursor-pointer">
              FAQ
            </Link>
            <Link to="/about" className="cursor-pointer">
              About
            </Link>
            <Link to="/contact" className="cursor-pointer">
              Contact
            </Link>
          </ul>
        </div>

        <div>
          <Link
            to="/products"
            className="bg-[#63B295] text-base text-white px-6 py-3 rounded-md hover:bg-[#518e79] transition duration-300 cursor-pointer"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
