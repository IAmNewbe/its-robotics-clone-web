import { NavLink, useMatch } from "react-router-dom";

const NavLinker = ({ to, children }) => {
  const isActive = useMatch(to);

  return (
    <NavLink
      exact
      to={to}
      className={
        isActive
          ? "text-base text-primary-0 py-2 mx-8 flex font-extrabold"
          : "text-base text-primary-0 py-2 mx-8 flex hover:brightness-90"
      }
    >
      {children}
    </NavLink>
  );
};

export default NavLinker;
