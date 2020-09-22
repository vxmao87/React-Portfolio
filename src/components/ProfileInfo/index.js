import React from "react";
import "./style.css";

function ProfileInfo() {
    return (
        <div className="profileContainer shadow-lg">
            <div className="container">
                <div className="media">
                    <img 
                        src="https://avatars1.githubusercontent.com/u/61126887?s=460&u=08b64f4263415f36c0a84e5f029677762e663f1b&v=4"
                        alt="Vinh Mao"
                        className="img-thumbnail center">
                    </img>
                </div>
                <div className="text-center">
                    <h2 className="fullName">Vinh Xiu Mao</h2>
                    <p className="link">University of Washington 2016 Graduate</p>
                    <p className="link">Full-Stack Web Developer</p>
                    <p className="profile-technologies">HTML, CSS, JavaScript, AJAX, jQuery, Web and Third-Party APIs, MySQL, MVC, Handlebars.js, MERN stack (MongoDB, Express, React, Node)</p>
                    <p className="link"><a href = "https://www.linkedin.com/in/vxmao87/" target="_blank" rel="noopener noreferrer">LinkedIn profile</a></p>
                    <p className="link"><a href = "https://github.com/vxmao87" target="_blank" rel="noopener noreferrer">GitHub profile</a></p>
                    <p className="link"><a href = "https://drive.google.com/file/d/1GVk7kjMREX2ZqTm4E6hVnNEDM1ZJOQMy/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></p>
                    <p className="link"><a href="mailto:vinhxmao87@gmail.com?Subject=Question" target="_top">Email</a></p>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;