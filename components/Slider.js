import React, { useState } from 'react';
import { 
  FaHtml5, FaCss3, FaJs, FaReact, FaPython, FaJava,
  FaWikipediaW, FaYahoo, FaGithub, FaExternalLinkAlt, FaGamepad, FaServer, FaMicrophone, FaRobot, FaCheckCircle
} from "react-icons/fa";
import { SiMysql, SiTensorflow, SiNextdotjs, SiC,
  SiNetlify,
  SiIntellijidea,  
  SiPygame,
  SiJavascript,
  SiJira,
  SiMicrosoftexcel,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiPostgresql,
  SiTypescript,
  SiJsonwebtokens,
  SiOpenai,
  SiAuth0
 } from "react-icons/si";

import { LuSoup } from "react-icons/lu";

import ProjImg2 from '../components/imgJS/ProjImg2.js';
import ProjImg3 from '../components/imgJS/ProjImg3.js';
import ProjImg4 from '../components/imgJS/ProjImg4.js';
import ProjImg6 from '../components/imgJS/ProjImg6.js';
import ProjImg8 from '../components/imgJS/ProjImg8.js';
import ProjImg10 from '../components/imgJS/ProjImg10.js';
import ProjImg11 from '../components/imgJS/ProjImg11.js';
import ProjImg12 from '../components/imgJS/ProjImg12.js';
import ProjImg13 from '../components/imgJS/ProjImg13.js';
import ProjImg14 from '../components/imgJS/ProjImg14.js';
import ProjImg15 from '../components/imgJS/ProjImg15.js';
import EchoSphere from '../components/imgJS/EchoSphere.js';
import ActiveTrack from '../components/imgJS/ActiveTrack.js'; 
import Crypto from '../components/imgJS/Crypto.js';
import WorkoutTracker from "../components/imgJS/WorkoutTracker.js";

