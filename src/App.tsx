import { useState } from "react";
import Navigation from "./components/navigation/navigation";
import LandingPage from "./views/Landing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <LandingPage />
      <Navigation />
    </div>
  );
}

export default App;
