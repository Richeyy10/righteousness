"use client";
import { FaUserTie, FaLaptopCode, FaBriefcase } from "react-icons/fa";

const experiences = [
    {
        company: "Traceworka Company",
        role: "Full Stack Developer",
        period: "September 2025 - Present",
        description: "Building scalable web solutions and modern user interfaces.",
        icon: <FaBriefcase />,
        current: true,
    },
    {
        company: "Saltuns Digital Agency",
        role: "Intern Web Developer",
        period: "February 2024 - August 2024",
        description: "Assisted in developing client websites and learning industry best practices.",
        icon: <FaUserTie />,
        current: false,
    },
    {
        company: "Freelance",
        role: "Web Developer",
        period: "2021 - Present",
        description: "Delivering custom websites and digital solutions for various clients.",
        icon: <FaLaptopCode />,
        current: true,
    },
];

export default function Experience() {
    return (
        <>
            <h1 className="text-3xl md:text-5xl font-bold text-center text-white mt-15">My Experience</h1>
            <p className="text-md text-center text-white/70 mt-2 mb-3">Professional experience that I have accumulated over several years.</p>
            <div className="max-w-4xl mx-auto px-6 pt-10">
                <div className="relative border-l-2 border-gray-700 ml-3">
                    {experiences.map((exp, index) => (
                        <div key={index} className="mb-12 ml-8 relative">

                            <span className="absolute -left-[50px] flex items-center justify-center w-10 h-10 bg-gray-900 border-2 border-gray-700 rounded-full text-blue-500 shadow-xl z-10">
                                {exp.icon}
                            </span>

                            <div className="p-6 bg-white/5 shadow-3xl shadow-black border border-white/10 rounded-xl transition-all duration-300 group">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                        {exp.company}
                                    </h3>

                                    <div className="flex items-center gap-2">
                                        {exp.current && (
                                            <span className="relative flex h-2 w-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                            </span>
                                        )}
                                        <span className="text-sm font-mono text-gray-400">{exp.period}</span>
                                    </div>
                                </div>

                                <h4 className="text-blue-400 font-medium mb-3">{exp.role}</h4>
                                <p className="text-gray-400 leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}