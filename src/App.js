import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import {Routes, Route} from "react-router-dom"
import NavbarComponent from "./components/navbar"
import HomePage from "./pages/homePage";
import Blogs from "./pages/blogs"; 

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element = {<HomePage />}/>
        <Route path="/blogs" element = {<Blogs />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
