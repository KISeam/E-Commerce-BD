import React from "react";

const Review = () => {
  return (
    <>
      <div>
        <div className="py-10">
          <div className="relative w-full h-[500px] overflow-hidden slider-container bg-gray-50 rounded-2xl border border-gray-300">
            <div className="absolute inset-0 flex animate-slide">
              <div className="flex-shrink-0 w-full flex flex-col items-center justify-center h-full slides text-white">
                <img
                  src="/testi1.jpg"
                  alt="client image"
                  className="w-[20%] md:w-[10%] lg:w-[7%] rounded-full mb-4"
                />
                <blockquote className="text-center text-base text-gray-400">
                  <p>
                    "Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore <br />
                    eu. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia <br />
                    deserunt mollit anim id est laborum."
                  </p>
                </blockquote>
                <div className="text-2xl font-bold text-gray-600 mt-3">
                  Mario Spe
                </div>
              </div>
              <div className="flex-shrink-0 w-full flex flex-col items-center justify-center h-full slides text-white">
                <img
                  src="/testi2.jpg"
                  alt="client image"
                  className="w-[20%] md:w-[10%] lg:w-[7%] rounded-full mb-4"
                />
                <blockquote className="text-center text-base text-gray-400">
                  <p>
                    "Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore <br />
                    eu. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia <br />
                    deserunt mollit anim id est laborum."
                  </p>
                </blockquote>
                <div className="text-2xl font-bold text-gray-600 mt-3">
                  Petey Cru
                </div>
              </div>
              <div className="flex-shrink-0 w-full flex flex-col items-center justify-center h-full slides text-white">
                <img
                  src="/testi3.jpg"
                  alt="client image"
                  className="w-[20%] md:w-[10%] lg:w-[7%] rounded-full mb-4"
                />
                <blockquote className="text-center text-base text-gray-400">
                  <p>
                    "Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore <br />
                    eu. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia <br />
                    deserunt mollit anim id est laborum."
                  </p>
                </blockquote>
                <div className="text-2xl font-bold text-gray-600 mt-3">
                  Anna Sth
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
