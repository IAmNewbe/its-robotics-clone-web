import React from "react";

const SideNews = ({ image, title, year, date }) => {
  return (
    <section className="flex gap-x-8 items-center justify-center mb-8">
      <div className="md:min-w-[200px]">
        <img src={image} alt="Trending News 1" className="rounded-3xl" width={225} />
      </div>
      <div className="flex flex-col">
        <p className="text-white text-sm md:text-2xl min-[1260px]:text-3xl pb-5 border-b border-dashed">
          {title}
          <br />
          {year}
        </p>
        <p className="text-white md:text-lg lg:text-xl pt-5">{date}</p>
      </div>
    </section>
  );
};

export default SideNews;
