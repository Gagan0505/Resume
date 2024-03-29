import React from "react";
import "./ProjectBox.css";

export default function ProjectBox({image, title, sentences, link}) {
    //console.log(sentences);

    return (
        <div className="project_box_container">
            <div className="project_box_image_container">
                <img src={image} alt="ProjectImage" />

            </div>
            <div className="project_box_desc_container">
                <p className="project_box_title">{title}</p>
                <div className="project_box_sentences_container">
                    {sentences.map((value, index) => (
                        <p>{value}</p>
                    ))}
                </div>
                <p className="project_box_link">
                    <span> Link: </span>
                    <a href={link} target="_blank">
                        {link}
                    </a>
                </p>
            </div>
        </div>
    );
}