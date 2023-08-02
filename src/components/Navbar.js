import { useState } from "react";
import NavLinker from "./NavLinker";
import { CgSearch } from "react-icons/cg";

const Navbar = () => {
  const [stateClass, setStateClass] = useState(false);

  const toggle = () => {
    setStateClass(!stateClass);
    console.log(stateClass);
  };

  return (
    <nav className="bg-transparent fixed top-0 left-0 w-full flex items-center justify-center z-50 text-white backdrop-brightness-75 backdrop-blur-sm">
      <div className="w-5/6 pt-3">
        <div className="flex items-center justify-between relative">
          <div className="px-4 w-5/12">
            <div className="flex justify-start items-center lg:w-full border rounded-full pl-4 pr-6 text-white text-lg py-2 ">
              <CgSearch className="text-2xl mr-3" />
              <input
                className="w-full bg-transparent focus:outline-none"
                placeholder="Search here"
              />
            </div>
          </div>
          <div onClick={toggle} className={"flex items-center px-4"}>
            <button
              name="hamburger"
              className={
                "block absolute right-4 lg:hidden " +
                (stateClass ? "hamburger-active" : "")
              }
            >
              <span className="hamburger-line transition duration-700 origin-top-left"></span>
              <span className="hamburger-line transition duration-700"></span>
              <span className="hamburger-line transition duration-700 origin-bottom-left"></span>
            </button>

            <div
              id="nav-menu"
              className={
                "absolute py-5 bg-transparent shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none " +
                (!stateClass ? "hidden" : "nav-menu")
              }
            >
              <div className="block lg:flex lg:font-normal">
                <NavLinker
                  to="/"
                  className={(isActive) =>
                    "text-base text-primary-0 py-2 flex" +
                    (!isActive ? " hover:brightness-90" : " font-extrabold")
                  }
                >
                  <p className="-mx-2 tracking-widest">HOME</p>
                </NavLinker>
                <NavLinker
                  to="/teams"
                  className={(isActive) =>
                    "text-base text-primary-0 py-2 flex" +
                    (!isActive ? " hover:brightness-90" : " font-extrabold")
                  }
                >
                  <p className="-mx-2 tracking-widest">TEAMS</p>
                </NavLinker>
                <NavLinker
                  to="/achievements"
                  className={(isActive) =>
                    "text-base text-primary-0 py-2 flex" +
                    (!isActive ? " hover:brightness-90" : " font-extrabold")
                  }
                >
                  <p className="-mx-2 tracking-widest">ACHIEVEMENTS</p>
                </NavLinker>
                <NavLinker
                  to="/events"
                  className={(isActive) =>
                    "text-base text-primary-0 py-2 flex" +
                    (!isActive ? " hover:brightness-90" : " font-extrabold")
                  }
                >
                  <p className="-mx-2 tracking-widest">OUR EVENT</p>
                </NavLinker>
                <NavLinker
                  to="/news"
                  className={(isActive) =>
                    "text-base text-primary-0 py-2 flex" +
                    (!isActive ? " hover:brightness-90" : " font-extrabold")
                  }
                >
                  <p className="-mx-2 tracking-widest">NEWS</p>
                </NavLinker>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
