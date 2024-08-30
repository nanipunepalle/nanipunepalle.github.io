import React from "react";
import { ProjectsModel } from "@/data/model/DataModel";
import Image from "next/image"

interface ProjectsProps {
    projects: ProjectsModel[]
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
    return (
        <div id="projects">
            <h4 className="text-primary">{"<>Projects</>"}</h4>
            <div>
                <div className="row" data-masonry='{"percentPosition": true }'>
                    {
                        projects.map(val => {
                            return <div key={val.id} className="col-md-6 mb-2">
                                <div className="card">
                                    {
                                        val.Picture && <Image unoptimized src={val.Picture} height="200" width="300" className="card-img-top" alt="project-picture"></Image>
                                    }
                                    <div className="card-body">
                                        <h5 className="card-title">{val.Name}</h5>
                                        <p className="card-text">{val.Description}</p>
                                        <div className="d-flex justify-content-between pt-2">
                                            <a href={val.LearnMoreUrl} className="btn btn-sm btn-outline-primary">Learn More</a>
                                            <a href={val.VisitUrl} className="btn btn-sm btn-link text-secondary">{"Visit ->"}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}