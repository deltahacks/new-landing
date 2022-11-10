import Navigation from "../components/navigation/navigation";
import AboutUsPane from "../components/carrousel/about-us-pane";
import Intro from "../views/Intro"

const LandingPage = () => {
  return (
    <div>
      <Navigation />
      <Intro />
      <AboutUsPane />
    </div>
  );
};

export default LandingPage;
