"use client";

import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import projects from "../data/projects";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const categories = ["Full-Stack", "Web3", "Hackathons", "Experimenting", "Machine Learning"];

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

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
                {filteredProjects.length !== 0 ?
                    filteredProjects.map((project, index) => (
                        <Card className="w-full hover:shadow-md transition-shadow" key={index}>
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <CardDescription className="w-5/6">{project.description}</CardDescription>
                                <CardAction>
                                    <a
                                        href={project.link}
                                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                    >
                                        View Project
                                    </a>
                                </CardAction>
                            </CardHeader>
                            <CardContent>
                                {project.technologies.map((tech, tIndex) => (
                                    <Button variant="outline" size="xs" className="mr-2" key={tIndex}>{tech}</Button>
                                ))}
                            </CardContent>
                        </Card>
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