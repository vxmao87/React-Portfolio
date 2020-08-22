import React from "react";
import "./style.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark justify-content-end">
            <a className="navbar-brand" href={process.env.PUBLIC_URL + "/"}>Vinh Mao</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href={process.env.PUBLIC_URL + "/"}>Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={process.env.PUBLIC_URL + "/about"}>About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={process.env.PUBLIC_URL + "/portfolio"}>Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={process.env.PUBLIC_URL + "/contact"}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;