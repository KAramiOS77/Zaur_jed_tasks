import { AlertContext } from "context/AlertContext";
import { ModeContext } from "context/ModeContext";
import { useContext } from "react";
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
  const [dark, setDark] = useContext(ModeContext);
  const showAlert = useContext(AlertContext);
  return (
    <>
      <nav>
        <CustomisedNavbar to="/" text="Home" />
        <CustomisedNavbar to="/about" text="About" />
        <CustomisedNavbar to="/yummy" text="Yummy" />
        <CustomisedNavbar to="/login" text="Login" />
        <CustomisedNavbar to="/starwars" text="Starwars" />
        <CustomisedNavbar to="/cat-facts" text="CatFacts" />
        <CustomisedNavbar to="/mui" text="Mui" />
        <button
          onClick={() => {
            setDark((pre) => !pre);
          }}
        >
          {dark ? "☀" : "🌙"}
        </button>

        <button
          onClick={() => {
            showAlert({
              message: "Salam meem canim gozum necesen",
              type: "success",
            });
          }}
        >
          Show Alert
        </button>
      </nav>
    </>
  );
};
