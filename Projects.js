import React from "react";
import "../Styles/Projects.css";
import books from '../image/books.jpg';
import calculator from '../image/calculator.jpg';
import todo from '../image/todo.jpg';


function Projects() {
    return (
        <>
            <div className="headp">
                <div className="hdp"><h1>Projects</h1></div>
            <div className="project">
                <div className="card ">
                    <img src={books} alt="" ></img>
                    <div className='card-body'><h4>BOOK SEARCH APP</h4><p>Project description...</p></div>
                </div>
                <div className="card ">
                    <img src={todo} alt="imm"></img>
                    <div className='card-body'><h4>TODO APP</h4><p>Project description...</p></div>
                </div>
                <div className="card">
                    <img src={calculator} alt=""></img>
                    <div className='card-body'><h4>CALCULATOR APP</h4><p>Project description...</p></div>
                </div>


                <div className="card  ">
                    <img src={todo} alt=""></img>
                    <div className='card-body'><h4>TODO APP</h4><p>Project description...</p></div>
                </div>
                <div className="card  ">
                    <img src={calculator} alt=""></img>
                    <div className='card-body'><h4>CALCULATOR APP</h4><p>Project description...</p></div>
                </div>
                <div className="card">
                    <img src={books} alt=""></img>
                    <div className='card-body'><h4>BOOK SEARCH APP</h4><p>Project description...</p></div>
                </div>
            </div>
            </div>
        </>
    )
}
export default Projects;