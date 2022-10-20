import logoImage from "../../public/logo.svg";
import mlh from "../../public/mlh.svg";
import Navigation from "../components/navigation/navigation";
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
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-white text-center text-xl md:text-3xl tracking-wider "
              >
                APPLY NOW
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center  w-100 mt-10">
            <p>About us</p>

            <svg
              width="24"
              height="38"
              viewBox="0 0 24 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9393 37.0607C11.5251 37.6464 12.4749 37.6464 13.0607 37.0607L22.6066 27.5147C23.1924 26.9289 23.1924 25.9792 22.6066 25.3934C22.0208 24.8076 21.0711 24.8076 20.4853 25.3934L12 33.8787L3.51472 25.3934C2.92893 24.8076 1.97918 24.8076 1.3934 25.3934C0.80761 25.9792 0.80761 26.9289 1.3934 27.5147L10.9393 37.0607ZM10.5 -6.55671e-08L10.5 36L13.5 36L13.5 6.55671e-08L10.5 -6.55671e-08Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
