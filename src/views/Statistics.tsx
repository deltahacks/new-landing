import {useState} from "react";

import StatisticsPane from "../components/statistics/StatisticsPane";

const Statistics = () => {
  const [opened, setOpened] = useState(false);

  const statistics1 = [
    { name: "hours", statistic: "24" },
    { name: "mentors", statistic: "55" },
    { name: "commits", statistic: "390" },
  ]

  const statistics2 = [
    { name: "hackers", statistic: "800" },
    { name: "projects", statistic: "200" },
    { name: "discord", statistic: "instagram" },
  ]

  return (
    <div className="min-h-screen w-full flex justify-center flex-col relative overflow-hidden">
      <StatisticsPane statistics={statistics1} opened={opened} />
      <StatisticsPane statistics={statistics2} opened={!opened} />
    </div>);
}

export default Statistics;
