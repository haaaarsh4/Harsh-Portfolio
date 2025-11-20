import Slider from "../../components/Slider";
import Circles from "../../components/Circles";

const Contact = () => {
  return (
    <div className="h-screen w-screen fixed top-0 left-0 bg-transparent overflow-hidden">
      <Circles />
      
      {/* Projects Section - Centered */}
      <div className="relative z-10 h-full w-full flex items-center justify-center">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:mr-32">
          <div className="text-center mb-8">
            <h2 className="h2 text-accent mb-2">Projects</h2>
            <p className="text-white/70">(Swipe to view more)</p>
          </div>
          <div className="flex justify-center">
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;