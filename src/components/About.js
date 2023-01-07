import React from "react";
import "./About.css";
function About() {
  return (
    <div className="about component_space" id="About">
        <div className="macro">
            <div className="row">
                <div className="col_2">
                    <h1 className="about_heading">About Me</h1>
                    <div className="about_">
                        <p className="about_txt p_color">
                        Hello! My name is Tyler and I'm a web developer and/or software engineer with expertise in creating distinguished web applications.
                        </p>
                        <p className="about_txt p_color">
                        I served as an intern in June 2022 for the 
                        New York-based environmental nonprofit Life After Life. There, using React.js, 
                        JavaScript, HTML5, and CSS, I helped create and manage the front-end interface for 
                        a running company site. This process included adding new functionality while also 
                        enhancing and redesigning already-existing website components.
                        </p>
                        <p className="about_txt p_color">
                        Me and a handful of classmates participated in the Fairmount 
                        Community Partnership Program in October 2022, which aims to better the lives of 
                        Fairmount citizens through cooperation. I worked with colleagues to create a mock nonprofit website that 
                        accepts donations and makes use of authentication.
                        </p>
                        <p className="about_txt p_color">
                        I received a Computer Science degree from Lewis University in December 2022 with a concentration in Mobile Computing.
                        </p>
                        <p className="about_txt p_color">
                        I'm currently available for hire! I can be reached via phone <em className="sweet">+815-319-3054</em> or email <em className="sweet">tylerq810@gmail.com</em>
                        </p>
                        <a href="https://www.github.com/tylerquinnlewisu"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg></a>
                        <em>  </em>
                        <a href="https://www.github.com/tylerquinnlewisu"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg></a>
                        
                        <div className="about_button a_shift align_items_center">
                            {/*
                            <a href="javascript:void( window.open( 'https://form.jotform.com/230024697676160', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500' ) ) "><button className="about btn target">Let's get in touch</button></a>
                            */}
                            <a href='/TylerQuinn03.pdf' download><button className="about btn target">Download Resume</button></a>
                            
                        </div>
                        

                    </div>
                  
                </div>
            </div>
        </div>
        
    </div>
  );
}

export default About;