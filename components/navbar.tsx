"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const scrollContainer = document.getElementById("main-scroll-container");
    if (!scrollContainer) return;

    // 1. Intersection Observer for standard scrolling
    const observerOptions = {
      root: scrollContainer,
      rootMargin: "0px 0px -80% 0px", // Detects when section enters top 20%
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const ids = ["about", "skills", "experience", "projects", "contact"];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // 2. Scroll Listener for "Bottom of Box" detection
    // This handles the case where 'Contact' can't reach the top detection line
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
      // If we are within 20px of the bottom
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        setActiveSection("contact");
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed md:top-8 md:left-1/2 md:-translate-x-1/2 bottom-4 left-1/2 -translate-x-1/2 w-[90%]  sm:w-fit h-16 flex items-center justify-center rounded-4xl z-50 bg-black backdrop-blur-md border border-white/20 sm:px-8">
      {["about", "skills", "experience", "projects", "contact"].map((id) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className={`capitalize px-4 transition-all text-[8px] md:text-md duration-300 font-semibold ${
            activeSection === id ? "bg-[#121212] p-1 rounded-2xl scale-110" : "text-white/50"
          }`}
        >
          {id}
        </button>
      ))}
    </nav>
  );
}
