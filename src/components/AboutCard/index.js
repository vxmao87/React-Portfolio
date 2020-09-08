import React from "react";
import "./style.css";

function AboutCard() {
    return (
        <div className="aboutCard">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="page-header">
                            <h1 className="about-header">About Me</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <img className="img img-thumbnail" src={require("../../utils/images/DSC_0603.jpeg")} alt="Vinh Mao"></img>
                    </div>
                    <div className="col-md-6">
                        <p className="card-text-about">I was born and raised in Seattle, WA, and have lived here ever since. My hobbies include Sudoku puzzles, jogging, solving math problems, and creating bits of code for my own use and everyone elses!</p>
                        <p className="card-text-about">As a Mathematics graduate from the University of Washington Class of 2016, I got my start in coding by working with Java, LateX, Sage, MATLAB and R. From then on, I have developed a strong interest in the intricate ways of breaking up larger tasks into smaller ones, and making my code more accessible. Through the UW Coding Bootcamp, I have utilized HTML, CSS, JavaScript and many other languages and applications in my work while also developing a drive for algorithms.</p>
                        <p className="card-text-about">Algorithms are some of my favorite programs to code because they involve smaller components that can easily congregate into larger, more functional pieces of work! I believe that small successes can lead to larger ones in the future, and that is something I live by even when writing bits of code for a larger task.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutCard;