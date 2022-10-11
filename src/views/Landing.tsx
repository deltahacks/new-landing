import logoImage from "../../public/assets/logo.svg";
import mlh from "../../public/assets/mlh.svg";
import Navigation from "../components/navigation/navigation";

const LandingPage = () => {
  return (
    <div>
      <Navigation />
      <div className="relative flex items-center justify-center flex-col font-minecraft p-14 min-h-screen ">
        <div>
          <img src={logoImage} className="w-full h-full" alt="logo"></img>
          <div className="flex flex-row sm:pl-24 justify-end items-center mr-36">
            <img src={mlh} className="w-auto h-4" />
            <span className="text-sm pl-1 pt-1 whitespace-nowrap">
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
            <div className="mBG px-12 py-2">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-white text-center text-2xl tracking-wider"
              >
                JOIN OUR MAILING LIST
              </a>
            </div>
            <div className="mBG px-12 py-2 mt-3">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-white text-center text-2xl tracking-wider "
              >
                APPLY NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
