import logoImage from "../../public/logo.svg";
import mlh from "../../public/mlh.svg";
import Navigation from "../components/navigation/navigation";
import Faq from "../components/navigation/faq";
import clouds from "../../public/Clouds.png";


const LandingPage = () => {
  return (
    <div>
      <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img src={clouds} alt="clouds"></img>
      </div>
      <Navigation />
      <div className="relative flex items-center justify-center flex-col font-minecraft p-14 min-h-screen ">
        <div>
          <img src={logoImage} className="w-full h-full" alt="logo"></img>
          <div className="flex justify-center align-center md:flex-row md:justify-end md:items-center p-1">
            <img src={mlh} className="w-auto h-4" />
            <span className="text-xs md:text-lg ml-2 whitespace-nowrap">
              OFFICIAL MEMBER
            </span>
          </div>
        </div>
        <div className="text-4xl font-bold mb-5"></div>
        <div className="flex flex-col items-center justify-center font-normal text-lg leading-9 tracking-wider">
          <p className=" text-center  text-white ">
            <span className="text-shadow">JANUARY 13-15, 2023</span>
          </p>
          <p className=" text-center  text-white">
            <span className="text-shadow">IN-PERSON</span>
          </p>
        </div>
        <div className="w-100 h-4/5 mx-auto">
          <div className="flex flex-col items-center  w-100 h-100 mt-10">
            <div className="mBG px-12 py-2 md:px-20 md:py-5 mt-3">
              <a
                href="https://portal.deltahacks.com/"
                target="_blank"
                rel="noreferrer"
                className="text-white text-center text-xl md:text-3xl tracking-wider "
              >
                APPLY NOW
              </a>
            </div>
          </div>
        </div>
        <Faq />
      </div>
    </div>
  );
};

export default LandingPage;
