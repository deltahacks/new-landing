import Navigation from "../components/navigation/navigation";
import Caroussel from "../components/carrousel/Caroussel";
import Intro from "../views/Intro";

// Images
import snowyIsland from "../../public/snowy-island.png";
import snowyIslandBlurred from "../../public/snowy-island-blurred.png";
import snowyIslandBlurriest from "../../public/snowy-island-blurriest.png";

const LandingPage = () => {
  return (
    <div className="font-minecraft relative overflow-hidden">
      <Navigation />
      <Intro />
      <Caroussel />
      <img
        className="absolute top-[97vh] md:top-[90vh] lg:top-[120vh] z-20 w-1/4 object-cover duration-1000"
        style={{ left: 0 }}
        src={snowyIslandBlurriest}
        alt="snowy-island-blurriest.png"
      />
      <img
        className="absolute top-[105vh] lg:top-[95vh] z-0 w-3/5 lg:w-2/5 object-cover duration-1000"
        style={{ right: 0 }}
        src={snowyIslandBlurred}
        alt="snowy-island-blurred.png"
      />
      <img
        className="absolute top-[175vh] lg:top-[170vh] z-0 lg:z-20 w-2/3 lg:w-1/2 object-cover duration-1000"
        style={{ right: 0 }}
        src={snowyIsland}
        alt="snowy-island.png"
      />
    </div>
  );
};

export default LandingPage;
