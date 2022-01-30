import './App.css';
import React from "react";
import {BrowserRouter as Router, HashRouter, Route, Routes} from 'react-router-dom'

import Home from './myComponents/home/Home'
import Navbar from "./myComponents/home/Navbar";
import About from "./myComponents/about/About";
import Projects from "./myComponents/projects/Projects";

function App() {
    return (
        <HashRouter basename="/">
            <div className="hero">
                {/*<div className="navbarStyle">*/}
                    <Navbar/>
                {/*</div>*/}
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/projects/*" element={<Projects/>}/>
                    </Routes>
            </div>
        </HashRouter>
    );
}

export default App;
