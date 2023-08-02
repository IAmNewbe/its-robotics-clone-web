import React from "react";
import { MdChevronRight } from "react-icons/md";

const EventCard = ({ first, second, third, description, image, link }) => {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="relative overflow-hidden w-[90%] md:w-5/6 lg:w-3/4 h-10 md:h-60 lg:h-auto flex flex-col justify-center items-center rounded-xl md:rounded-2xl lg:rounded-3xl py-16 lg:py-28">
        <img
          src={image}
          alt="Event 1"
          className="absolute inset-0 w-full h-full object-cover z-10"
        />
        <div className="w-11/12 lg:w-10/12 flex flex-row justify-between items-center gap-x-5 z-20">
          <div className="w-1/2 flex flex-col text-white gap-y-1 md:gap-y-2 lg:gap-y-4">
            <p className="text-[8px] md:text-sm lg:text-base font-secondary">
              {first}
            </p>
            <p className="text-sm md:text-3xl lg:text-5xl">{second}</p>
            <p className="font-secondary text-xs md:text-3xl lg:text-5xl">
              {third}
            </p>
          </div>
          <div className="md:pt-2 lg:pt-10 w-1/2 flex flex-col text-white gap-y-2 md:gap-y-4 lg:gap-y-12 items-start">
            <p className="text-[8.5px] md:text-base lg:text-lg">
              {description}
            </p>
            <a
              href={link}
              className="flex items-center text-[8.5px] md:text-base lg:text-lg"
            >
              <p>View More</p>
              <span>
                <MdChevronRight />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
