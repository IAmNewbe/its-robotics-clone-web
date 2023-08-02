import abinara from "../../../Assets/Gallery/Abinara.webp";
import iris from "../../../Assets/Gallery/iris.webp";
import ichiro from "../../../Assets/Gallery/Ichiro.webp";
import virose from "../../../Assets/Gallery/Virose.webp";

const Gallery = () => {
  return (
    <>
      <img alt="" src={require("../../../Assets/Material/BG 1.png")} className="absolute left-0 hidden md:block -z-20 animate-pulse"></img>
      <div className="container relative md:w-10/12">
        <img alt="" src={require("../../../Assets/Material/Graphic 3.png")} className="absolute z-20 hidden md:block -translate-y-16 right-0 animate-ping"></img>
        <div className="flex md:grid md:grid-flow-row whitespace-nowrap overflow-x-auto md:whitespace-normal md:overflow-hidden md:pr-10 snap-x ">
          <div class=" md:grid md:grid-rows-2 md:grid-cols-5 md:grid-flow-col md:gap-x-14 md:gap-y-14 contents">
            <div class="md:row-span-2 md:col-span-3 flex-1 snap-center">
              <div class="rounded-[35px] overflow-hidden mx-5 w-52 md:w-full">
                <div class=" h-52 md:h-[780px]
                bg-center bg-cover relative" style={{backgroundImage: `url(${iris})`}}>
                  <div className="bg-black bg-opacity-40 w-full h-max absolute bottom-0 backdrop:blur">
                    <div className="p-4 md:p-10 md:mx-12">
                      <h2 className="text-white md:text-base">Gallery</h2>
                      <p className="text-white font-secondary text-sm md:text-2xl">IRIS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="md:col-span-2 flex-1 snap-center">
              <div class="rounded-[35px] overflow-hidden mx-5 w-52 md:w-full">
                <div class="max-w-full h-52 md:h-[350px] bg-[#bada55] 
                bg-center bg-cover relative" style={{backgroundImage: `url(${abinara})`}}>
                  <div className="bg-black bg-opacity-40 w-full h-max absolute bottom-0 backdrop:blur">
                    <div className="p-4 md:p-6 md:mx-12">
                      <h2 className="text-white md:text-base">Gallery</h2>
                      <p className="text-white font-secondary text-sm md:text-2xl">Abinara 1</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="md:row-span-1 md:col-span-2 flex-1 snap-center">
              <div class="rounded-[35px] overflow-hidden mx-5 w-52 md:w-full">
                <div class="max-w-full h-52 md:h-[350px] bg-[#bada55] 
                  bg-center bg-cover relative" style={{backgroundImage: `url(${virose})`}}>
                  <div className="bg-black bg-opacity-40 w-full h-max absolute bottom-0 backdrop:blur">
                      <div className="p-4 md:p-6 md:mx-12">
                        <h2 className="text-white md:text-base">Gallery</h2>
                        <p className="text-white font-secondary text-sm md:text-2xl">Virose</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="max-w-full md:mt-14 flex-1 snap-center">
            <div class="rounded-[35px] overflow-hidden mx-5 w-52 md:w-full ">
                <div class="max-w-full h-52 md:h-[480px] bg-[#bada55] 
                bg-center bg-cover relative" style={{backgroundImage: `url(${ichiro})`}}>
                  <div className="bg-black bg-opacity-40 w-full h-max absolute bottom-0 backdrop:blur">
                    <div className="p-4 md:p-6 md:mx-12">
                      <h2 className="text-white md:text-base">Gallery</h2>
                      <p className="text-white font-secondary text-sm md:text-2xl">Ichiro</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
        
        
      </div>
    </>
  )
}

export default Gallery;
