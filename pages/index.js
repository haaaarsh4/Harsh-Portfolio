import Image from "next/image"
import ParticlesContainer from '../components/ParticlesContainer'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Home = () => {
  return (
    <div className="h-screen w-screen fixed top-0 left-0 bg-transparent overflow-hidden">
      {/* Particles in the background */}
      <div className="w-full h-full absolute right-0 bottom-0 opacity-40 pt-20">
        <ParticlesContainer />
      </div>

      {/* Content layer */}
      <div className="relative z-10 h-full w-full flex items-center pt-20">
        <div className="w-full px-6 sm:px-12 lg:px-16 xl:pl-24">
          <div className="max-w-[800px]">
            <motion.h1
              variants={fadeIn('down', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-5xl xl:text-7xl leading-tight font-bold mb-6">
              Hey I&apos;m <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-red-400">
                Harsh Upadhyay
              </span>
            </motion.h1>
            <motion.p
              variants={fadeIn('down', 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-xl text-white/90 text-base xl:text-lg leading-relaxed"
            >
              Dive in to get a feel for who I am and what I&apos;m all about. Click around to check out my projects, see the skills I bring to the table, and be sure to connect with me or drop a message. Whether you&apos;re here for inspiration, collaboration, or just a casual browse, I&apos;m excited to have you along. Ready to explore?
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;