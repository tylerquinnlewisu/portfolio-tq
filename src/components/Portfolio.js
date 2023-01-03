import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio component_space" id="Portfolio">

      <div className="heading">
        <h1 className="heading">My Portfolio</h1>
        <br />
        <p className="heading p_color">
          A selection of my personal web projects are displayed in the gallery below.
        </p>
      </div>

      <div className="macro">


        <div className="row">


          <a className="col_3" href="https://mango-ground-0c9924810.1.azurestaticapps.net/">
            <div className="portfolio_set target">
              <div className="item">
              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-house-heart-fill" viewBox="0 0 16 16">
                <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.707L8 2.207 1.354 8.853a.5.5 0 1 1-.708-.707L7.293 1.5Z"/>
                <path d="m14 9.293-6-6-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9.293Zm-6-.811c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018Z"/>
              </svg>
              </div>
              <div className="portfolio_">
                <h1 className="portfolio_txt">Fairmount Community Partnership Program</h1>
                <p className="p portfolio_txt p_color">
                Collaborated with teammates in
                </p>
                <p className="p portfolio_txt p_color">
                  building out the website for a
                </p>
                <p className="p portfolio_txt p_color">capstone class community partnership program.</p>
              </div>
            </div>
          </a>


          <a className="col_3" href="https://todolist-tq.azurewebsites.net/">
            <div className="portfolio_set target">
              <div className="item">
              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16">
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
              </svg>
              </div>
              <div className="portfolio_">
                <h1 className="portfolio_txt">To-Do List</h1>
                <p className="p portfolio_txt p_color">
                Developed a responsive to do list 
                </p>
                <p className="p portfolio_txt p_color">
                  web application that enables users
                </p>
                <p className="p portfolio_txt p_color">to create, delete, and manage a list of custom tasks.</p>
              </div>
            </div>
          </a>


          <a className="col_3" href="https://webdevquiz.azurewebsites.net/">
            <div className="portfolio_set target">
              <div className="item">
              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-lightbulb" viewBox="0 0 16 16">
                <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/>
              </svg>
              </div>
              <div className="portfolio_">
                <h1 className="portfolio_txt">Web Development Quiz</h1>
                <p className="p portfolio_txt p_color">
                  Created a responsive online application
                </p>
                <p className="p portfolio_txt p_color">
                  that enables users to complete quizzes on
                </p>
                <p className="p portfolio_txt p_color">a variety of web development concepts.</p>
              </div>
            </div>
          </a>



          <a className="col_3" href="https://white-river-0b0e39010.azurestaticapps.net/">
            <div className="portfolio_set target">
              <div className="item">
              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-globe-americas" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"/>
              </svg>
              </div>
              <div className="portfolio_">
                <h1 className="portfolio_txt">Map Mania Game</h1>
                <p className="p portfolio_txt p_color">
                  Made an interactive game which asks a user
                </p>
                <p className="p portfolio_txt p_color">
                  to use pan and zoom functionality to
                </p>
                <p className="p portfolio_txt p_color">guess a series of favorite places from a Google Maps interface.</p>
                <br />
              </div>
            </div>
            <br />
          </a>




          <a className="col_3" href="https://randomquotetq.azurewebsites.net/">
            <div className="portfolio_set target">
              <div className="item">
              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
              </svg>
              </div>
              <div className="portfolio_">
                <h1 className="portfolio_txt">Random Quote Generator</h1>
                <p className="p portfolio_txt p_color">
                  Built and deployed a site which fetches and
                </p>
                <p className="p portfolio_txt p_color">
                  displays a random quote from the API Quotes
                </p>
                <p className="p portfolio_txt p_color"> whenever a button is clicked.</p>
              </div>
            </div>
          </a>



          
        </div>



      </div>
    </div>
  );
}

export default Portfolio;