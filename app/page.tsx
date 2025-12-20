import Navbar from "@/components/navbar";
import Info from "@/components/info";
import About from "@/components/about";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Projects from "@/components/projects";

export default function Home() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <div className="md:w-[90%] md:mx-auto">
        <Navbar />
        {/* Mobile: flex-col, 95% width | Desktop: flex-row, 80% width */}
        <main className="flex flex-col md:flex-row w-full md:w-[80%] md:mt-10 mx-auto gap-8 items-center md:items-start">

          {/* Info Section: 90% wide on mobile, auto on desktop */}
          <div className="w-[90%] md:w-auto">
            <Info />
          </div>

          {/* Scrollable Div: 90% wide on mobile, 800px on desktop */}
          <div
            id="main-scroll-container"
            className="w-[90%] md:w-[800px] h-[500px] md:h-[580px] mt-5 mb-10 md:mb-0 md:mt-32 bg-[#121212] rounded-2xl overflow-y-auto overscroll-contain p-6 md:p-8 border border-white/20 shadow-2xl shadow-black"
          >
            <section id="about" className="scroll-mt-4"><About /></section>
            <section id="skills" className="scroll-mt-4"><Skills /></section>
            <section id="experience" className="scroll-mt-4"><Experience /></section>
            <section id="projects" className="scroll-mt-4"><Projects /></section>
            <section id="contact" className="scroll-mt-4 mb-20"><Contact /></section>
          </div>
        </main>

        {/* Hide standard footer on mobile to keep bottom navbar clear */}
        <div className="text-center mb-25 md:mb-0 md:fixed md:bottom-4 md:left-1/2 md:-translate-x-1/2 text-white/50 text-sm">
          © {year} Righteousness. All rights reserved.
        </div>
      </div>
    </>
  )
}