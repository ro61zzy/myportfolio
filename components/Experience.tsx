"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experienceData } from "@/lib/experience";

gsap.registerPlugin(ScrollTrigger);

export default function Experiences() {
  useEffect(() => {
    // Animate each experience block on scroll
    gsap.from(".experience-item", {
      scrollTrigger: {
        trigger: "#professional-experiences",
        start: "top 80%",
      },
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.2,
      ease: "power3.out",
    });

    // Hover microinteraction for skill tags
    gsap.utils.toArray<HTMLElement>(".tag-card").forEach((el) => {
      el.addEventListener("mouseenter", () =>
        gsap.to(el, { scale: 1.1, duration: 0.2 })
      );
      el.addEventListener("mouseleave", () =>
        gsap.to(el, { scale: 1, duration: 0.2 })
      );
    });
  }, []);

  return (
    <section id="experience" className="relative py-20 px-4 md:px-12">
      <h2 className="text-4xl sm:text-5xl font-playfair mb-14">Experience</h2>

      <div className="space-y-14">
        {experienceData.map((el, i) => (
          <div
            key={i}
            className="experience-item grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          >
            <div>
              <p className="text-sm uppercase tracking-wider text-gray-400">
                {el.year}
              </p>
              <h3 className="text-xl font-bold mt-2">
                {el.role} <span className="text-green-400">@ {el.company}</span>
              </h3>
              <p className="text-sm italic text-gray-500">{el.location}</p>
            </div>

            <div>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-2">
                {el.tasks.map((task, j) => (
                  <li key={j}>{task}</li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex flex-wrap gap-2">
                {el.skills.map((skill, k) => (
                  <span
                    key={k}
                    className="tag-card text-sm px-3 py-1 rounded-full 
               bg-gray-200 text-gray-800 
               dark:bg-gray-700 dark:text-gray-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
