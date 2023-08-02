import React from "react";
import teamStroke from "../../../Assets/Material/team-stroke.png";
import teamImage from "../../../Assets/Material/team-image.png";
import teamSideDetail from "../../../Assets/Material/team-side-detail.png";

const Header = () => {
  return (
    <div className="mt-24 md:mt-36 lg:mt-64 flex flex-col gap-y-24 w-full h-auto md:h-screen">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-5 w-full lg:w-9/12 pt-1 lg:ml-44">
        <div className="font-secondary text-white text-2xl md:text-4xl lg:text-6xl w-10/12 md:w-fit lg:w-6/12">
          THE ITS ROBOTICS TEAM
        </div>
        <div className="font-primary text-[10px] md:text-base text-white ml-20 md:ml-0 w-7/12 md:w-10/12 md:text-center lg:text-left lg:w-5/12">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. I
        </div>
      </div>

      <div className="relative w-full pb-2 h-[25vh]">
        <img src={teamImage} alt="Team" className="object-cover min-h-full" />
        <img
          src={teamSideDetail}
          alt="Detail"
          className="w-16 md:w-24 lg:w-36 absolute right-0 -bottom-5 md:-bottom-16"
        />
      </div>

      <img
        src={teamStroke}
        alt="Stroke"
        className="hidden lg:block absolute top-40 left-40"
      />
    </div>
  );
};

export default Header;
