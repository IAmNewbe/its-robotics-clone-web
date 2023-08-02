import tim from "../../../Assets/Achievements/ichiro-1.webp";
import komptisi from "../../../Assets/Achievements/Fira.png";

const AwardCardRight = () => {
  return (
    <>
      <div className="flex justify-end w-full items-center mb-14 md:my-auto md:w-1/3 lg:w-1/2 md:order-last">
        <div className="relative h-44 w-48 lg:h-[411px] lg:w-[411px] mr-20 lg:mr-0">
          <div className="h-40 w-40 lg:h-[350px] lg:w-[350px] rounded-xl absolute top-0 -left-7 lg:left-0 md:rounded-3xl bg-center bg-cover" style={{backgroundImage: `url(${tim})`}}></div>
          <div className="h-32 w-32 lg:h-[200px] lg:w-[200px] drop-shadow-[0_2px_20px_rgba(255,255,255,0.25)] rounded-xl  md:rounded-3xl absolute -bottom-1/4 lg:bottom-0 right-0 bg-cover" style={{backgroundImage: `url(${komptisi})`}}></div>
        </div>
      </div>
    </>
  )
}

export default AwardCardRight;