
const education = [
    {
        icon: <img src="/NIT_Rourkela.svg" width={60} height={60}></img>,
        institution: "National Institute of Technology, Rourkela",
        duration: "August 2023 - June 2027"
    }
]

const Education = () => {
    return (
        <div className="flex flex-col w-full items-center">
            <div className="text-3xl mt-6">
                Education
            </div>
            <div className="w-2/3 my-12">
                {education.map((item, index) => (
                    <div className="flex justify-between p-2 rounded-md" key={index}>
                        <div className="flex gap-4 items-center">
                            {item.icon}
                            <div className="flex flex-col">
                                <p className="font-bold text-md">{item.institution}</p>
                            </div>
                        </div>
                        <div className="text-secondary flex items-center text-sm">
                            {item.duration}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Education
