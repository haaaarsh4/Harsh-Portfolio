import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiEnvelope,
} from 'react-icons/hi2';

export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'projects', path: '/work', icon: <HiViewColumns /> },
  { name: 'contact', path: '/contact', icon: <HiEnvelope /> },
];

import Link from 'next/link';
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  
  return (
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
      <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-6 px-4 md:px-40 xl:px-3 h-[80px] xl:h-max xl:py-6 py-8 bg-gray-900/60 backdrop-blur-lg border border-white/5 xl:rounded-full text-3xl xl:text-xl'>
        {navData.map((link, index) => {
          return (
            <Link 
              className={`${
                link.path === pathname ? 'text-accent scale-110' : 'text-white/70' 
              } relative flex items-center group hover:text-accent hover:scale-110 transition-all duration-300`}  
              href={link.path} 
              key={index}
            >
              <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
                <div className='bg-accent/90 relative flex text-white items-center px-3 py-1.5 rounded-md shadow-xl'>
                  <div className='text-[11px] leading-none font-medium capitalize whitespace-nowrap'>
                    {link.name}
                  </div>
                  <div className='border-solid border-l-accent/90 border-l-6 border-y-transparent border-y-[5px] border-r-0 absolute -right-1.5'>
                  </div>
                </div>
              </div>
              <div className='p-2.5 rounded-lg hover:bg-white/5 transition-all duration-300'>
                {link.icon}
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;