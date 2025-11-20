// icons
import CIcon from "../../components/CIcon";
import { useEffect } from "react";
import {
  FaPython,
  FaJs,
  FaReact,
  FaGithub,
  FaLinux,
  FaJava,
  FaNodeJs,
  FaDocker,
  FaBriefcase,
  FaCalendar
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiVisualstudiocode,
  SiJupyter,
  SiEclipseide,
  SiHaskell,
  SiCplusplus,
  SiCsharp,
  SiTypescript,
  SiExpress,
  SiDotnet,
  SiTailwindcss,
  SiDjango,
  SiFlask,
  SiPytorch,
  SiTensorflow,
  SiElm,
  SiReplit,
  SiNetlify,
  SiCloudflare
} from "react-icons/si";

const skillsData = {
  languages: [
    { icon: <FaPython />, name: "Python" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <CIcon />, name: "C" },
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <SiCsharp />, name: "C#" },
    { icon: <FaJava />, name: "Java" },
    { icon: <SiHaskell />, name: "Haskell" },
    { icon: <SiElm />, name: "Elm" },
  ],
  frameworks: [
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiDotnet />, name: ".NET" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <SiDjango />, name: "Django" },
    { icon: <SiFlask />, name: "Flask" },
    { icon: <SiPytorch />, name: "PyTorch" },
    { icon: <SiTensorflow />, name: "TensorFlow" },
  ],
  tools: [
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiEclipseide />, name: "Eclipse" },
    { icon: <SiReplit />, name: "Replit" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <SiNetlify />, name: "Netlify" },
    { icon: <SiCloudflare />, name: "Cloudflare" },
    { icon: <FaLinux />, name: "Linux" },
    { icon: <SiJupyter />, name: "Jupyter" },
  ],
};

const experienceData = [
  {
    company: "Government of Ontario - MPBSDP",
    role: "Business Analyst Co-op",
    period: "May 2025 - December 2025",
    location: "North York, Ontario",
    description: [
      "Led grooming and refinement sessions with stakeholders to translate requirements into technical solutions",
      "Performed system validation using REST APIs and Postman, ensuring compliance with business requirements",
      "Conducted in-depth analysis of postal code mapping for migration feasibility assessment"
    ]
  },
  {
    company: "Sciencious",
    role: "Frontend Developer",
    period: "April 2022 - August 2022",
    location: "Dubai, UAE",
    description: [
      "Led design and deployment of company website using Next.js, resulting in 20% increase in user engagement",
      "Implemented RESTful APIs and optimized PostgreSQL database integrations for enhanced scalability",
      "Collaborated with cross-functional teams to integrate web applications for internal and customer-facing projects"
    ]
  },
  {
    company: "Comet",
    role: "Software Tester Intern",
    period: "January 2022 - April 2022",
    location: "Dubai, UAE",
    description: [
      "Conducted UI/UX analyses during software testing, documenting critical bugs and driving 100% performance improvement",
      "Executed structured user testing under the Head Developer's guidance, synthesizing feedback to refine features",
      "Collaborated with cross-functional teams to develop test strategies, focusing on integration and regression testing"
    ]
  }
];

