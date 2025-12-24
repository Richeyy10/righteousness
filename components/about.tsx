'use client';
import Typewriter from 'typewriter-effect';
import Link from "next/link";
import { Button } from './ui/button';


export default function About() {
  return (
    <div className="flex-1 mt-6">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-white mb-6">Hi, I&apos;m Righteousness</h1>
      <div className="mt-2 bg-white/20 w-45 mx-auto flex items-center justify-center rounded-2xl text-center gap-3">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 animate-blink"></span>
        </span>
        Available for work</div>
      <p className="text-md text-justify text-white/70 mt-2 mb-3">
        I'm a passionate {" "}
        <span className="inline-block text-blue-500 relative">
          <Typewriter
            options={{
              strings: ['front-end', 'back-end', 'full stack'],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </span>
        {" "}developer with experience in building dynamic and responsive web applications. I love creating efficient and scalable solutions that provide great user experiences. <br />
      </p>
      <p className='text-md text-justify text-white/70'>
        My journey into programming began with a curiosity for problem-solving, which evolved into a career where I turn complex ideas into elegant, functional digital experiences.
      </p>
      <p className='text-md text-justify text-white/70 mb-3'>
        I work with {" "}
        <span className="inline-block text-blue-500 relative">
          <Typewriter
            options={{
              strings: ['Next.js', 'React', 'Node.js', 'Express', 'MongoDB'],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </span>
        {" "}combining modern front-end design with reliable back-end systems. I enjoy turning ideas into products that are clean, efficient, and impactful.
      </p>
      <p className='text-md text-justify text-white/70 mb-4'>
        While I love being immersed in the world of programming, I believe in a healthy work-life balance. When I step away from the keyboard, you&apos;ll often find me watching or playing football. It&apos;s my favorite way to unwind, stay active, and enjoy some healthy competition outside of the tech sphere. If you have an opportunity that matches my skills and interests, feel free to reach out.
      </p>
      <div className="mt-6 flex gap-8 justify-center">
        <Link href="#contact" className="w-full">
          <Button variant="outline" className="w-full bg-blue-600 font-semibold hover:bg-blue-700 transition rounded-2xl">
            Get in touch
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
        </Link>
        <Link href="/public/Righteousness-Ereola.pdf" download = "Righteousness-Ereola.pdf" className="w-full">
          <Button variant="outline" className="w-full font-semibold hover:bg-blue-700 transition rounded-2xl">
            Download CV
            <svg
              xmlns="www.w3.org"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </Button>
        </Link>
      </div>
    </div >
  )
}