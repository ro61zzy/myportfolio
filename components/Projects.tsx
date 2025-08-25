"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/lib/projects";
import { Github, Link as ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const tabs = ["all", "web", "mobile", "web3"];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.tag === activeTab);

  // useEffect(() => {
  //   gsap.from(".project-card", {
  //     scrollTrigger: {
  //       trigger: "#projects",
  //       start: "top 80%",
  //     },
  //     opacity: 0,
  //     y: 40,
  //     duration: 0.6,
  //     stagger: 0.1,
  //     ease: "power3.out",
  //   });
  // }, [activeTab]);

  return (
    <section id="Projects" className="py-20 px-4 md:px-12">
      <h2 className="text-4xl sm:text-5xl font-playfair mb-12">Projects</h2>

      {/* Tabs */}
      <div className="flex space-x-6 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              activeTab === tab
                ? "bg-green-400 text-black"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>


      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((p, i) => (
          <div
            key={i}
            className="project-card bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
          >
     
            <div className="relative group overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-50 object-fit transform transition-transform duration-500 group-hover:scale-110"
              />


              <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-green-400 transition"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                )}
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-green-400 transition"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                )}
              </div>
            </div>


            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{p.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {p.description}
              </p>

           
              <div className="flex flex-wrap gap-2 mb-2">
                {p.skills.map((skill, k) => (
                  <span
                    key={k}
                    className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 text-xs px-3 py-1 rounded-full"
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
