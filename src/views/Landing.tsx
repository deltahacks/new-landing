import Navigation from "../components/navigation/navigation";
import Carousel from "../components/carousel/Carousel";
import Intro from "../views/Intro";
import Statistics from "./Statistics";

// Images
import snowyIsland from "../../public/snowy-island.png";
import snowyIslandBlurred from "../../public/snowy-island-blurred.png";
import snowyIslandBlurriest from "../../public/snowy-island-blurriest.png";
import greenIsland from "../../public/green-island.png";
import greenIslandBlurred from "../../public/green-island-blurred.png";
import Faq from "../components/faq/Faq";
import Sponsors from "../components/sponsors/Sponsors";

const LandingPage = () => {
  const Island = ({
    img,
    dimensions,
    position,
  }: {
    img: string;
    dimensions: string;
    position: { left?: number; right?: number };
  }) => (
    <>
      <img
        className={`absolute ${dimensions} pointer-events-none object-cover duration-1000`}
        style={position}
        src={img}
        alt={img.substring(img.lastIndexOf("/") + 1)}
      />
    </>
  );

  const Islands = () => (
    <>
      <Island
        img={snowyIslandBlurriest}
        dimensions={"top-[80vh] sm:top-[90vh] lg:top-[120vh] z-20 w-1/4"}
        position={{ left: 0 }}
      />
      <Island
        img={snowyIslandBlurred}
        dimensions={"top-[85vh] sm:top-[110vh] z-0 w-3/5 lg:w-2/5"}
        position={{ right: 0 }}
      />
      <Island
        img={snowyIsland}
        dimensions={"top-[135vh] sm:top-[180vh] z-0 lg:z-20 w-2/3 lg:w-1/2"}
        position={{ right: 0 }}
      />
      <Island
        img={greenIsland}
        dimensions={
          "top-[175vh] sm:top-[225vh] lg:top-[225vh] z-0 w-2/3 lg:w-1/2"
        }
        position={{ left: 0 }}
      />
      <Island
        img={greenIslandBlurred}
        dimensions={
          "top-[195vh] sm:top-[245vh] lg:top-[235vh] z-30 w-1/4 lg:w-1/4"
        }
        position={{ right: 0 }}
      />
    </>
  );

  return (
    <div className="font-minecraft relative overflow-hidden">
      <Navigation />
      <Intro />
      <Carousel />
      <Statistics />
      <Islands />
      <Faq />
      <Sponsors />
    </div>
  );
};

export default LandingPage;
