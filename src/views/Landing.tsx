import Navigation from "../components/navigation/navigation";
import Caroussel from "../components/carrousel/Caroussel";
import Intro from "../views/Intro"

// Images
import snowyIsland from "../../public/snowy-island.png";
import snowyIslandBlurred from "../../public/snowy-island-blurred.png";
import snowyIslandBlurriest from "../../public/snowy-island-blurriest.png";


const LandingPage = () => {
  return (
    <div className="font-minecraft relative">
      <Navigation />
      <Intro />
      <Caroussel />
      <img
        className="absolute top-[105vh] sm:top-[120vh] z-20 w-1/4 object-cover "
        style={{ left: 0 }}
        src={snowyIslandBlurriest} alt="snowy-island-blurriest.png"
      />
      <img
        className="absolute top-[105vh] sm:top-[95vh] z-0 w-3/5 sm:w-2/5 object-cover "
        style={{ right: 0 }}
        src={snowyIslandBlurred} alt="snowy-island-blurred.png"
      />
      <img
        className="absolute top-[175vh] sm:top-[157vh] z-0 sm:z-20 w-2/3 sm:w-1/2 object-cover "
        style={{ right: 0 }}
        src={snowyIsland} alt="snowy-island.png"
      />
    </div>
  );
};

export default LandingPage;
