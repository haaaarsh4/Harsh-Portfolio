import React, { useState, useEffect } from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaWikipediaW,
  FaYahoo, 
} from "react-icons/fa";
import { SiMysql, SiTensorflow, SiNextdotjs} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { LuSoup } from "react-icons/lu";

// Import your actual image components
import ProjImg1 from '../components/imgJS/ProjImg1.js'
import ProjImg2 from '../components/imgJS/ProjImg2.js'
import ProjImg3 from '../components/imgJS/ProjImg3.js'
import ProjImg4 from '../components/imgJS/ProjImg4.js'
import ProjImg5 from '../components/imgJS/ProjImg5.js'
import ProjImg6 from '../components/imgJS/ProjImg6.js'
import ProjImg8 from '../components/imgJS/ProjImg8.js'
import ProjImg9 from '../components/imgJS/ProjImg9.js'
import ProjImg10 from '../components/imgJS/ProjImg10.js'
import ProjImg11 from '../components/imgJS/ProjImg11.js'
import ProjImg12 from '../components/imgJS/ProjImg12.js'
import EchoSphere from '../components/imgJS/EchoSphere.js'
import ActiveTrack from '../components/imgJS/ActiveTrack.js' 
import Crypto from '../components/imgJS/Crypto.js'
import CIcon from "../components/CIcon";
import PyGame from "../components/PyGameIcon.js"
import MLIcon from "../components/MLIcon.js"
import WorkoutTracker from "../components/imgJS/WorkoutTracker.js"

const projects = [
  {
    title: "EchoSphere",
    description: "Virtual Desktop Assistant (voice recognition and automation)",
    imgUrl: <EchoSphere />,
    withIcons: [<FaPython />, <LuSoup />],
    link: "https://github.com/haaaarsh4/EchoSphere-"
  },
  {
    title: "Active Track",
    description: "Fitness Tracker : Machine Learning",
    imgUrl: <ActiveTrack />,
    withIcons: [<FaPython />],
    link: "https://github.com/haaaarsh4/ActiveTrack"
  },
  {
    title: "Workout Tracker",
    description: "Web app to track workouts and fitness progress!",
    imgUrl: <WorkoutTracker />,
    withIcons: [<FaHtml5 />, <FaCss3 />, <SiNextdotjs />],
    link: "https://workoutt-trackerr.netlify.app/"
  },
  {
    title: "Crypto Price Prediction",
    description: "Crypto Price Prediction : Sentiment Analysis",
    imgUrl: <Crypto />,
    withIcons: [<FaPython />, <SiTensorflow />, <FaYahoo />, <FaWikipediaW />],
    link: "https://github.com/haaaarsh4/Crypto-Price-Prediction"
  },
  {
    title: "Online MCQ Quiz",
    description: "Design & Development of an online MCQ quiz",
    imgUrl: <ProjImg3 />,
    withIcons: [<FaHtml5 />, <FaCss3 />, <FaJs />],
    link: "https://comfy-quokka-1f1d18.netlify.app/"
  },
  {
    title: "Decision Dice",
    description: "Design & Development of a Random Choice Generator",
    imgUrl: <ProjImg4 />,
    withIcons: [<FaHtml5 />, <FaCss3 />, <FaJs />],
    link: "https://64e90fb613ef6f4406f4b96f--melodic-toffee-c21015.netlify.app/"
  },
  {
    title: "Online RPG game",
    description: "Design & Development of an Online RPG game",
    imgUrl: <ProjImg2 />,
    withIcons: [<FaHtml5 />, <FaCss3 />, <FaJs />],
    link: "https://inspiring-cranachan-27b2ba.netlify.app/"
  },
  {
    title: "Text Editor",
    description: "Design & Development of a working Text Editor",
    imgUrl: <ProjImg11 />,
    withIcons: [<FaJava />],
    link: "https://github.com/haaaarsh4/Text-Editor"
  },
  {
    title: "Snake Game",
    description: "Snake Game Design and Development",
    imgUrl: <ProjImg10 />,
    withIcons: [<FaJava />],
    link: "https://github.com/haaaarsh4/Snake-Game"
  },
  {
    title: "Space Shooter Game",
    description: "Sample Design of a Space Shooter game",
    imgUrl: <ProjImg6 />,
    withIcons: [<FaPython />, <PyGame />],
    link: "https://github.com/haaaarsh4/Space-shooter-Multiplayer"
  },
  {
    title: "Library Management System",
    description: "Design & Development of a Library Management System",
    imgUrl: <ProjImg12 />,
    withIcons: [<FaPython />, <SiMysql />],
    link: "https://github.com/haaaarsh4/Library-Management-System"
  },
  {
    title: "CLI Chess",
    description: "Sample Design of CLI Chess game",
    imgUrl: <ProjImg8 />,
    withIcons: [<CIcon />],
    link: "https://github.com/haaaarsh4/CHESS-CLI/tree/main"
  }
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 768) {
        setItemsPerSlide(1);
      } else if (windowWidth < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };

    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  const totalSlides = Math.ceil(projects.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const currentProjects = projects.slice(
    currentIndex * itemsPerSlide,
    (currentIndex + 1) * itemsPerSlide
  );

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Container with relative positioning for nav buttons */}
      <div className="relative px-16 sm:px-20">
        
        {/* Navigation Buttons */}
        {totalSlides > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-red-500/90 hover:bg-red-600 text-white p-3 sm:p-4 rounded-full disabled:opacity-30 disabled:cursor-not-allowed z-40 transition-all"
              disabled={currentIndex === 0}
              aria-label="Previous slide"
            >
              <BsArrowLeft className="text-xl sm:text-2xl" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-red-500/90 hover:bg-red-600 text-white p-3 sm:p-4 rounded-full disabled:opacity-30 disabled:cursor-not-allowed z-40 transition-all"
              disabled={currentIndex === totalSlides - 1}
              aria-label="Next slide"
            >
              <BsArrowRight className="text-xl sm:text-2xl" />
            </button>
          </>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div className="bg-slate-800/60 rounded-xl overflow-hidden border border-slate-700/50 hover:border-red-500/70 transition-colors duration-200 h-full flex flex-col">
                {/* Image Container */}
                <div className="bg-slate-900/50 w-full aspect-video flex items-center justify-center overflow-hidden">
                  {project.imgUrl}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 flex-1 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack Icons */}
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex gap-2">
                      {project.withIcons.map((Icon, iconIndex) => (
                        <span
                          key={iconIndex}
                          className="text-xl text-gray-400"
                        >
                          {Icon}
                        </span>
                      ))}
                    </div>
                    <BsArrowRight className="text-red-500 text-lg flex-shrink-0" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      {totalSlides > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'w-8 bg-red-500'
                  : 'w-2 bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Slider;