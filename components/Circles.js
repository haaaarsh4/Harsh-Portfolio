import Image from "next/image";

const Circles = () => {
    return (
    <div className="w-[200px] xl:w-[300px] fixed right-0 bottom-0 mix-blend-color-dodge animate-pulse duration-100 z-10 pointer-events-none">
        <Image src={'/circles.png'} width={260} height={200} className="w-full h-full"/>
    </div>
    );
  };
  
  export default Circles;