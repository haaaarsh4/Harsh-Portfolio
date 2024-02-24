// testimonial data
import React, { useState, useEffect } from 'react';

import CIcon from "../components/CIcon";
import PyGame from "../components/PyGameIcon.js"
import MLIcon from "../components/MLIcon.js"

import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

import ProjImg1 from '../components/imgJS/ProjImg1.js'
import ProjImg2 from '../components/imgJS/ProjImg2.js'
import ProjImg3 from '../components/imgJS/ProjImg3.js'
import ProjImg4 from '../components/imgJS/ProjImg4.js'
import ProjImg5 from '../components/imgJS/ProjImg5.js'
import ProjImg6 from '../components/imgJS/ProjImg6.js'
import ProjImg7 from '../components/imgJS/ProjImg7.js'
import ProjImg8 from '../components/imgJS/ProjImg8.js'
import ProjImg9 from '../components/imgJS/ProjImg9.js'
import ProjImg10 from '../components/imgJS/ProjImg10.js'
import ProjImg11 from '../components/imgJS/ProjImg11.js'
import ProjImg12 from '../components/imgJS/ProjImg12.js'
import EchoSphere from '../components/imgJS/EchoSphere.js'
import ActiveTrack from '../components/imgJS/ActiveTrack.js' 

import { LuSoup } from "react-icons/lu";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaGithub,
  FaLinux,
  FaPython,
  FaJava,
  FaArrowRight,
  FaArrowLeft
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiVisualstudiocode,
  SiJupyter,
  SiEclipseide,
  SiHaskell,
  SiMysql
} from "react-icons/si";

const projects = [
  {
    title: "EchoSphere",
    description: "Virtual Desktop Assistant (voice recognition and automation)",
    imgUrl: <EchoSphere />,
    withIcons: [
      <FaPython />,
      <LuSoup />,
    ],
    link: "https://github.com/haaaarsh4/EchoSphere-"
  },
  {
    title: "Active Track",
    description: "Fitness Tracker : Machine Learning",
    imgUrl: <ActiveTrack />,
    withIcons: [
      <FaPython />,
    ],
    link: "https://github.com/haaaarsh4/ActiveTrack"
  },

    {
      title: "Business Startup",
      description: "Design of a prototype for startup webpage",
      imgUrl: <ProjImg1 />,
      withIcons: [
        <FaHtml5 />,
        <FaCss3 />,
        <FaReact />,
      ],
      link: "https://64e9245717d1f35164f0df28--cosmic-marshmallow-c772c4.netlify.app/"
    },
    {
      title: "Online MCQ Quiz",
      description: "Design & Development of an online MCQ auiz",
      imgUrl: <ProjImg3 />,
      withIcons: [
        <FaHtml5 />,
        <FaCss3 />,
        <FaJs />
      ],  
      link: "https://comfy-quokka-1f1d18.netlify.app/"
    },
    {
      title: "Decision Dice",
      description: "Design & Development of a Random Choice Generator",
      imgUrl: <ProjImg4 />,
      withIcons: [
        <FaHtml5 />,
        <FaCss3 />,
        <FaJs />
      ],  
      link: "https://64e90fb613ef6f4406f4b96f--melodic-toffee-c21015.netlify.app/"
    },
    {
        title: "Online RPG game",
        description: "Design & Development of an Online RPG game",
        imgUrl: <ProjImg2 />,
        withIcons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />
        ],  
        link: "https://inspiring-cranachan-27b2ba.netlify.app/"
      },
    {
      title: "Text Editor",
      description: "Design & Development of a working Text Editor",
      imgUrl: <ProjImg11 />,
      withIcons: [
        <FaJava />
      ],  
      link: "https://github.com/haaaarsh4/Text-Editor"
    },
    {
      title: "Snake Game",
      description: "Snake Game Design and Development",
      imgUrl: <ProjImg10 />,
      withIcons: [
        <FaJava />
      ],  
      link: "https://github.com/haaaarsh4/Snake-Game"
    },
    {
      title: "Email Spam Classifier",
      description: "Design & Development of Email Spam Classifier",
      imgUrl: <ProjImg9 />,
      withIcons: [
        <FaPython />,
        <MLIcon />
      ],  
      link: "https://github.com/haaaarsh4/Email-Spam-Classifier"
    },
    {
      title: "Space Shooter Game",
      description: "Sample Design of a Space Shooter game",
      imgUrl: <ProjImg6 />,
      withIcons: [
        <FaPython />,
        <PyGame />
      ],  
      link:"https://github.com/haaaarsh4/Space-shooter-Multiplayer"
    },

    {
      title: "Library Management System",
      description: "Design & Development of a Libray Management System",
      imgUrl: <ProjImg12 />,
      withIcons: [
        <FaPython />,
        <SiMysql/>
      ],  
      link: "https://github.com/haaaarsh4/Library-Management-System"
    },
    {
      title: "CLI Chess",
      description: "Sample Design of CLI Chess game",
      imgUrl: <ProjImg8 />,
      withIcons: [
        <CIcon />,
      ],  
      link: "https://github.com/haaaarsh4/CHESS-CLI/tree/main"
    },
    {
      title: "Web Portrait",
      description: "Design & Development of a web portrait of Alan Turing",
      imgUrl: <ProjImg5 />,
      withIcons: [
        <FaHtml5 />,
        <FaCss3 />,
      ],  
      link: "https://bejewelled-sundae-ce4ae6.netlify.app/"
    },
  ];

  import SwiperCore, { Navigation, Pagination } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/react';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  
import Image from 'next/image';

SwiperCore.use([Navigation, Pagination]);

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

  const Slider = () => {
    const [projectsChunks, setProjectsChunks] = useState([]);

    useEffect(() => {
      const updateProjectsChunks = () => {
        const windowWidth = window.innerWidth;
        let chunkSize = 3; // Default chunk size
        if (windowWidth < 768) {
          chunkSize = 1; // Change this value for smaller screens
        } else if (windowWidth < 1024) {
          chunkSize = 2; // Change this value for medium screens
        }
        const updatedChunks = chunk(projects, chunkSize);
        setProjectsChunks(updatedChunks);
      };

    // Initial setup
    updateProjectsChunks();

    // Update on window resize
    window.addEventListener('resize', updateProjectsChunks);

    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener('resize', updateProjectsChunks);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <Swiper
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }}
        pagination={{
            clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className='h-[400px]'
    >
        {projectsChunks.map((chunk, index) => (
            <SwiperSlide key={index}>
                <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
                    {chunk.map((slide, slideIndex) => (
                                      <a key={slideIndex} href={slide.link} target="_blank" rel="noopener noreferrer">
                                      <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                                        <div className="flex flex-col justify-center text-center">
                                          <div className="flex flex-col text-left">
                                            <div className="mb-2 mx-auto">
                                              {slide.imgUrl}
                                            </div>
                                            <div className="text-lg">
                                              {slide.description}
                                            </div>
                                            <div className="text-2xl flex gap-2 mt-4">
                                              {slide.withIcons.map((Icon, iconIndex) => (
                                                <span key={iconIndex} className="mr-2">
                                                  {Icon}
                                                </span>
                                              ))}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </a>                      
                    ))}
                </div>
            </SwiperSlide>
        ))}
        {/* Navigation Buttons */}
        <div >
        <BsArrowRight />
      </div>
      <div>
        <BsArrowLeft />
      </div>
    </Swiper>

);
};

export default Slider;
