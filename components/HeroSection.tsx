"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const roles = [
  "Frontend Developer",
  "Fullstack Developer",
  "Web3 Developer",
  "React Native Developer",
];

export default function HeroSection() {
  useEffect(() => {
    let roleIndex = 0;
    const roleEl = document.querySelector(".dynamic-role");
    if (!roleEl) return;

    const cycleRoles = () => {
      const text = roles[roleIndex];

      const tl = gsap.timeline({
        onComplete: () => {
          roleIndex = (roleIndex + 1) % roles.length;
          cycleRoles(); // loop
        },
      });

      tl.to(roleEl, {
        duration: text.length * 0.07, // typing speed
        text: text,
        ease: "none",
      })
        .to(roleEl, {
          delay: 1, // pause with full word
          duration: text.length * 0.05,
          text: "",
          ease: "none",
        });
    };

    cycleRoles();

    return () => {
      gsap.killTweensOf(roleEl);
    };
  }, []);

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center min-h-screen text-center md:text-left overflow-hidden font-mono px-4 md:px-12">
      <div className="flex-1 max-w-2xl">
        <h1 className="text-2xl text-gray-400">
          Hi, welcome and nice to meet you.
        </h1>
        <h2 className="mt-4 text-3xl font-bold">
          I&apos;m a <span className="dynamic-role text-green-400"></span>
          <span className="blinking-cursor text-green-400">|</span>
        </h2>

        <p className="mt-6 max-w-lg text-gray-500">
          I craft end-to-end solutions that users love and businesses thrive on.
        </p>
      </div>

      {/* Tarantula profile photo */}
      <div className="flex-1 hidden md:flex items-center justify-center ">
        <img
          src="/taran.png"
          alt="Ms. Tarantula as a hero image"
          className="w-full max-w-md object-contain"
        />
      </div>
    </section>
  );
}
