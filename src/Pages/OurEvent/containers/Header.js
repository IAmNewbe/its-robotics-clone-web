import React from "react";

const Header = () => {
  return (
    <div className="mt-24 md:mt-36 lg:mt-44 flex flex-col gap-y-24 w-full h-auto">
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-5 w-full lg:w-9/12 pt-1 md:ml-24 lg:ml-56">
        <div className="font-secondary text-white text-2xl md:text-4xl lg:text-6xl w-10/12 md:w-fit lg:w-6/12">
          OUR
          <br />
          EVENT
        </div>
      </div>
    </div>
  );
};

export default Header;
