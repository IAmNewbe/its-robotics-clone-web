import React from "react";
import otherImg1 from "../../../Assets/Material/othernews-img1.png";
import otherImg2 from "../../../Assets/Material/othernews-img2.png";
import otherImg3 from "../../../Assets/Material/othernews-img3.png";
import otherImg4 from "../../../Assets/Material/othernews-img4.png";
import NewsCard from "../components/NewsCard";

const OtherNews = () => {
  return (
    <div className="mt-10 md:px-10 md:mt-20 lg:mt-28 mb-20 md:mb-40 flex flex-col w-full h-auto">
      <div className="mx-auto flex flex-col gap-y-10 md:gap-y-16 lg:gap-y-24 md:justify-center items-center w-11/12 md:w-10/12 pt-1">
        <div className="font-secondary text-white text-center text-3xl md:text-5xl lg:text-6xl">
          D<span className="text-2xl md:text-4xl lg:text-5xl">on't</span>{" "}
          <span className="text-grey-0">
            M<span className=" text-2xl md:text-4xl lg:text-5xl">iss</span>
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex flex-col gap-y-12 md:gap-y-16">
            <NewsCard
              image={otherImg1}
              title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
              date={"March 29, 2023"}
              writer={"Nattasha"}
              dotClass={"text-[#625FFB]"}
            />
            <NewsCard
              image={otherImg3}
              title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
              date={"March 29, 2023"}
              writer={"Nattasha"}
              dotClass={"text-[#625FFB]"}
            />
          </div>
          <div className="flex flex-col gap-y-12 md:gap-y-16">
            <NewsCard
              image={otherImg2}
              title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
              date={"March 29, 2023"}
              writer={"Nattasha"}
              dotClass={"text-[#625FFB]"}
            />
            <NewsCard
              image={otherImg4}
              title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
              date={"March 29, 2023"}
              writer={"Nattasha"}
              dotClass={"text-[#625FFB]"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherNews;
