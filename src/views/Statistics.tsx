import {useState} from "react";

import StatisticsPane from "../components/statistics/StatisticsPane";

const Statistics = () => {
  const [activePane, setActivePane] = useState(0);

  const statistics = [[
      { name: "hours", statistic: "24" },
      { name: "mentors", statistic: "55" },
      { name: "commits", statistic: "390" },
    ], [
      { name: "hackers", statistic: "800" },
      { name: "projects", statistic: "200" },
      { name: "discord", statistic: "instagram" },
    ]
  ];

  return (
    <div className="min-h-screen w-full flex justify-center flex-col relative overflow-hidden">
      {statistics.map((statistic, i) =>
        <StatisticsPane key={i} id={i} statistics={statistic} activePaneState={[activePane, setActivePane]} />
      )}
    </div>);
}

export default Statistics;
