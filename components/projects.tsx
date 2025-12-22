import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { projects } from "@/assets/projects"

export default function Projects() {
    return (
        <>
            <h1 className="text-3xl md:text-5xl font-bold text-center text-white mt-15">My Projects</h1>
            <p className="text-md text-center text-white/70 mt-2 mb-3">Some of the projects I've worked on.</p>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
                {projects.map((project) => (
                    <Card key={project.id} className="bg-white/5 border-white/10 overflow-hidden flex flex-col hover:border-blue-500/50 transition-all">
                        {/* Project Image */}
                        <div className="relative h-48 w-[80%] mx-auto hover:scale-110">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover rounded-xl"
                            />
                        </div>

                        <CardHeader>
                            <CardTitle className="text-white">{project.title}</CardTitle>
                            {/* Tags/Stack */}
                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary" className="bg-blue-500/10 text-blue-400 border-none">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </CardHeader>

                        <CardContent className="flex-grow text-gray-400 text-sm">
                            <p>{project.description}</p>
                        </CardContent>

                        <CardFooter className="flex justify-between gap-4">
                            <Link href={`/${project.id}`} className="w-full">
                                <Button variant="outline" className="text-white w-full rounded-2xl">View Details</Button>
                            </Link>
                            <div className="flex gap-2">
                                <a href={project.githubLink} target="_blank"><Button size="icon" variant="ghost"><FaGithub /></Button></a>
                                <a href={project.liveLink} target="_blank"><Button size="icon" variant="ghost"><FaExternalLinkAlt /></Button></a>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </section>
        </>
    )
}