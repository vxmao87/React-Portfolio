import React from "react";
import "./style.css";

function ProfileInfo() {
    return (
        <div className="container">
            <div className="media">
                <img 
                    src="https://avatars1.githubusercontent.com/u/61126887?s=460&u=08b64f4263415f36c0a84e5f029677762e663f1b&v=4"
                    alt="Vinh Mao"
                    className="img-thumbnail center">
                </img>
            </div>
            <div className="text-center">
                <h2>Vinh Xiu Mao</h2>
                <p className="link">Full-Stack Web Developer</p>
                <p className="link"><a href = "https://www.linkedin.com/in/vxmao87/">LinkedIn profile</a></p>
                <p className="link"><a href = "https://github.com/vxmao87">GitHub profile</a></p>
                <p className="link"><a href = "https://drive.google.com/file/d/1EEulbjOveLZ-Ko-riILZJApfo8PawJ8j/view?usp=sharing">Resume</a></p>
                <p className="link"><a href="mailto:vinhxmao87@gmail.com?Subject=Question" target="_top">Email</a></p>
            </div>
        </div>
    );
}

export default ProfileInfo;