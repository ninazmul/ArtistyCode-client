import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-purple-900 border-b-2 border-purple-900 lg:border-purple-700 lg:text-purple-700 gradient-text transition cursor-pointer text-xl font-bold"
          : "text-xl font-bold"
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
