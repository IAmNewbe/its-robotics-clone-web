import React from "react";

const Footer = () => {
  return (
    <div className="mx-4">
      <hr className="container md:w-10/12"></hr>
      <footer className="bg-main-0 pt-7 pb-8 text-white w-full">
        <div className="container md:w-10/12">
          <div className="sm:pt-10 md:px-10 flex flex-wrap">
            <div className="w-full mb-7 sm:mb-12 px-4 md:w-1/2 justify-center">
              <img
                src={require("../Assets/Material/ITS Logo.png")}
                className="h-[70px] md:h-40"
                alt="ITS Logo"
              />
            </div>
            <div className="w-full mb-12 px-4 md:w-1/2 grid md:justify-end tracking-wide">
              <h2 className="font-secondary text-xs leading-7 md:text-lg font-bold">
                Our Address
              </h2>
              <p className="text-[10px] leading-4 sm:text-sm font-normal">
                Laboratorium Workshop Lantai I
              </p>
              <p className="text-[10px] leading-4 sm:text-sm font-normal">
                Sekretariat Robotika ITS, Pusat Robotika ITS
              </p>
              <p className="text-[10px] leading-4 sm:text-sm font-normal">
                Jl. Teknik Kimia, Kampus ITS Sukolilo, Surabaya, 60111
              </p>

              <h2 className="font-secondary text-sm leading-7 md:text-lg font-bold pt-5 sm:pt-6">
                Contact
              </h2>
              <p className="text-[10px] leading-4 sm:text-sm font-normal">
                Mobile : +6282245604847
              </p>
              <p className="text-[10px] leading-4 sm:text-sm font-normal">
                Email : ukm.its.robotics@gmail.com
              </p>
            </div>
          </div>
          <p className="text-sm font-normal tracking-wide text-center">
            © 2023 ITS Robotics. All Right Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
