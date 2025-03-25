import React from "react";
import HeadDetails from "../../../Components/HeadDetails";

const OurTeam = () => {
  return (
    <>
      <div className="py-10">
        <div className="flex flex-col gap-10">
          <HeadDetails
            title={"Our"}
            colortitle={"Team"}
            subtitle={"Meet out expert team members."}
          />
          <div className="flex flex-wrap justify-center items-center gap-6 text-center">
            <div className="flex flex-col gap-3">
              <div className="w-[250px] h-[290px] rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/teamMember-1.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-lg text-gray-500">
                  Benjamin Martin
                </h3>
                <p className="text-gray-400">Leader</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="w-[250px] h-[290px] rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/teamMember-2.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-lg text-gray-500">
                  Amelia Martin
                </h3>
                <p className="text-gray-400">Leader</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="w-[250px] h-[290px] rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/teamMember-3.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-lg text-gray-500">
                  William Dalin
                </h3>
                <p className="text-gray-400">Co-Founder</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="w-[250px] h-[290px] rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/teamMember-4.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-lg text-gray-500">
                  Emma Welson
                </h3>
                <p className="text-gray-400">Manager</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="w-[250px] h-[290px] rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/teamMember-5.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-lg text-gray-500">
                  Olivia Smith
                </h3>
                <p className="text-gray-400">Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
