import React from "react";
import Navbar from "./nav";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import port from "./image/port.png";
import logo from "./image/logo.jpg";
 import About from "./About";
 import Contact from "./Contact";
import "./home.css";


const Home = () => {
    return(
        
        <div>
             <Navbar/> 
            <img src={port} className="float-right" id="logo" ></img>
            <div className="name">
            <h1><em>I'm Hariharan </em></h1>
            <h1><em>Frontend Developer</em></h1>
            <h5>A Creative Web builder</h5>
        </div>

        <div >
        <img src={logo} className="float-right" id="logo2" ></img>
        </div>
        <hr className="new1"></hr>
         
         <div className="para">
        <p> Hi, Just wanted to reach out and say hello!
        It's always great to connect with like-minded professionals in the field.
        Let me know if you have any questions about development or anything else, 
        it'd be my pleasure to help out! Have a good day!</p></div>

         <About/>
         <br/>
         <br/>
        <Contact/>

        </div>

            





      
    )
}

export default Home;