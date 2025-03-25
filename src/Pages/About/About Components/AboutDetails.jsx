import React from "react";

const AboutDetails = () => {
  return (
    <>
      <div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-10">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="overflow-hidden">
              <img className="rounded-lg" src="/about-1.png" alt="" />
            </div>
            <div className="grid grid-rows-1 md:grid-rows-2 gap-6 md:gap-4">
              <div className="overflow-hidden rounded-lg">
                <img src="/about-2.png" alt="" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img src="/about-3.png" alt="" />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold text-gray-700">
                Who We <span className="text-[#5CAF90]">Are?</span>
              </h2>
              <p className="text-lg font-semibold text-gray-500 uppercase">
                We’re here to serve only the best products for you. Enriching
                your homes with the best essentials.
              </p>
            </div>
            <div className="flex flex-col gap-4 text-gray-400">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                possimus nihil itaque dolorem quasi quia alias? Nulla similique
                exercitationem hic!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                ullam incidunt, molestias cupiditate doloremque natus ab et
                veniam dolores totam minus. Beatae nihil ex expedita, dolorum
                tempore aperiam rerum at iste id praesentium eos dicta esse
                iusto fugit cum dignissimos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutDetails;