import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const About = () => {
  return (
    <div className="bg-1a1a2e w-full overflow-x-hidden xl:ml-20">
      <Circles />
      
      {/* Section 1: About Me - Full Screen */}
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 xl:pr-24 py-20">
        <div className="container mx-auto flex items-center justify-center w-full max-w-7xl">
          <motion.div
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-center max-w-4xl mx-auto w-full"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold mb-6 sm:mb-8 break-words">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-red-400">Me</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl xl:text-2xl text-white/90 leading-relaxed mb-6 sm:mb-8 break-words">
              I&apos;m a dedicated computer science student at <span className="text-accent font-semibold">McMaster University</span> with a passion for Full Stack Development and Software Engineering.
            </p>
            <p className="text-sm sm:text-base md:text-lg xl:text-xl text-white/80 leading-relaxed mb-8 sm:mb-12 break-words">
              Exploring the intersections of technology and innovation fuels my curiosity and drive. From building scalable web applications to diving deep into machine learning projects, I&apos;m constantly pushing the boundaries of what&apos;s possible with code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="Harsh_Upadhyay_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-accent to-red-500 rounded-lg font-semibold text-white hover:shadow-2xl hover:shadow-accent/50 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                View Resume
              </a>
              <div className="text-white/60 text-sm sm:text-base text-center">
                Currently seeking internships for <span className="text-accent font-semibold">Winter / Summer 2026</span>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 animate-bounce">
              <div className="text-white/60 text-sm mb-2">Scroll to explore</div>
              <svg className="w-6 h-6 mx-auto text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section 2: Professional Experience Timeline */}
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 xl:pr-24 py-10">
        <div className="container mx-auto max-w-5xl w-full">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            exit="hidden"
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-center mb-12 sm:mb-20 text-white break-words">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-red-400">Experience</span>
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent via-accent/80 to-red-400"></div>
              
              {experienceData.map((exp, idx) => (
                <div key={idx} className="mb-12 sm:mb-16 relative pl-10 sm:pl-12">
                  {/* Timeline Dot */}
                  <div className="absolute left-[1px] top-6 w-4 h-4 rounded-full bg-accent shadow-lg shadow-accent/50 ring-4 ring-[#1a1a2e]"></div>
                  
                  <div className="backdrop-blur-sm bg-white/5 p-5 sm:p-7 rounded-2xl border border-white/10 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 hover:scale-[1.01]">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5 gap-3">
                      <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white break-words">{exp.company}</h4>
                      <div className="flex items-center gap-2 text-accent text-sm sm:text-base shrink-0 font-medium">
                        <FaCalendar className="text-base" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-3 mb-6 pb-4 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <FaBriefcase className="text-accent text-lg" />
                        <span className="text-base sm:text-lg text-white font-semibold break-words">{exp.role}</span>
                      </div>
                      <span className="text-white/40">•</span>
                      <span className="text-white/60 text-sm sm:text-base break-words">{exp.location}</span>
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.description.map((desc, descIdx) => (
                        <li key={descIdx} className="text-sm sm:text-base text-white/80 leading-relaxed flex items-start gap-3">
                          <span className="text-accent shrink-0 text-base leading-none translate-y-[0.15em]">•</span>
                          <span className="break-words flex-1">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section 3: Technical Skills - Professional Grid */}
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 xl:pr-24 py-10 pb-32">
        <div className="container mx-auto max-w-6xl w-full">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            exit="hidden"
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-center mb-12 sm:mb-16 text-white break-words">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-red-400">Skills</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Languages Card */}
              <div className="backdrop-blur-sm bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-accent/50 transition-all duration-300 hover:scale-[1.02] w-full">
                <h4 className="text-xl sm:text-2xl font-bold mb-6 text-accent">Languages</h4>
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {skillsData.languages.map((item, idx) => (
                    <div 
                      key={idx}
                      className="flex flex-col items-center gap-2 group cursor-pointer"
                    >
                      <div className="text-2xl sm:text-3xl text-white/70 group-hover:text-accent group-hover:scale-125 transition-all duration-300">
                        {item.icon}
                      </div>
                      <span className="text-[9px] sm:text-[10px] text-white/50 group-hover:text-white transition-colors text-center break-words">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Frameworks Card */}
              <div className="backdrop-blur-sm bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-accent/50 transition-all duration-300 hover:scale-[1.02] w-full">
                <h4 className="text-xl sm:text-2xl font-bold mb-6 text-accent">Frameworks</h4>
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {skillsData.frameworks.map((item, idx) => (
                    <div 
                      key={idx}
                      className="flex flex-col items-center gap-2 group cursor-pointer"
                    >
                      <div className="text-2xl sm:text-3xl text-white/70 group-hover:text-accent group-hover:scale-125 transition-all duration-300">
                        {item.icon}
                      </div>
                      <span className="text-[9px] sm:text-[10px] text-white/50 group-hover:text-white transition-colors text-center break-words">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools Card */}
              <div className="backdrop-blur-sm bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-accent/50 transition-all duration-300 hover:scale-[1.02] w-full">
                <h4 className="text-xl sm:text-2xl font-bold mb-6 text-accent">Tools</h4>
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {skillsData.tools.map((item, idx) => (
                    <div 
                      key={idx}
                      className="flex flex-col items-center gap-2 group cursor-pointer"
                    >
                      <div className="text-2xl sm:text-3xl text-white/70 group-hover:text-accent group-hover:scale-125 transition-all duration-300">
                        {item.icon}
                      </div>
                      <span className="text-[9px] sm:text-[10px] text-white/50 group-hover:text-white transition-colors text-center break-words">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;