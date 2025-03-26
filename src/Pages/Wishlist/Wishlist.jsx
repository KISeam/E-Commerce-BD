import React from "react";
import PageHeader from "../../Components/PageHeader";
import HeadDetails from "../../Components/HeadDetails";

const Wishlist = () => {
  return (
    <>
      <div>
        <div className="flex flex-col gap-6 md:gap-10 lg:gap-12">
          <PageHeader page={"Wishlist"} />
          <div className="flex flex-col gap-6 mb-10">
            <HeadDetails
              title={"Product"}
              colortitle={"Wishlist"}
              subtitle={"Your product wish is our first priority."}
            />
            <p className="text-black text-lg lg:text-xl text-center pt-10 pb-20">Your wishlist is empty.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
