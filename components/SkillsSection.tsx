"use client";

import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { skills } from "@/lib/skills";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  useEffect(() => {
    gsap.from(".skill-item", {
      scrollTrigger: {
        trigger: "#skills",
        start: "top 80%", // when 80% of section enters viewport
      },
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      id="skills"
      className="py-20 text-white font-sans overflow-hidden"
    >
      <div className="container mx-auto px-4 ">
        <h2 className="text-4xl sm:text-5xl font-playfair text-gray-400 mb-12">My Skills</h2>
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div
  key={`skill-${index}`}
  className="skill-item inline-flex items-center space-x-2 
             bg-gray-100 dark:bg-gray-800 
             text-gray-800 dark:text-white 
             rounded-full px-4 py-2 border 
             border-gray-300 dark:border-gray-700 
             shadow-md transition-transform duration-300 
             hover:scale-110 cursor-pointer"
>
  <img src={skill.iconUrl} alt={skill.name} className="w-8 h-8" />
  <span className="text-lg font-semibold">{skill.name}</span>
</div>

        ))}
      </div>
    </section>
  );
}

