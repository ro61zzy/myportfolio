import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from './Pages/HomePage';
import Skills from "./components/Skills/Skills"
import Project from "./components/Projects/Project";
import DrawerAppBar from "./components/Appbar/DrawerAppBar";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <DrawerAppBar />
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Project />} /> */}


       
      </Routes>
     <HomePage />

     
    </div>
    </BrowserRouter>
  );
}

export default App;
