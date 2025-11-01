import dayjs from "dayjs"

const experiences = [
    {
        icon: <img src="/GSoC-icon.svg" width={60} height={60}></img>,
        position: "Open Source Contributor",
        company: "Google Summer of Code",
        from: "2025-05",
        to: "2025-09",
    }
]

const Experience = () => {
    return (
        <div className="flex flex-col w-full items-center my-4">
            <div className="text-3xl font-bold">
                Work Experience
            </div>
            <div className="w-2/3 my-4">
                {experiences.map((item, index) => (
                    <div className="flex justify-between p-2 rounded-md" key={index}>
                        <div className="flex gap-4 items-center">
                            {item.icon}
                            <div className="flex flex-col">
                                <p className="font-bold text-md">{item.company}</p>
                                <p className="text-secondary text-sm">{item.position}</p>
                            </div>
                        </div>
                        <div className="text-secondary flex items-center text-sm">
                            {dayjs(item.to).isBefore(dayjs())
                                ? `${dayjs(item.from).format('MMMM YYYY')} - ${dayjs(item.to).format('MMMM YYYY')}`
                                : 'Present'
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience