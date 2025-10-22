import { InstagramLogoIcon } from "@radix-ui/react-icons"

const experiences = [
    {
        icon: <img src="/GSoC-icon.svg" width={60} height={60}></img>,
        position: "Open Source Contributor",
        company: "Google Summer of Code",
        duration: "May 2025 - September 2025"
    }
]

const Experience = () => {
    return (
        <div className="flex flex-col w-full items-center">
            <div className="text-5xl mt-6">
                Work Experience
            </div>
            <div className="w-2/3 my-12">
                {experiences.map((item, index) => (
                    <div className="flex justify-between p-2 rounded-md" key={index}>
                        <div className="flex gap-4 items-center">
                            {item.icon}
                            <div className="flex flex-col">
                                <p className="font-bold text-lg">{item.company}</p>
                                <p className="text-secondary">{item.position}</p>
                            </div>
                        </div>
                        <div className="text-secondary flex items-center">
                            {item.duration}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience