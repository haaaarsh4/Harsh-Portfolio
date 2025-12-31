// ============================================
// PROJECTS.JS - COMPLETE FILE WITH PROPER ANIMATION
// ============================================

import Slider from "../../components/Slider";
import Circles from "../../components/Circles";
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className="bg-1a1a2e w-full overflow-hidden xl:ml-20">
      <Circles />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{
          duration: 1.2,
          delay: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 xl:pr-24 py-10"
      >
        <Slider />
      </motion.div>
    </div>
  );
};

export default Projects;