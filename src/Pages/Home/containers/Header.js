import React from "react";
import backgroundImage from "../../../Assets/Material/image12.png";

const Header = () => {
  return (
    <div className="border border-slate-900 ">
      <div className="w-full lg:w-full">
        <div className="relative overflow-hidden">
          <div
            style={{ backgroundImage: `url(${backgroundImage})` }}
            className="-translate-y-11 top-0 bg-contain md:w-full xl:h-[140vh] mx-auto md:bg-cover bg-no-repeat bg-center bg-fixed -z-30"
          >
            <div className="w-full h-full banner-overlay">
              <div className="container md:w-10/12">
                <div className=" w-full flex flex-wrap mx-auto justify-center self-center items-center">
                  <img
                    src={require("../../../Assets/Material/TitleCompany.png")}
                    alt="ITS Robotics"
                    className="scale-75 lg:scale-90 md:-translate-y-10 mt-4"
                  ></img>
                  <img
                    src={require("../../../Assets/Material/unsplash_hCb3lIB8L8E.png")}
                    alt="ITS Robotics"
                    className="scale-90 w-full"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
