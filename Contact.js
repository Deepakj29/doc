import React from "react";
import {BsFacebook,BsGithub} from 'react-icons/bs';
import {SiGmail,SiInstagram} from 'react-icons/si';
import "../Styles/Contact.css";
function Contact ()
{
    return(
        <>
        
        <h2 className="hh">Contact Me</h2>
        <div className="box">    
        <div className="add">
            <h3>ADDRESS</h3>
            <p>No-1,Bank Colony,Madurai</p>
            <p>Mobile:09876543210</p>
        </div>
        <div className="social">
            <button><BsFacebook/></button>
            <button><BsGithub/></button>
            <button><SiGmail/></button>
            <button><SiInstagram/></button>
        </div>
        </div>
    
        </>
     )

}
export default Contact;