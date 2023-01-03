import React from "react";
import "./Home.css";

function Home() {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <div className="home" id="Home">
      <div className="home_bg">
        <div className="header a_shift align_items_center pxy_30">
    
          <div className="navigation pxy_30">
            <ul className="navbar a_shift">
              <a href="#Home">
                <li className="nav_items mx_15">Home</li>
              </a>
              <a href="#About">
                <li className="nav_items mx_15">About</li>
              </a>
              <a href="#Portfolio">
                <li className="nav_items mx_15">Portfolio</li>
              </a>
            </ul>
          </div>
          
          
        </div>
        {/* HOME CONTENT */}
        <div className="macro">
          <div className="home_content">
            <div className="home_">
              {/*<h1 className="home_txt pz_10">WELCOME TO MY WORLD</h1>*/}
              <h2 className="home_txt pz_10">Hi, I’m Tyler Quinn</h2>
              <h3 className="home_txt sweet pz_10">Web Developer / Software Engineer</h3>
              <h4 className="home_txt pz_10">based in Chicago, IL.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;