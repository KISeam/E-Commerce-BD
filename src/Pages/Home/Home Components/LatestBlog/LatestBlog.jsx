import React from "react";
import BlogCart from "./LatestBlog Componemts/BlogCart";
import { FaAnglesRight } from "react-icons/fa6";

const LatestBlog = ({blogs}) => {
  
  return (
    <>
      <div>
        <div className="my-10">
          <div>
            <div class="flex justify-between items-center">
              <div>
                <h2 class="text-2xl font-bold text-gray-700">
                  Latest <span class="text-[#5CAF90]">Blog</span>
                </h2>
                <p class="text-sm text-gray-500 mt-2">
                  We tackle interesting topics every day in 2023.
                </p>
              </div>
              <button className="text-md font-medium text-gray-400  text-left cursor-pointer">
                All Blogs
                <FaAnglesRight className="inline-block ml-2" />
              </button>
            </div>
          </div>
          <BlogCart blogs={blogs} />
        </div>
      </div>
    </>
  );
};

export default LatestBlog;
