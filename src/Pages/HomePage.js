import React from "react";
import DrawerAppBar from "../components/Appbar/DrawerAppBar";
import About from "../components/AboutMe/About";
import Skills from "../components/Skills/Skills"
import Home from "../components/Hero/Home";
import Project from "../components/Projects/Project";
import Services from "../components/Services/Services";

function HomePage() {
  return (
    <>
      <DrawerAppBar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Services />
    </>
  );
}

export default HomePage;
