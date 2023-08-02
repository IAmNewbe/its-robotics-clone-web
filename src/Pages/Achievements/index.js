import Award from "./containers/Award";
// import AwardList from "./containers/AwardList";
// import AwardListRight from "./containers/AwardListRight";
import Slider from "./containers/Slider";

const Achievements = () => {
    return (
        <div className="relative">
            <img src={require("../../Assets/Material/BG 10.png")} 
            className='hidden md:block absolute -z-20 left-0 -top-32'
            alt=''></img>
            <Slider />
            <Award />
        </div>
    )
}

export default Achievements;