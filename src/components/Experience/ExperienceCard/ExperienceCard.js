import React from "react";
import "./ExperienceCard.css";

export default function ExperienceCard({
    companyName,
    designation,
    statements,
    iconImages,
}) {
    return (
        <div id="Experience" className="ex_card_container">
            <p className="ex_card_title">{companyName}</p>
            <p className="ex_card_subtitle">Designation: {designation}</p>

            {statements.map((value, index) => (
                <p className="ex_card_sentence"> {value} </p>
            ))}
            <p className="ex_card_tech">Tech Stack Used</p>
            <div className ="ex_card_icon_container">
                {iconImages.map((value, index) => (
                    <img src={value} />
                ))}
            </div>
        </div>
    );
}
