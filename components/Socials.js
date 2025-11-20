import Link from "next/link";
import {RiInstagramLine, RiLinkedinLine, RiGithubLine} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className="flex items-center gap-x-4 lg:gap-x-6">
      <Link 
        target="_blank" 
        href={'https://www.instagram.com/hhxrsh_/'} 
        className="text-white/80 hover:text-accent hover:scale-110 transition-all duration-300 text-xl lg:text-2xl"
        aria-label="Instagram"
      >
        <RiInstagramLine />
      </Link>
      <Link 
        target="_blank" 
        href={'https://www.linkedin.com/in/harsh-upadhyay--/'} 
        className="text-white/80 hover:text-accent hover:scale-110 transition-all duration-300 text-xl lg:text-2xl"
        aria-label="LinkedIn"
      >
        <RiLinkedinLine />
      </Link>
      <Link 
        target="_blank" 
        href={'https://github.com/haaaarsh4'} 
        className="text-white/80 hover:text-accent hover:scale-110 transition-all duration-300 text-xl lg:text-2xl"
        aria-label="GitHub"
      >
        <RiGithubLine />
      </Link>
    </div>
  );
};

export default Socials;