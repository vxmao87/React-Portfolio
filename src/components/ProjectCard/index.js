import React from "react";
import "./style.css";

function ProjectCard(props) {
    return (
        <div className="col-md-4">
            <div className="card mb-4 box-shadow">
                <img 
                    className="card-img-top" 
                    data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                    alt={props.alt}
                    src={props.src}
                    data-holder-rendered="true"></img>
            <div className="card-body">
                <h5 className="project-name">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            {props.appLink ? (
                                <a className="btn btn-sm btn-outline-secondary" href={props.appLink}>App</a>  
                                ) : 
                                <div></div>}
                            <a className="btn btn-sm btn-outline-secondary" href={props.githubLink}>GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;