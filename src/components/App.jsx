import React from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Footer from "./Footer";


function App(){
    return (
        <div className="App">
            <Home />
            <About />
            <Portfolio />
            <Footer />
        </div>
    );
}

export default App