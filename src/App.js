import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./containers/Footer";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Achievements from "./Pages/Achievements";
import OurEvent from "./Pages/OurEvent";
import News from "./Pages/News";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/teams" element={<Team />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/events" element={<OurEvent />} />
          <Route path="/news" element={<News />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
