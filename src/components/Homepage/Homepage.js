import React from "react";
import "./Homepage.css";
import githubIcon from "../../images/githubIcon.png";
import linkedinIcon from "../../images/linkedin.jpg";


function Homepage() {
    return (
        <div className="homepage_container">
            <div className="homepage_left">
                <p className="homepage_left_h1">
                    <span className="red_color">Hi,</span> my name is
                </p>
                <p className="homepage_left_h2">Gagan Bindal</p>
                <p className="homepage_left_h3">
                    Student at <span className="red_color">Lovely Professional University</span>{" "}
                </p>
                <p className="homepage_left_description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                fringilla nec risus eu efficitur. Donec rhoncus nec ligula vel
                accumsan. Phasellus vitae congue nibh, vel aliquam neque. Aliquam eu
                suscipit lorem.{" "}
                </p>
                <div>
                    <a href="https://github.com/GSsssssssssss" target="_blank">
                        <img src={githubIcon}
                        alt ="githubIconimage"
                        className="homepage_logo" />
                    </a>
                    <a href="https://www.linkedin.com/in/gagan-bindal-2a6068199/" target="_blank">
                        <img src ={linkedinIcon}
                        alt ="LinkedinIcon"
                        className="homepage_logo"/>
                        
                    </a>
                </div>
                <a href = "mailto:gaganbindal2002@gmail.com">
                    <button className= "homepage_left_button">Get in Touch</button>
                </a>
            </div>
            <div className="homepage_right">
                <img src="https://cdn.dribbble.com/users/1233499/screenshots/3850691/web-development.gif" alt="GIF" />
            </div>
        </div>
    );
}

export default Homepage;