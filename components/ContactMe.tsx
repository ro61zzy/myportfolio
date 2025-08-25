"use client";

import { Github, Linkedin, Mail, Phone } from "lucide-react"; 

export default function Contact() {
  return (
 <section
     id="ContactMe"
      className="py-20 px-4 md:px-12 text-center"
    >
      <h2 className="text-4xl md:text-6xl font-bold font-playfair mb-6">
        Let’s Work Together
      </h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto mb-10">
        Got a project idea, collaboration, or just want to say hi?  
        I’d love to hear from you.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="mailto:rosekaremeri@gmail.com"
          className="px-6 py-3 rounded-full bg-green-400 text-black font-medium hover:bg-green-500 transition flex items-center gap-2"
        >
          <Mail className="w-5 h-5" />
          Email Me
        </a>

        <a
          href="https://www.linkedin.com/in/rose-wachuka-6086861b1/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 font-medium hover:bg-green-400 hover:text-black transition flex items-center gap-2"
        >
          <Linkedin className="w-5 h-5" />
          LinkedIn
        </a>

        <a
          href="https://github.com/ro61zzy"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 font-medium hover:bg-green-400 hover:text-black transition flex items-center gap-2"
        >
          <Github className="w-5 h-5" />
          GitHub
        </a>

        <a
          href="https://wa.me/254758655408"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-full bg-green-500 text-black font-medium hover:bg-green-600 transition flex items-center gap-2"
        >
          <Phone className="w-5 h-5" />
          WhatsApp
        </a>
      </div>
    </section>
  );
}
