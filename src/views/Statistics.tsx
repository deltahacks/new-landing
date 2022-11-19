import { useState } from "react";

import StatisticsPane from "../components/statistics/StatisticsPane";

const Statistics = () => {
  const [activePane, setActivePane] = useState(0);

  const statistics = [
    [
      { name: "hours", statistic: "36" },
      { name: "mentors", statistic: "55" },
      { name: "commits", statistic: "390" },
    ],
    [
      { name: "hackers", statistic: "800" },
      { name: "projects", statistic: "200" },
      { name: "discord", statistic: "instagram" },
    ],
  ];

  return (
    <div className="min-h-[50vh] sm:min-h-screen w-full z-30 flex justify-center flex-col relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 m-auto text-white">
        <div className="text-shadow outline-none transform px-12 py-2 md:px-10 md:py-4 text-center focus:bg-transparent text-xl">
          Our Statistics
        </div>
        <div className="text-shadow text-center text-2xl md:text-4xl align-middle rotate-90 transform">
          {">"}
        </div>
      </div>
      {statistics.map((statistic, i) => (
        <StatisticsPane
          key={i}
          id={i}
          statistics={statistic}
          activePaneState={[activePane, setActivePane]}
        />
      ))}
    </div>
  );
};

export default Statistics;
