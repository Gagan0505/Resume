import React from "react";
import "./Projects.css";
// import "./ProjectBox/ProjectBox";
import ProjectBox from "./ProjectBox/ProjectBox";

export default function Projects() {
    const projectData = [
        {
            image: "https://media.istockphoto.com/vectors/abstract-blurred-colorful-background-vector-id1248542684?k=20&m=1248542684&s=612x612&w=0&h=1yKiRrtPhiqUJXS_yJDwMGVHVkYRk2pJX4PG3TT4ZYM=",
            title: "Ecom Website",
            sentences: [
                "Lorem ipsum jsia kgrwo fjlskeo jsfdflfj",
                "Lorem ipsum jsia kgrwo fjlskeo jsfdflfj",
                "Lorem ipsum jsia kgrwo fjlskeo jsfdflfj",
                "Lorem ipsum jsia kgrwo fjlskeo jsfdflfj",
                "Lorem ipsum jsia kgrwo fjlskeo jsfdflfj",
            ],
            link: "https://www.google.co.in/",

            
        },
        {
            image: "https://media.istockphoto.com/vectors/abstract-blurred-colorful-background-vector-id1248542684?k=20&m=1248542684&s=612x612&w=0&h=1yKiRrtPhiqUJXS_yJDwMGVHVkYRk2pJX4PG3TT4ZYM=",
            title: "Ecom Website",
            sentences: [
                "Lorem ipsum jsia kgrwo fjlskeo jsfdflfj",
                "Lorem ipsum jsia kgrwo fjlskeo jsfdflfj",
                "Lorem ipsum jsia kgrwo fjlskeo jsfdflfj",
                "Lorem ipsum jsia kgrwo fjlskeo jsfdflfj",
                "Lorem ipsum jsia kgrwo fjlskeo jsfdflfj",
            ],
            link: "https://www.google.co.in/",

            
        },
    ];
    return (
        <div>
            <p  className="projects_title">Projects</p>
            <div className="projects_box_container">
                {projectData.map((value, index) => (
                    <ProjectBox 
                    title={value.title}
                    image={value.image}
                    sentences={value.sentences}
                    link={value.link} />
                ))}
            </div>
        </div>
    );
}