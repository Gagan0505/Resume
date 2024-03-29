import React from "react";
import "./TechStackIconContainer.css";

export default function TechStackIconContainer({name, image, altProperty}) {
    return (
        <div id="TechStack" className="techstack_icons">
                <img src={image} alt={altProperty} />
                <p> {name}</p>

        </div>
    );
}