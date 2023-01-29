import { Yummy } from "component/Yummy";
import { Login } from "component/Login";
import { Route, Routes } from "react-router";
import { Home } from "pages/home";
import { About } from "pages/about";
import { StarwarsPeople } from "pages/StarwarsPeople";
import { Starwars } from "pages/Starwars";

export const WebsiteRouting = () => {
  return (
    <Routes>
      <Route path="/yummy" element={<Yummy />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/starwars/:peopleId" element={<StarwarsPeople />} />
      <Route path="/starwars" element={<Starwars />} />
    </Routes>
  );
};
