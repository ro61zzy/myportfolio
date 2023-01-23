import React from "react";
import DrawerAppBar from "../components/Appbar/DrawerAppBar";
import About from "../components/AboutMe/About";
import Skills from "../components/Skills/Skills"
import Home from "../components/Hero/Home";

function HomePage() {
  return (
    <>
      <DrawerAppBar />
      <Home />
      <About />
      <Skills />
    </>
  );
}

export default HomePage;
