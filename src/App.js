import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import {Routes, Route} from "react-router-dom"
import NavbarComponent from "./components/navbar"
import HomePage from "./pages/homePage";
import Blogs from "./pages/blogs"; 
import Projects from "./pages/projects";
import Contact from "./pages/contact";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element = {<HomePage />}/>
        <Route path="/blogs" element = {<Blogs />}/>
        <Route path="/projects" element = {<Projects />}/>
        <Route path="/contact" element = {<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
