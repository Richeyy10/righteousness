"use client";
import {
    SiNextdotjs,
    SiReact,
    SiTypescript,
    SiTailwindcss,
    SiFramer,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiMongodb,
    SiNodedotjs,
    SiExpress,
    SiFirebase,
    SiMysql,
    SiVercel,
    SiPostgresql,
    SiPostman
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export default function Skills() {
    const skills = [
        { name: "HTML", icon: <SiHtml5 className="text-white/50 hover:text-[#E34C26]" /> },
        { name: "CSS", icon: <SiCss3 className="text-white/50 hover:text-[#663399]" /> },
        { name: "Javascript", icon: <SiJavascript className="text-white/50 hover:text-[#F7DF1E]" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-white/50 hover:text-[#3178C6]" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-white/50 hover:text-[#38B2AC]" /> },
        { name: "React", icon: <SiReact className="text-white/50 hover:text-[#61DAFB]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white/50 hover:text-black" /> },
        { name: "Node", icon: <SiNodedotjs className="text-white/50 hover:text-[#339933]" /> },
        { name: "Express", icon: <SiExpress className="text-white/50 hover:text-white" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-white/50 hover:text-[#47A248]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-white/50 hover:text-[#4169E1]" /> },
        { name: "MySQL", icon: <SiMysql className="text-white/50 hover:text-[#4479A1]" /> },
        { name: "Framer", icon: <SiFramer className="text-white/50 hover:text-[#0055FF]" /> },
        { name: "GitHub", icon: <FaGithub className="text-white/50 hover:text-[#000000]" /> },
        { name: "Firebase", icon: <SiFirebase className="text-white/50 hover:text-[#FFCA28]" /> },
        { name: "Vercel", icon: <SiVercel className="text-white/50 hover:text-[#000000]" /> },
        { name: "Postman", icon: <SiPostman className="text-white/50 hover:text-[#FF6C37]" /> },
    ];

    return (
        <>
            <h1 className="text-3xl md:text-5xl font-bold text-center text-white mt-15">My Tech Stack</h1>
            <div className="w-full inline-flex flex-nowrap whitespace-nowrap overflow-hidden py-10">
                <div className="flex w-max flex-nowrap animate-infinite-scroll hover:[animation-play-state:paused]">
                    {[...skills, ...skills].map((skill, index) => (
                        <div
                            key={index}
                            className="group relative flex items-center justify-center mx-12 cursor-pointer"
                        >
                            <span className="text-5xl transition-transform duration-300 group-hover:scale-110">
                                {skill.icon}
                            </span>
                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm font-bold text-white whitespace-nowrap bg-black/80 px-2 py-1 rounded shadow-xl border border-white/10 pointer-events-none">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
