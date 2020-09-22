import React from "react";
import ProjectCard from "../ProjectCard";
import "./style.css";
import betterEarth from "../../utils/images/better-earth.png";
import treehouse from "../../utils/images/treehouse-app.png";
import noteTaker from "../../utils/images/note-taker.png";
import burgerLog from "../../utils/images/burger-logger.png";
import weatherDash from "../../utils/images/weatherDashboard.png";
import tinylearn from "../../utils/images/tinylearn.png";
import budgetTrack from "../../utils/images/budget-tracker.png";
import employeeSummary from "../../utils/images/employee-summary-webpage.png";
import employeeDirectory from "../../utils/images/employee-directory.png";

function PortfolioAlbum() {
    return (
        <div className="album py-5 bg-light">
            <div className="row">
                <ProjectCard
                     title="Treehouse"
                     description="Group collaboration project: search for your favorite events and get artist info!"
                     src={treehouse}
                     alt="treehouse"
                     technologies="HTML, CSS, JavaScript, jQuery, AJAX"
                     appLink="https://gidmp.github.io/Treehouse/"
                     githubLink="https://github.com/gidmp/Treehouse"
                />
                <ProjectCard
                     title="tinylearn"
                     description="Group collaboration project: Learn about a random subject! No need to know what to search for!"
                     src={tinylearn}
                     alt="tinylearn"
                     technologies="HTML, CSS, MVC, Sequelize, Passport"
                     appLink="https://young-retreat-53983.herokuapp.com/"
                     githubLink="https://github.com/vxmao87/tinylearn"
                />
                <ProjectCard
                     title="Better Earth"
                     description="Group collaboration project: Find the best eco-friendly alternatives and calculate your carbon footprint!"
                     src={betterEarth}
                     alt="better earth"
                     technologies="HTML, CSS, JavaScript, React, MongoDB, Mongoose"
                     appLink="https://sheltered-sea-24671.herokuapp.com/"
                     githubLink="https://github.com/avaarm/project-3"
                />
                <ProjectCard
                     title="Employee Directory"
                     description="View up to 200 employees and their information! You can also search and sort by name!"
                     src={employeeDirectory}
                     alt="employee directory"
                     technologies="HTML, CSS, React, jQuery"
                     appLink="https://vxmao87.github.io/Employee-Directory/"
                     githubLink="https://github.com/vxmao87/Employee-Directory"
                />
                <ProjectCard
                     title="Employee Summary"
                     description="A Terminal-based app where you can create an easily readable webpage of your employees!"
                     src={employeeSummary}
                     alt="employee summary"
                     technologies="Node, JavaScript"
                     githubLink="https://github.com/vxmao87/employee-summary"
                />
                <ProjectCard
                     title="Burger Logger"
                     description="A simple application utilizing the MVC method of organizing code!"
                     src={burgerLog}
                     alt="burger logger"
                     technologies="HTML, CSS, JavaScript, Handlebars.js"
                     appLink="https://mysterious-coast-63282.herokuapp.com/"
                     githubLink="https://github.com/vxmao87/burger-logger"
                />
                <ProjectCard
                     title="Budget Tracker"
                     description="A budget-tracking app with the functionality to work both online and offline!"
                     src={budgetTrack}
                     alt="budget tracker"
                     technologies="HTML, CSS, manifests, service workers, Node"
                     appLink="https://still-savannah-20478.herokuapp.com/"
                     githubLink="https://github.com/vxmao87/Budget-Tracker-PWA"
                />
                <ProjectCard
                     title="Weather Dashboard"
                     description="Check the weather at any city before you head out for your next trip!"
                     src={weatherDash}
                     alt="weather dashboard"
                     technologies="HTML, CSS, APIs, AJAX"
                     appLink="https://vxmao87.github.io/weather-dashboard/"
                     githubLink="https://github.com/vxmao87/weather-dashboard"
                />
                <ProjectCard
                     title="Note Taker"
                     description="Keep track of all of your daily tasks!"
                     src={noteTaker}
                     alt="note taker"
                     technologies="HTML, CSS, Express, CRUD"
                     appLink="https://gentle-plateau-55280.herokuapp.com/"
                     githubLink="https://github.com/vxmao87/note-taker"
                />
            </div>
        </div>
    );
}

export default PortfolioAlbum;