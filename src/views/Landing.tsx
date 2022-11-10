import Navigation from "../components/navigation/navigation";
import Caroussel from "../components/carrousel/Caroussel";
import Intro from "../views/Intro"

const LandingPage = () => {
  return (
    <div className="font-minecraft">
      <Navigation />
      <Intro />
      <Caroussel />
    </div>
  );
};

export default LandingPage;
