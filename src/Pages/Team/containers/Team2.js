import React from "react";
import team2Cross from "../../../Assets/Material/team2-cross.png";
import team2Image from "../../../Assets/Material/team2-image.png";
import team2Responsive from "../../../Assets/Material/team2-imgres.png";

const Team2 = () => {
  return (
    <div className="mb-20 relative flex flex-col items-end justify-start w-full h-auto md:h-screen lg:w-full">
      <div className="flex flex-col md:flex-row justify-center lg:justify-end items-center md:w-11/12 lg:w-9/12 pt-1 lg:mr-48">
        <img
          src={team2Responsive}
          alt="Team"
          width={800}
          className="md:hidden -mb-24 -mr-12"
        />
        <div className="flex flex-col w-2/3 lg:-mr-8 gap-y-2 md:gap-y-10 text-right md:text-left">
          <div className="font-secondary text-white md:text-3xl lg:text-5xl">
            TEAM TWO
          </div>
          <div className="font-primary text-white font-extralight text-xs md:text-sm lg:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>
        </div>
        <img
          src={team2Image}
          alt="Team"
          width={800}
          className="hidden md:block md:w-2/3 lg:w-7/12"
        />
      </div>

      <img
        src={team2Cross}
        alt="Detail"
        className="hidden lg:block absolute left-[88px] bottom-96 animate-spin-slow"
        width={76}
      />
    </div>
  );
};

export default Team2;
