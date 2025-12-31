import Link from "next/link";
import Socials from '../components/Socials'

const Header = () => {
  return(
    <header className="w-full bg-black/30 backdrop-blur-xl border-b border-white/10 relative z-20">
      <div className="w-full px-4 sm:px-6">
        <div className="flex flex-row justify-between items-center py-3 xl:py-4 max-w-[1400px] mx-auto">
          <Link 
            className="text-lg sm:text-xl lg:text-2xl font-bold text-white hover:text-accent transition-colors duration-300 tracking-wide" 
            href={'/'}
          >
            PORTFOLIO
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;