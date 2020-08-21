import React from "react";
import ProjectCard from "../ProjectCard";

function PortfolioAlbum() {
    return (
        <div className="album py-5 bg-light">
            <div className="row">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    );
}

export default PortfolioAlbum;