
import AwardCardRight from "../components/AwardCardRight";

const AwardListRight = () => {
  return (
    <div className="relative">
      <img alt="" src={require("../../../Assets/Material/BG 3_1.png")}
      className="hidden lg:block absolute left-0 -top-24 animate-pulse"></img>
      <img className="hidden lg:block absolute right-0 -top-1/2 animate-pulse" alt="" src={require("../../../Assets/Material/BG 9 (1).png")}></img>
      <div className="md:mx-auto flex flex-wrap justify-center mb-40 h-full lg:w-[1080px] 2xl:max-w-6xl relative">
        <img alt="" src={require("../../../Assets/Material/BG 9.png")}
          className="hidden md:block -z-10 absolute -left-48 top-1/4 animate-spin-slow "></img>
        <AwardCardRight/>
        <div className=" text-white justify-center items-center mx-16 md:mx-auto lg:mx-auto md:w-1/2 ">
          <h1 className="text-base font-bold font-secondary md:text-3xl">Achievement 1</h1>
          <p className="text-base text-justify max-w-full sm:max-w-lg md:max-w-full mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <button className="mt-4 p-2 bg-white rounded-xl text-main-0 font-semibold
          hover:bg-main-0 hover:ring-white ring-2 hover:text-white">Load more</button>
        </div>
        
      </div>
    </div>
  )
}

export default AwardListRight;