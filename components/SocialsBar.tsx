"use client";
import { Github, Linkedin} from "lucide-react"; // or icons of choice
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function SocialsBar() {
  return (
    <div className="fixed bottom-0 right-6 flex flex-row space-x-8 z-50">
      {/* vertical line for style */}
      <div className="w-px h-10 bg-gray-600 mx-auto mr-3.5"></div>

      <a href="https://github.com/ro61zzy" target="_blank" rel="noopener noreferrer">
        <Github className="w-7 h-7 text-gray-400 hover:text-green-400 transition-colors" />
      </a>
      <a href="https://www.linkedin.com/in/rose-wachuka-6086861b1/" target="_blank" rel="noopener noreferrer">
        <Linkedin className="w-7 h-7 text-gray-400 hover:text-green-400 transition-colors" />
      </a>
     <a href="https://x.com/rosewachukak" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon 
      icon={faXTwitter} 
      className="w-7 h-7 text-gray-400 hover:text-green-400 transition-colors" 
    />
  </a>



    </div>
  );
}
