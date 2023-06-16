import React from "react";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import ComicList from "./ComicList";
import { Informacion, Imagen } from "./Inicio";
import CreateComics from "./CreateComic";
import Login from "./Login";
import Search from "./Search";
import Openai from "./openai";

const Home = () => {
  return (
    <>
      <Informacion />
      <ComicList />
    </>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <Imagen />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateComics />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/openai" element={<Openai />} />
      </Routes>
    </div>
  );
};
export default App;
