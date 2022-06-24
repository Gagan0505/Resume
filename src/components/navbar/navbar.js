import React from "react";
import "./navbar.css";

function Navbar() {
    var name = "<GB/>";

    return (
        <div className="navbar_container">
            <div className="navbar_left">{name}</div>
            <div className="navbar_right">
            <p>About</p>
            <p>TechStack</p>
            <p>Experience</p>
            <p>Projects</p>
            <p>Resume</p>
            </div>
        </div>
    );
}

export default Navbar;