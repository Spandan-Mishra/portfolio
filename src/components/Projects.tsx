"use client";

import { useState } from "react";

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
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    console.log("Selected Category:", selectedCategory);

    const filteredProjects = selectedCategory
        ? projects.filter(project => project.category === selectedCategory)
        : projects;

    return (
        <div className="flex flex-col w-full items-center">
            <div className="text-5xl mt-6">
                Projects
            </div>
            <div className="w-3/5 my-6 flex gap-4 justify-center">
                <div className="border p-2 rounded-md hover:bg-secondary cursor-pointer" onClick={() => setSelectedCategory(null)}>
                    All
                </div>
                {categories.map((category, index) => (
                    <div key={index} className="border p-2 rounded-md hover:bg-secondary cursor-pointer" onClick={() => setSelectedCategory(category)}>
                        {category}
                    </div>
                ))}
            </div>
            <div className="w-2/3 my-12 flex flex-col gap-6">
                {filteredProjects.length > 0 ?
                    filteredProjects.map((project, index) => (
                    <div className="border p-4 rounded-md" key={index}>
                        <div className="text-2xl font-bold">
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
                    <div className="text-center text-secondary">
                        No {selectedCategory} projects made yet. Still learning this technology!
                    </div>
                }
            </div>
        </div>
    )
}

export default Projects;