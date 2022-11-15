import { SocialIcon } from "../navigation/navigation";

import Discord from "../../../public/Discord.svg";
import Instagram from "../../../public/Instagram2.svg";

interface Props {
  id: number;
  statistics: { name: string; statistic: string }[];
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
  if (id !== activePane) {
    if (id === 0) {
      position = "-translate-x-full";
    } else if (id == 1) {
      position = "translate-x-full";
    }
  }

  // arrow for moving between the two statistics panes
  const Arrow = ({
    dimensions,
    visibility,
  }: {
    dimensions: number;
    visibility: string;
  }) => (
    <div
      className={`${visibility} ${!activePane && "rotate-180"} duration-500`}
      onClick={() => setActivePane(activePane ? 0 : 1)}
      // tailwind doesn't allow for selective borders
      style={{
        width: 0,
        height: 0,
        borderTop: `${dimensions}px solid transparent`,
        borderBottom: `${dimensions}px solid transparent`,
        borderLeft: `${dimensions * 1.25}px solid #FBB226`,
      }}
    />
  );

  return (
    <div
      className={`absolute h-36 sm:h-64 lg:h-96 w-fit x-5 p-6 sm:p-10 lg:p-16 z-30
        flex flex-row space-x-3 sm:space-x-5
        bg-gradient-to-b from-orange-900 to-stone-900
        duration-500 ${position}`}
      style={{ right: 0 }}
    >
      {statistics.map((statistic, i) => {
        return (
          <div
            key={i}
            className="h-full w-fit text-white p-3 sm:px-4 sm:py-8 lg:px-6 lg:py-11
            grid auto-cols-auto grid-rows-1
            bg-gradient-to-b from-amber-400 to-orange-400 duration-500"
          >
            {statistic.name !== "discord" ? (
              <div className="flex justify-center items-center flex-col">
                <h1 className="text-3xl sm:text-6xl lg:text-8xl duration-500">
                  {statistic.statistic}
                </h1>
                <br className="hidden sm:block" />
                <h4 className="text-sm sm:text-2xl lg:text-3xl uppercase duration-500">
                  {statistic.name}
                </h4>
              </div>
            ) : (
              <>
                {Object.entries(socialIcons).map(([key, value]) => (
                  <SocialIcon
                    key={key}
                    title={key}
                    logo={value.img}
                    url={value.url}
                    dimensions="w-8 sm:w-12 lg:w-16 duration-500"
                  />
                ))}
              </>
            )}
          </div>
        );
      })}

      <div className="flex flex-col justify-center items-center">
        <Arrow dimensions={40} visibility={"hidden sm:block"} />
        <Arrow dimensions={20} visibility={"sm:hidden"} />
      </div>
    </div>
  );
};

export default StatisticsPane;
