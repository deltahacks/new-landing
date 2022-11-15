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

const LandingPage = () => {
  const Islands = () => <>
    <img
      className="absolute top-[55vh] sm:top-[90vh] lg:top-[120vh] z-20 w-1/4 object-cover duration-1000"
      style={{ left: 0 }}
      src={snowyIslandBlurriest}
      alt="snowy-island-blurriest.png"
    />
    <img
      className="absolute top-[65vh] sm:top-[95vh] z-0 w-3/5 lg:w-2/5 object-cover duration-1000"
      style={{ right: 0 }}
      src={snowyIslandBlurred}
      alt="snowy-island-blurred.png"
    />
    <img
      className="absolute top-[110vh] sm:top-[170vh] z-0 lg:z-20 w-2/3 lg:w-1/2 object-cover duration-1000"
      style={{ right: 0 }}
      src={snowyIsland}
      alt="snowy-island.png"
    />
    <img
      className="absolute top-[200vh] lg:top-[230vh] z-0 lg:z-30 w-2/3 lg:w-1/2 object-cover duration-1000"
      style={{ left: 0 }}
      src={greenIsland}
      alt="green-island.png"
    />
    <img
      className="absolute top-[220vh] lg:top-[230vh] z-0 lg:z-30 w-1/4 lg:w-1/4 object-cover duration-1000"
      style={{ right: 0 }}
      src={greenIslandBlurred}
      alt="green-island.png"
    />
  </>;

  return (
    <div className="font-minecraft relative overflow-hidden">
      <Navigation />
      <Intro />
      <Carousel />
      <Statistics />
      <Islands />
    </div>
  );
};

export default LandingPage;
