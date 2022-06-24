import React from "react";
import './Techstack.css';
import c from "../../images/c.png";
import cpp from "../../images/C++-Logo.png";
import html from "../../images/html.png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import python from "../../images/Python.png";
import sql from "../../images/sql.jpg";
import java from "../../images/java.png";
import TechStackIconContainer from  "./TechStackIconContainer/TechStackIconContainer";
import blank from "../../images/blank.jpg";
export default function Techstack() {
    const techstackData = [
        {
            iconName : "C",
            iconImage: c,
            iconAltProperty: "cImage",
        },
        {
            iconName: "C++",
            iconImage: cpp,
            iconAltProperty: "cppImage",    

        },
        {
            iconName: "HTML",
            iconImage: html,
            iconAltProperty: "htmlImage",    

        },
    ];
    const techstackData2 =[
        {
            iconName: "CSS",
            iconImage: css,
            iconAltProperty: "cssImage",    

        },

        {
            iconName: "JavaScript",
            iconImage: js,
            iconAltProperty: "jsImage",    

        },
        {
            iconName: "Python",
            iconImage: python,
            iconAltProperty: "pythonImage",    

        },
    ];
    const techstackData3 =[
        {
            iconName: "SQL",
            iconImage: sql,
            iconAltProperty: "sqlImage",  

        },
        {
            iconName: "Java",
            iconImage: java,
            iconAltProperty: "javaImage",  

        },
        {
            iconImage: blank,
        },
       
       
    ];
    return (
        <div className="techstak_container">
            <p className="techstack_title">Tech Stack</p>
            <div className="techstack_icon_container">
                {techstackData.map((item, index) => {
                    return (
                        <TechStackIconContainer
                        image={item.iconImage}
                        altProperty={item.iconAltProperty}
                        name={item.iconName} />
                    );
                })}
            </div>
            <div className="techstack_icon_container">
            {techstackData2.map((item, index) => {
                    return (
                        <TechStackIconContainer
                        image={item.iconImage}
                        altProperty={item.iconAltProperty}
                        name={item.iconName} />
                    );
                })}
            </div>
            <div className="techstack_icon_container">
            {techstackData3.map((item, index) => {
                    return (
                        <TechStackIconContainer
                        image={item.iconImage}
                        altProperty={item.iconAltProperty}
                        name={item.iconName} />
                    );
                })}
            </div>
        </div>
    );

}