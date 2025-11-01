import dayjs from 'dayjs';

const education = [
    {
        icon: <img src="/NIT_Rourkela.svg" width={60} height={60}></img>,
        institution: "National Institute of Technology, Rourkela",
        from: "2023-05",
        to: "2027-06"
    }
]

const Education = () => {

    return (
        <div className="flex flex-col w-full items-center my-4">
            <div className="text-3xl font-bold">
                Education
            </div>
            <div className="w-2/3 my-4">
                {education.map((item, index) => (
                    <div className="flex justify-between p-2 rounded-md" key={index}>
                        <div className="flex gap-4 items-center">
                            {item.icon}
                            <div className="flex flex-col">
                                <p className="font-bold text-md">{item.institution}</p>
                            </div>
                        </div>
                        <div className="text-secondary flex items-center text-sm">
                            { dayjs(item.to).isBefore(dayjs())
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

export default Education
