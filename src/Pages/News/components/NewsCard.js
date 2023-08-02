import React from "react";
import { BsDot } from "react-icons/bs";

const NewsCard = ({
  image,
  title,
  date,
  writer = "",
  dotClass = "text-[#625FFB]",
  cardClass = "",
}) => {
  return (
    <section className={cardClass}>
      <img src={image} alt="Trending News 1" className="rounded-3xl mb-12"></img>
      <p className="text-white md:text-2xl lg:text-4xl text-center pb-4 border-b border-dashed">
        {title}
      </p>
      {writer.length > 0 ? (
        <div className="flex flex-col gap-x-6 items-center justify-center text-white text-xs md:text-lg lg:text-xl text-center py-4">
          <div className="flex items-center justify-center">
            <p>{date} </p>
            <p className={dotClass}>
              <BsDot className="-mx-2 text-4xl" />
            </p>
          </div>
          <p>{writer}</p>
        </div>
      ) : (
        <p className="text-white text-xs md:text-lg lg:text-xl text-center py-4">{date}</p>
      )}
    </section>
  );
};

export default NewsCard;
