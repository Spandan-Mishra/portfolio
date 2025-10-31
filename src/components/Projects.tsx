"use client";

import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

const categories = ["Full-Stack", "Web3", "Hackathons", "Machine Learning"];

const projects: Array<{
    title: string;
    description: string;
    category: string;
    technologies: string[];
    link: string;
}> = [
    // TODO: projects data to be filled here
]

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    console.log("Selected Category:", selectedCategory);

    const filteredProjects = selectedCategory && selectedCategory !== "All"
        ? projects.filter(project => project.category === selectedCategory)
        : projects;

    return (
        <div className="flex flex-col w-full items-center">
            <div className="text-xl mb-4">
                Projects
            </div>
            <ToggleGroup
                type="single"
                value={selectedCategory}
                onValueChange={(val) => {
                    if (!val) return;
                    setSelectedCategory(val);
                }}
                variant="outline"
                aria-label="Project categories"
            >
                <ToggleGroupItem value="All" aria-label="Projects">
                    All
                </ToggleGroupItem>
                {categories.map((category) => (
                    <ToggleGroupItem key={category} value={category} aria-label={category}>
                        {category}
                    </ToggleGroupItem>
                ))}
            </ToggleGroup>
            <div className="w-2/3 my-12 flex flex-col gap-6">
                {filteredProjects.length > 0 ?
                    filteredProjects.map((project, index) => (
                    <div className="border p-4 rounded-md" key={index}>
                        <div className="font-bold">
                            {project.title}
                        </div>
                            <div className="text-secondary my-2">
                                {project.description}
                            </div>
                            <div className="flex gap-2 flex-wrap my-2">
                                {project.technologies.map((tech, techIndex) => (
                                    <div key={techIndex} className="border px-2 py-1 rounded-md text-sm">
                                        {tech}
                                    </div>
                                ))}
                            </div>
                            <a href={project.link} target="_blank" className="text-primary underline">
                                View Project
                            </a>
                        </div>
                    ))
                    :
                    <div className="text-sm text-center text-secondary">
                        No {selectedCategory !== "All" ? selectedCategory : null} projects made yet. Still learning this technology!
                    </div>
                }
            </div>
        </div>
    )
}

export default Projects;