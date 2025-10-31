import { Button } from "./ui/button";

const skills = ["TypeScript", "React", "Next.js", "Node.js", "Python", "PostgreSQL", "Competitive Programming"];

const Skills = () => {
    return (
        <div className="flex flex-col w-full items-center">
            <div className="text-3xl mt-6">
                Skills
            </div>
            <div className="flex flex-wrap justify-center w-2/3 my-12">
                {skills.map((skill, index) => (
                    <Button key={index} className="mx-1.5 p-2" size="xs">
                        {skill}
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default Skills;
