import { NavLink } from "react-router-dom";
import styles from "./index.module.css";

const CustomisedNavbar = ({ to, text }) => {
  return (
    <NavLink
      className={({ isActive }) => {
        if (isActive) {
          return styles.activated;
        }
      }}
      to={to}
    >
      {text}
    </NavLink>
  );
};

export const Navbar = ({}) => {
  return (
    <>
      <nav>
        <CustomisedNavbar to="/" text="Home" />
        <CustomisedNavbar to="/about" text="About" />
        <CustomisedNavbar to="/contact" text="Contact" />
      </nav>
    </>
  );
};
