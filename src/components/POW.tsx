"use client";

import { useState } from "react";
import Projects from "./Projects";
import OpenSource from "./OpenSource";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

const POW = () => {
    const [selectedOption, setSelectedOption] = useState<string>("Projects");

    return (
        <div id="pow" className="flex flex-col w-full items-center gap-6 my-4">
            <div className="text-3xl font-bold">
                Proof of Work
            </div>
            <ToggleGroup
                type="single"
                value={selectedOption}
                onValueChange={(val) => {
                    if (!val) return;
                    setSelectedOption(val);
                }}
                variant="outline"
                aria-label="Proof of Work options"
            >
                <ToggleGroupItem value="Projects" aria-label="Projects">
                    Projects
                </ToggleGroupItem>
                <ToggleGroupItem value="OpenSource" aria-label="Open Source">
                    Open Source
                </ToggleGroupItem>
            </ToggleGroup>
            {selectedOption === "Projects"
                ? <Projects />
                : <OpenSource />
            }
        </div>
    )
}

export default POW;