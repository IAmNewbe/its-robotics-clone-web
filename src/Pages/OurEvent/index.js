import Events from "./containers/Events";
import Header from "./containers/Header";
import eventGradient1 from "../../Assets/Material/event-news-gradient1.png";
import eventGradient2 from "../../Assets/Material/event-news-gradient2.png";

const OurEvent = () => {
  return (
    <div className="relative overflow-hidden">
      <Header />
      <Events />

      <img src={eventGradient1} alt="Gradient" className="absolute md:-left-6 top-0 animate-pulse" />
      <img src={eventGradient2} alt="Gradient" className="absolute md:-right-6 top-96 animate-pulse" />
    </div>
  );
};

export default OurEvent;
