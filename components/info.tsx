"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa"; // Install react-icons
import righteousness from "@/assets/righteousness.jpg";

export default function Info() {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div className="w-full md:w-[300px] md:h-[580px] bg-[#121212] rounded-2xl mt-10 md:mt-32 flex justify-center border border-white/20 shadow-2xl shadow-black">
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="md:hidden absolute top-4 right-4 z-10 text-white/50 hover:text-white transition-colors"
            >
                <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                    <FaChevronDown size={20} />
                </motion.div>
            </button>
            <div className="flex flex-col w-full items-center mt-7 mb-5 md:mt-32">
                <div className="flex md:flex-col w-full items-center justify-center gap-3">
                    <div className="w-[100px] h-[100px] rounded-full">
                        <Image src={righteousness} alt="Righteousness" className="border border-3 border-blue-800 rounded-full w-full h-full object-cover" />
                    </div>
                    <div className="flex-col">
                        <h1 className="text-xl md:text-2xl font-bold text-center text-white w-full mt-4">Righteousness Ereola</h1>
                        <div className="mt-2 w-45 mx-auto flex items-center justify-center bg-white/20 rounded-2xl px-2 text-center">
                            <p className="text-sm">Full Stack Developer</p>
                        </div>
                    </div>
                </div>
                <div className={`${isExpanded ? "block" : "hidden"} md:block`}>
                    <AnimatePresence>
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            className="flex flex-col items-center pb-8"
                        >
                            <hr className="w-[80%] border-white/10 mb-6" />
                            <div className="flex items-center gap-2 text-white/80 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-blue-500">
                                    <path d="M21 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 1 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                <span className="text-sm">Ibadan, Nigeria</span>
                            </div>
                            <div className="flex space-x-5 text-white/50">
                                <a href="https://github.com/Richeyy10" target="_blank" rel="noopener noreferrer"  className="hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.41 7.86 10.94.57.1.78-.25.78-.55v-2.02c-3.2.7-3.88-1.38-3.88-1.38-.53-1.33-1.3-1.68-1.3-1.68-1.06-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.73 1.26 3.4.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.27-5.23-5.66 0-1.25.45-2.27 1.19-3.07-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.17a11.1 11.1 0 0 1 5.8 0c2.21-1.48 3.18-1.17 3.18-1.17.63 1.59.23 2.76.11 3.05.74.8 1.19 1.82 1.19 3.07 0 4.4-2.69 5.36-5.25 5.65.41.36.78 1.07.78 2.16v3.2c0 .3.21.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" /></svg>
                                </a>
                                <a href="https://www.linkedin.com/in/righteousness-ereola-726074205/" 
                                target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    <svg
                                        xmlns="www.w3.org"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        width="24"
                                        height="24"
                                        className="hover:text-[#0077B5] transition-colors"
                                    >
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                        <rect x="2" y="9" width="4" height="12" />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                </a>
                                <a href="https://x.com/righteouscodes" target="_blank" rel="noopener noreferrer"  className="hover:text-white transition-colors">
                                    <svg
                                        xmlns="www.w3.org"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        width="24"
                                        height="24"
                                        className="hover:text-white transition-colors"
                                    >
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                                    </svg>
                                </a>
                                <a href="mailto:thericheyy@gmail.com" target="_blank" rel="noopener noreferrer"  className="hover:text-white transition-colors">
                                    <svg
                                        xmlns="www.w3.org"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        width="24"
                                        height="24"
                                        className="hover:text-blue-400 transition-colors"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2" />
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}