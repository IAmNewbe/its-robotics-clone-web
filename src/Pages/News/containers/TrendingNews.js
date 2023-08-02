import React from "react";
import trendingImg1 from "../../../Assets/Material/trendingnews-img1.png";
import trendingImg2 from "../../../Assets/Material/trendingnews-img2.png";
import trendingImg3 from "../../../Assets/Material/trendingnews-img3.png";
import trendingImg4 from "../../../Assets/Material/trendingnews-img4.png";
import NewsCard from "../components/NewsCard";
import SideNews from "../components/SideNews";

const TrendingNews = () => {
  return (
    <div className="mt-28 md:px-10 md:mt-36 lg:mt-44 flex flex-col gap-y-10 md:gap-y-16 lg:gap-y-24 w-full">
      <div className="mx-auto w-11/12 md:w-10/12">
        <div className="font-secondary text-white text-3xl md:text-5xl lg:text-6xl lg:mb-20">
          T<span className="text-2xl md:text-4xl lg:text-5xl">rending</span>{" "}
          <span className="text-grey-0">
            N<span className="text-2xl md:text-4xl lg:text-5xl">ews</span>
          </span>
        </div>
      </div>
      <div className="mx-auto flex flex-col md:justify-between items-center gap-5 w-11/12 md:w-10/12">
        <div className="flex gap-x-12">
          <NewsCard
            image={trendingImg1}
            title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            date={"March 29, 2023"}
            cardClass="hidden lg:block lg:w-1/2"
          />
          <div className="flex flex-col lg:w-1/2">
            <SideNews
              image={trendingImg2}
              year={2023}
              title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
              date={"March 29, 2023"}
            />
            <SideNews
              image={trendingImg3}
              year={2023}
              title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
              date={"March 29, 2023"}
            />
            <SideNews
              image={trendingImg4}
              year={2023}
              title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
              date={"March 29, 2023"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingNews;
