import React from "react";
import code from "../image/code.svg";
import webdesign from "../image/webdesign.svg";
import webdevelop from "../image/webdevelop.svg";
import '../Styles/About.css';
function About() {
    return (
        <>
         
               <h2>About Me</h2>
               <div className="head">
                    <div className="itemc">
                        <h3>Programmer</h3>
                        <img src={code} alt="" ></img>
                        </div>
                    <div className="itemc">
                        <h3>Web Designer</h3>
                        <img src={webdesign} alt="" ></img>
                        </div>
                    <div className="itemc">
                        <h3>Web Developer</h3>
                        <img src={webdevelop} alt="" ></img>
                        </div>
               
            </div>
        </>
    )
}
export default About;