const projects = [
  {
    title: "Workout Tracker",
    description: "A production-ready full-stack workout tracking platform built with Next.js App Router and PostgreSQL, featuring authenticated dashboards, structured workout data, and a secure server-side AI assistant integrated via OpenRouter using a custom API route.",
    category: "Web Development",
    imgUrl: <WorkoutTracker />,
    techStack: [
      { icon: <SiNextdotjs />, name: "Next.js (App Router)" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <FaReact />, name: "Server Components" },
      { icon: <SiJsonwebtokens />, name: "JWT Authentication" },
      { icon: <SiAuth0 />, name: "OAuth (NextAuth)" },
      { icon: <SiOpenai />, name: "OpenRouter AI (Server API)" }
    ],
    link: "https://myworkout-tracker.vercel.app/",
    featured: true
  },
  {
    title: "LinkSnap",
    description: "A full-stack URL shortening platform with a Python (aiohttp) backend that exposes a REST API for generating short codes and handling fast redirects, paired with a modern frontend and clean frontend–backend separation.",
    category: "Systems Programming",
    imgUrl: <ProjImg13 />,
    techStack: [
      { icon: <FaPython />, name: "Python" },
      { icon: <FaReact />, name: "React" },
      { icon: <FaJs />, name: "JavaScript" }
    ],
    link: "https://github.com/haaaarsh4/LinkSnap",
    featured: true
  },
  {
    title: "ActiveTrack",
    description: "A machine learning–driven fitness analytics system that processes workout data to identify patterns, predict performance trends, and generate personalized training insights using statistical and ML models.",
    category: "Machine Learning",
    imgUrl: <ActiveTrack />,
    techStack: [
      { icon: <FaPython />, name: "Python" },
      { icon: <SiScikitlearn />, name: "Scikit-learn" },
      { icon: <SiTensorflow />, name: "TensorFlow" },
      { icon: <SiPandas />, name: "Pandas" },
      { icon: <SiNumpy />, name: "NumPy" }
    ],
    link: "https://github.com/haaaarsh4/ActiveTrack",
    featured: true
  }, {
    title: "JIRA Automation Suite",
    description: "A web-based automation tool built with Next.js that integrates with the JIRA REST API to fetch, bulk-update, and export issue data into Excel-ready formats, designed as a workflow automation proof-of-concept.",
    category: "Automation",
    imgUrl: <ProjImg14 />,
    techStack: [
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiJira />, name: "JIRA API Integration" },
      { icon: <FaServer />, name: "REST API" },
      { icon: <SiMicrosoftexcel />, name: "Excel" }
    ],
    link: "https://jira-automation-tool.vercel.app/"
  },
  {
    title: "EchoSphere",
    description: "A Python-based virtual desktop assistant that uses speech recognition and natural language processing to execute voice commands, automate system tasks, and perform contextual web queries through a modular command architecture.",
    category: "Automation",
    imgUrl: <EchoSphere />,
    techStack: [
      { icon: <FaPython />, name: "Python" },
      { icon: <FaMicrophone />, name: "Speech Recognition" },
      { icon: <FaRobot />, name: "NLP & Command Parsing" },
      { icon: <LuSoup />, name: "BeautifulSoup (Web Scraping)" }
    ],
    link: "https://github.com/haaaarsh4/EchoSphere-",
    featured: true
  },
  {
    title: "HCN Generator",
    description: "A lightweight web-based QA utility that generates valid Health Card Numbers using the Luhn algorithm, enabling testers to validate healthcare systems with compliant synthetic data instead of real patient information.",
    category: "Web Development",
    imgUrl: <ProjImg15 />,
    techStack: [
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3 />, name: "CSS3" },
      { icon: <FaCheckCircle />, name: "Luhn Algorithm" }
    ],
    link: "https://hcngen.vercel.app/"
  },
  {
    title: "Crypto Price Prediction",
    description: "Advanced cryptocurrency price prediction system using sentiment analysis and deep learning with TensorFlow for accurate market forecasting.",
    category: "Machine Learning",
    imgUrl: <Crypto />,
    techStack: [
      { icon: <FaPython />, name: "Python" },
      { icon: <SiTensorflow />, name: "TensorFlow" },
      { icon: <FaYahoo />, name: "Yahoo Finance" },
      { icon: <FaWikipediaW />, name: "Wikipedia" }
    ],
    link: "https://github.com/haaaarsh4/Crypto-Price-Prediction"
  },
  {
    title: "Online MCQ Quiz",
    description: "A responsive web-based multiple-choice quiz platform where users can answer questions in real-time, track scores instantly, and receive immediate feedback. Built for seamless interaction with smooth question transitions and score tracking.",
    category: "Web Development",
    imgUrl: <ProjImg3 />,
    techStack: [
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3 />, name: "CSS3" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <SiNetlify />, name: "Netlify" }
    ],
    link: "https://comfy-quokka-1f1d18.netlify.app/"
  },
  {
    title: "Decision Dice",
    description: "A fun and interactive web app that randomly selects an option from a user-provided list. Features smooth animations, instant results, and an intuitive interface for effortless decision-making.",
    category: "Web Development",
    imgUrl: <ProjImg4 />,
    techStack: [
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3 />, name: "CSS3" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <SiNetlify />, name: "Netlify" }
    ],
    link: "https://64e90fb613ef6f4406f4b96f--melodic-toffee-c21015.netlify.app/"
  },
  {
    title: "Online RPG Game",
    description: "A browser-based text RPG called 'Dragon Repeller' where players explore locations, battle monsters, manage inventory, and progress through quests. Includes character stats, turn-based combat, and immersive storytelling.",
    category: "Web Development",
    imgUrl: <ProjImg2 />,
    techStack: [
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3 />, name: "CSS3" },
      { icon: <FaJs />, name: "JavaScript" }
    ],
    link: "https://inspiring-cranachan-27b2ba.netlify.app/"
  },
  {
    title: "Text Editor",
    description: "A full-featured desktop text editor built in Java with syntax highlighting, file management, and a clean graphical interface. Supports multiple file editing and smooth user interactions.",
    category: "Desktop Applications",
    imgUrl: <ProjImg11 />,
    techStack: [
      { icon: <FaJava />, name: "Java" },
      { icon: <SiIntellijidea />, name: "IntelliJ IDEA" }
    ],
    link: "https://github.com/haaaarsh4/Text-Editor"
  },
  {
    title: "Snake Game",
    description: "A modernized version of the classic Snake game built in Java. Features smooth animations, responsive controls, and object-oriented design for maintainable gameplay logic.",
    category: "Desktop Applications",
    imgUrl: <ProjImg10 />,
    techStack: [
      { icon: <FaJava />, name: "Java" }
    ],
    link: "https://github.com/haaaarsh4/Snake-Game"
  },
  {
    title: "Space Shooter Game",
    description: "A multiplayer space shooter built with Python and Pygame. Includes dynamic gameplay, collectible power-ups, and competitive scoring mechanics for an engaging action experience.",
    category: "Desktop Applications",
    imgUrl: <ProjImg6 />,
    techStack: [
      { icon: <FaPython />, name: "Python" },
      { icon: <FaGamepad />, name: "Pygame" }
    ],
    link: "https://github.com/haaaarsh4/Space-shooter-Multiplayer"
  }
];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-gradient-to-br from-slate-900/90 to-slate-800/80 rounded-xl overflow-hidden border border-slate-700/50 hover:border-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
      }}
    >
      <div className="flex flex-col items-start gap-3 sm:gap-4 p-4 sm:p-6">
        <div className="w-full sm:hidden">
          <div className="relative w-full h-40 bg-slate-950 rounded-lg overflow-hidden border border-slate-700/50 group-hover:border-red-500/50 transition-colors duration-500 shadow-lg">
            <div className={`w-full h-full transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}>
              {project.imgUrl}
            </div>
          </div>
        </div>

        <div className="flex flex-row items-start gap-4 sm:gap-5 w-full">
          <div className="hidden sm:block relative flex-shrink-0">
            <div className="relative w-48 h-32 lg:w-56 lg:h-36 bg-slate-950 rounded-lg overflow-hidden border border-slate-700/50 group-hover:border-red-500/50 transition-colors duration-500 shadow-lg">
              <div className={`w-full h-full transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}>
                {project.imgUrl}
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-2 sm:gap-3 min-w-0">
            <div className="flex items-start justify-between gap-2 flex-wrap">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 sm:mb-2">
                  <span className="text-[9px] sm:text-[10px] font-bold text-red-400 uppercase tracking-wider bg-red-500/10 px-2 py-0.5 sm:py-1 rounded-full border border-red-500/30">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2 group-hover:text-red-400 transition-colors duration-300 break-words">
                  {project.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed break-words">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.techStack.map((tech, i) => (
                  <div key={i} className="flex items-center gap-1 sm:gap-1.5 bg-slate-800/40 rounded-md px-2 sm:px-3 py-1 sm:py-1.5 border border-slate-700/30 hover:border-red-500/30 transition-colors">
                    <span className="text-base sm:text-lg text-red-400 flex-shrink-0">
                      {tech.icon}
                    </span>
                    <span className="text-white font-medium text-[10px] sm:text-xs whitespace-nowrap">{tech.name}</span>
                  </div>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30 text-xs sm:text-sm w-full sm:w-auto flex-shrink-0"
              >
                {project.link.includes('github') ? (
                  <>
                    <FaGithub className="text-sm sm:text-base" />
                    <span>View Code</span>
                  </>
                ) : (
                  <>
                    <FaExternalLinkAlt className="text-xs sm:text-sm" />
                    <span>Live Demo</span>
                  </>
                )}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Slider = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Systems Programming', 'Automation', 'Machine Learning', 'Web Development', 'Desktop Applications'];
  
  const filteredProjects = projects.filter(project => {
    return selectedCategory === 'All' || project.category === selectedCategory;
  });

  return (
    <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 pb-24 xl:pb-10">
      <div className="text-center mb-8 sm:mb-12 space-y-2 sm:space-y-3 h-[140px] sm:h-[180px] flex flex-col justify-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold px-4">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-red-400">Projects</span>
        </h2>
        <p className="text-white/70 text-sm sm:text-base lg:text-lg px-4 max-w-3xl mx-auto">
          A collection of projects showcasing my skills in web development, machine learning, and software engineering
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-10 px-2 min-h-[60px] sm:min-h-[50px] items-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
              selectedCategory === category
                ? 'bg-red-500 text-white shadow-lg shadow-red-500/30'
                : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="space-y-4 sm:space-y-6 min-h-[500px]">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12 sm:py-20">
          <div className="text-4xl sm:text-6xl mb-4">🔍</div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">No projects found</h3>
          <p className="text-slate-400 text-sm sm:text-base">Try selecting a different category</p>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Slider;