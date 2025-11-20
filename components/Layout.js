import { Sora } from '@next/font/google';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

import Nav from '../components/Nav';
import Header from '../components/Header';
import TopLeftImg from '../components/TopLeftImg';

const Layout = ({ children }) => {
  return (
    <div className={`${sora.variable} font-sora`} >
      <Header />
      
      <div className="page bg-site text-white bg-cover bg-no-repea">
        <div className="relative">
          <Nav />
          <TopLeftImg />
          <div className=" xl:mr-[100px]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;