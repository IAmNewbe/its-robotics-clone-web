import TrendingNews from "./containers/TrendingNews";
import OtherNews from "./containers/OtherNews";
import newsGradient1 from "../../Assets/Material/event-news-gradient1.png";
import newsGradient2 from "../../Assets/Material/event-news-gradient2.png";

const News = () => {
  return (
    <div className="relative overflow-hidden">
      <TrendingNews />
      <OtherNews />

      <img src={newsGradient1} alt="Gradient" className="absolute md:-left-6 top-0 animate-pulse" />
      <img src={newsGradient2} alt="Gradient" className="absolute md:-right-40 top-[1350px] animate-pulse" />
    </div>
  );
};

export default News;
