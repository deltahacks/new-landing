import {SocialIcon} from "../navigation/navigation";

import Discord from "../../../public/Discord.svg";
import Instagram from "../../../public/Instagram2.svg";

interface Props {
  id: number;
  statistics: {name: string, statistic: string}[];
  activePaneState: [number, (opened: number) => void];
}

const StatisticsPane = ({ id, statistics, activePaneState }: Props) => {
  const [activePane, setActivePane] = activePaneState;

  const socialIcons = {
    Discord: {
      img: Discord,
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    Instagram: {
      img: Instagram,
      url: "https://www.instagram.com/deltahacks/?hl=en",
    },
  };

  let position = "";
  if (id!==activePane) {
    if (id===0) {
      position = "-translate-x-full";
    } else if (id==1) {
      position = "translate-x-full";
    }
  }

  return (
      <div
        className={`absolute h-64 lg:h-96 w-fit x-5 p-10 lg:p-16
        flex flex-row space-x-5
        bg-gradient-to-b from-orange-900 to-stone-900
        duration-500 ${position}`}
        style={{right: 0}}
      >
        {statistics.map((statistic, i) => {
          return <div
            key={i}
            className="h-full w-fit text-white px-4 py-8 lg:px-6 lg:py-11
            grid auto-cols-auto grid-rows-1
            bg-gradient-to-b from-amber-400 to-orange-400 duration-500"
          >
            {statistic.name!=="discord"
              ? <>
                  <h1 className="text-6xl lg:text-8xl duration-500">{statistic.statistic}</h1>
                  <br />
                  <h4 className="text-2xl lg:text-3xl uppercase duration-500">{statistic.name}</h4>
              </> : <>
                {Object.entries(socialIcons).map(([key, value]) => (
                  <SocialIcon key={key} title={key} logo={value.img} url={value.url} dimensions="w-12 lg:w-16 duration-500" />
                ))}
            </>}
          </div>;
        })}

        <div className="flex flex-col justify-center items-center">
          <div
            className={`duration-500 ${!activePane && "rotate-180"}`}
            onClick={() => setActivePane(activePane ? 0 : 1)}
            style={{
              width: 0,
              height: 0,
              borderTop: "40px solid transparent",
              borderBottom: "40px solid transparent",
              borderLeft: "50px solid #FBB226",
            }} />
        </div>
      </div>
  );
};

export default StatisticsPane;
