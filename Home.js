import React from "react";
import "../Styles/Home.css";
import { BsArrowDownSquare } from 'react-icons/bs';
import Projects from "./Projects";
import Skillset from "./Skillset";
import About from "./About";
import Contact from "./Contact";
import html from '../image/html.svg';
import css from '../image/css.svg';
import bs from '../image/bs.svg';
import javascript from '../image/jsl.svg';
import react from '../image/react.svg';
import node from '../image/node.svg';
import mongodp from '../image/mongodb.svg';
import exp from '../image/express.svg';

function Home() {
    return (
        <>
            <div className="home">

                <div className="about">
                    <p className="hp">DEEPAK J</p>
                    <p>Hello! Everyone,I am a Web Developer</p>
                    <div className="about-bt">
                        <button className="bt"> <BsArrowDownSquare /> Download Resume </button>
                        <button className="btt">Contact Me</button>
                    </div>
                </div>
                <div className="skills">
                    <div> <h3>My Skills</h3></div>
                    <div className="part">
                        <div className="front">
                            <img src={html} alt=""></img>
                            <img src={css} alt=""></img>
                            <img src={bs} alt=""></img>
                            <img src={javascript} alt=""></img>
                            <img src={react} alt=""></img>

                        </div>
                        <div className="back">
                            <img src={node} alt=""></img>
                            <img src={mongodp} alt=""></img>
                            <img src={exp} alt=""></img>
                        </div>
                    </div>
                </div>


            </div>
            <div>
                <About />
                <Projects />
                <Skillset />
                <Contact/>
            </div>
        </>
    )
}
export default Home;