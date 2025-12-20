// app/projects/[id]/page.tsx
import { projects } from "@/assets/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/navbar";

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    // In Next.js 15, params is a Promise
    const { id } = await params;

    // Find the project that matches the ID in the URL
    const project = projects.find((p) => p.id === id);

    // If the project doesn't exist, show the 404 page
    if (!project) {
        notFound();
    }

    const date = new Date();
    const year = date.getFullYear();

    return (
        <>
            <main className="w-[330px] md:w-[800px] h-full md:h-screen mx-auto mt-7 bg-[#121212] rounded-2xl border border-white/20 shadow-2xl shadow-black text-white pt-7 pb-20 px-6">
                <div className="max-w-2xl md:max-w-4xl mx-auto">
                    <Link href="/" className="text-blue-400 hover:underline mb-8 inline-block">
                        ← Back to Portfolio
                    </Link>

                    <h1 className="text-5xl font-bold mb-6">{project.title}</h1>

                    <div className="relative h-[400px] w-full mb-10 rounded-2xl overflow-hidden border border-white/10">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="md:col-span-2">
                            <h2 className="text-2xl font-semibold mb-4">About the Project</h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                {project.description}
                            </p>

                            {/* You can add more detailed text here later */}
                            {/* <p className="text-gray-400 leading-relaxed">
                                This project was built to solve specific challenges in the industry...
                            </p> */}
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-3">
                                    Technologies Used
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} className="bg-blue-500/10 text-blue-400 border-none">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                        <FaExternalLinkAlt className="mr-2" /> Live Demo
                                    </Button>
                                </a>
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline" className="w-full">
                                        <FaGithub className="mr-2" /> View Source Code
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <div className="text-center mb-7 mt-7 md:fixed md:bottom-4 md:left-1/2 md:-translate-x-1/2 text-white/50 text-sm">
                © {year} Righteousness. All rights reserved.
            </div>
        </>
    );
}
