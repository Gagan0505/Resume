import React, { useEffect, useState } from "react";
import "./navbar.css";
import NavOptions from "../Navoptions/navoptions"

import {NAV_TEXT} from '../../constants/constant';
function Navbar() {
    var name = "<GB/>";
    const [show, handleShow] =useState(false);

    const transitionNavBar = (() => {
        if(window.scrollY > 100)
        {
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    })
    useEffect(()=> {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar)
    }, []);

    const scroll =(id) => {
        document.getElementById(id).scrollIntoView();
    }
    return (
        <div className={`nav ${show && "nav_white"}`}>
            <div className="navbar_left">
                {name}</div>
            <div className="navbar_right">
                <NavOptions title={NAV_TEXT.ABOUT} />
                <NavOptions title={NAV_TEXT.TECHSTACK} onClick={() => scroll('TechStack')}/>
                <NavOptions title={NAV_TEXT.PROJECTS} onClick={() => scroll('Projects')} />
                <NavOptions title={NAV_TEXT.EXPERIENCE} onClick={()=> scroll('Experience')}/>
            {/* <p>About</p>
            <p>TechStack</p>
            <p>Experience</p>
            <p>Projects</p>
            <p>Resume</p> */}
            </div>
        </div>
    );
}

export default Navbar;