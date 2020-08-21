import React from "react";
import "./style.css";

function AboutCard() {
    return (
        <section className="container" id="aboutCard">
            <div className="row">
                <div className="col-md-7">
                    <div className="page-header">
                        <h1>About Me</h1>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <img className="img img-thumbnail" src="../../../public/assets/images/DSC_0603.jpeg" alt="Vinh Mao"></img>
                </div>
                <div className="col-md-6">
                    <p className="card-text">Hey everyone! This is Vinh Mao, and I am pretty excited to introduce myself! I was born and raised in Seattle, WA, and have lived here ever since. I graduated from the University of Washington with a mathematics degree back in 2016, but before I went to Washington Middle School and Garfield High School. I enjoy running or jogging, Sudoku puzzles, video games (especially rhythm games), and scratchboard art during my free time. Walking around parks is something I enjoy doing as well, even if there is no end destination.</p>
                    <p>I speak from experience when I say that nothing is ever as bad as it seems, no matter how you think of it, and that is something I live by every day. No matter how pessimistic I may be or hopeless things feel, things really do get better and you’ll always be left wondering why you even spent so much time pondering over any situation. With that in mind, I look forward to spending time loving myself, while at the same time acknowledging that bad things happen and still weather through it.</p>
                </div>
            </div>
      </section>
    );
}

export default AboutCard;