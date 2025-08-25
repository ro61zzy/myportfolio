"use client";

import { useEffect, useState } from "react";
import { skills } from "@/lib/skills";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

declare global {
  interface Window {
    gsap?: typeof gsap;
    ScrollTrigger?: typeof ScrollTrigger;
  }
}

export default function Skills() {
  const [gsapLoaded, setGsapLoaded] = useState(false);

  useEffect(() => {
    const loadScripts = () => {
      if (!window.gsap) {
        const script1 = document.createElement("script");
        script1.src =
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
        document.head.appendChild(script1);

        const script2 = document.createElement("script");
        script2.src =
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js";
        document.head.appendChild(script2);

        script2.onload = () => setGsapLoaded(true);
      } else {
        setGsapLoaded(true);
      }
    };

    loadScripts();
  }, []);

  useEffect(() => {
    if (gsapLoaded) {
      window.gsap?.registerPlugin(window.ScrollTrigger!);
      window.gsap?.from(".skill-item", {
        scrollTrigger: {
          trigger: "#Skills",
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      });
    }
  }, [gsapLoaded]);

  return (
    <section id="Skills" className="relative py-20 px-4 md:px-12">
      <div>
        <h2 className="text-4xl sm:text-5xl font-playfair">My Skills</h2>
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4 mt-8">
        {skills.map((skill, index) => (
          <div
            key={`skill-${index}`}
            className="skill-item inline-flex items-center 
             bg-gray-100 dark:bg-gray-800 
             text-gray-800 dark:text-white 
             rounded-md px-4 py-2 border 
             border-gray-300 dark:border-gray-700 
             shadow-md transition-transform duration-300 
             hover:scale-110 cursor-pointer justify-center gap-2"
          >
            <Image
              src={skill.iconUrl}
              alt={skill.name}
              width={32}
              height={28}
              className="w-8 h-7"
            />
            <span className="text-sm font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
