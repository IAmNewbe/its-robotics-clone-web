import React from "react";
import team1Gradient from "../../../Assets/Material/team1-gradient.png";
import team1Circle from "../../../Assets/Material/team1-circle.png";
import team1Triangle from "../../../Assets/Material/team1-triangle.png";
import team1Image from "../../../Assets/Material/team1-image.png";

const Team1 = () => {
  return (
    <div className="pt-24 relative flex flex-col items-center justify-start w-full h-auto md:h-screen">
      <div className="flex flex-col md:flex-row justify-start items-center md:w-9/12">
        <img
          src={team1Image}
          alt="Team"
          width={650}
          className="-ml-24 lg:-ml-12 w-3/4 lg:w-1/2"
        />
        <div className="flex flex-col w-2/3 md:w-[48%] gap-y-2 md:gap-y-10">
          <div className="font-secondary text-white md:text-3xl lg:text-5xl">
            TEAM ONE
          </div>
          <div className="font-primary text-white font-extralight text-xs md:text-sm lg:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
      </div>

      <img
        src={team1Gradient}
        alt="Gradient"
        className="absolute md:-left-32 -top-52 md:-top-[900px] animate-pulse"
      />
      <img
        src={team1Circle}
        alt="Detail"
        className="hidden lg:block absolute left-20 top-72 animate-ping"
        width={51}
      />
      <img
        src={team1Triangle}
        alt="Detail"
        className="hidden lg:block absolute bottom-48 right-14 animate-spin-slow"
        width={105}
      />
    </div>
  );
};

export default Team1;
