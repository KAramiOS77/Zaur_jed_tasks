import { Yummy } from "component/Yummy";
import { Login } from "component/Login";
import { Route, Routes } from "react-router";
import { Home } from "pages/home";
import { About } from "pages/about";
import { StarwarsPeople } from "pages/StarwarsPeople";
import { Starwars } from "pages/Starwars";
import { StarwarsWithReducer } from "pages/StarwarsWithReducer";
import { CatBreeds } from "pages/CatBreeds";
import { CatFacts } from "pages/CatFacts";
import PostsRedux from "pages/PostsRedux";
import { Mui } from "pages/Mui";

export const WebsiteRouting = () => {
  return (
    <Routes>
      <Route path="/yummy" element={<Yummy />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/starwars/:peopleId" element={<StarwarsPeople />} />
      {/* <Route path="/starwars" element={<Starwars />} /> */}
      <Route path="/starwars-with-reducer" element={<StarwarsWithReducer />} />
      <Route path="/cats" element={<CatBreeds />} />
      <Route path="/cat-facts" element={<CatFacts />} />
      <Route path="/posts-redux" element={<PostsRedux />} />
      <Route path="/mui" element={<Mui />} />
    </Routes>
  );
};
