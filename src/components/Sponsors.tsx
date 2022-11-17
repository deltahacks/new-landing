import RBC from "../../public/RBC.png";
import Uizard from "../../public/Uizard.png";
import Arcelor from "../../public/ArcelorMittal.png";

const Sponsors = () => {
  return (
    <div className="w-full sm:pb-10 font-minecraft text-white flex justify-center items-center flex-col h-fit">
      <div className="p-12">
        <div className="shadow-none outline-none transform px-12 py-2 md:px-10 md:py-4 text-center focus:bg-transparent text-xl md:text-3xl">
          Our Sponsors
        </div>
        <div className="text-center text-2xl md:text-4xl align-middle rotate-90 transform">
          {">"}
        </div>
      </div>
      <div className="w-full relative flex justify-center items-center lg:px-44 lg:pb-32 flex-wrap flex-col">
        <div className="w-1/5 lg:w-1/2 flex items-center justify-center">
          <img src={RBC} className="" alt="RBC logo"></img>
        </div>
        <div className="flex justify-evenly items-center lg:gap-64 py-8">
          <img src={Arcelor} className="w-2/5" alt="ArcelorMittal logo"></img>
          <img src={Uizard} className="w-2/5" alt="Uizard logo"></img>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
