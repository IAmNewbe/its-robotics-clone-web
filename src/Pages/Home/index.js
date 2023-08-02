import About from "./containers/About";
import Gallery from "./containers/Gallery";
import Header from "./containers/Header";
import OurStaff from "./containers/OurStaff";
import Sponsor from "./containers/Sponsor";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Gallery />
      <OurStaff />
      <Sponsor />
      <img alt="" src={require("../../Assets/Material/BG 3.png")} 
        className="absolute left-0 lg:hidden top-3 -z-10"></img>
      <img alt=""
        src={require("../../Assets/Material/BG 3 invert.png")}
          className="absolute top-96 right-0 md:hidden -z-20"></img>
    </>
  );
};

export default Home;
