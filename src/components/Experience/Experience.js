import React from "react";
import "./Experience.css";
import html from "../../images/html.png";
import javascript from "../../images/js.png"

import ExperienceCard from "./ExperienceCard/ExperienceCard";

export default function Experience() {
    const statements = [
        "1. abcads fkjewo ndfwp ndfdlfdk ",
        "2. dfnsakldfsllf ",
        "3. skdnfl njkgwp w lkffjwo ",
        "4. sakfldjoewksnirer jis ",
        "5. kjfwpoejlnjsfwie mwmero triewrwjjs f ",
        "6. jfsfwefkwekfjpopolll",
       
    ];
    const iconImages = [html,javascript];

    return (
        <div className="experience_container">
            <p className="experience_title">Experience</p>
            <div className="experience_card_container">
                <ExperienceCard
                companyName="NA"
                designation="NA"
                statements = {statements}
                iconImages={iconImages} />
                  {/* <ExperienceCard
                companyName="NA"
                designation="NA"
                statements={statements}
                iconImages={iconImages} />
                  <ExperienceCard
                companyName="NA"
                designation="NA"
                statements={statements}
                iconImages={iconImages} /> */}

            </div>
        </div>
    )
}