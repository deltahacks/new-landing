import {SocialIcon} from "../navigation/navigation";

import Discord from "../../../public/Discord.svg";
import Instagram from "../../../public/Instagram2.svg";

interface Props {
  statistics: {name: string, statistic: string}[];
  opened: boolean;
}

const StatisticsPane = ({ statistics, opened }: Props) => {

  const socialIcons = {
    Discord: {
      img: Discord,
      url: "N/A",
    },
    Instagram: {
      img: Instagram,
      url: "https://www.instagram.com/deltahacks/?hl=en",
    },
  };

  return (
      <div
        className={`absolute h-fit w-fit x-5 p-10 lg:p-16
        flex flex-row space-x-5
        bg-gradient-to-b from-orange-900 to-stone-900
        duration-500`}
        style={{right: 0}}
      >
        {statistics.map((statistic, i) => {
          return <div
            key={i}
            className="h-full w-fit text-white px-4 py-8 lg:px-6 lg:py-11
            flex justify-content items-center flex-col
            bg-gradient-to-b from-amber-400 to-orange-400 duration-500"
          >
            {statistic.name!=="discord"
              ? <>
                  <h1 className="text-6xl lg:text-8xl">{statistic.statistic}</h1>
                  <br />
                  <h4 className="text-2xl lg:text-3xl uppercase">{statistic.name}</h4>
              </> :
                <div className="flex flex-col justify-center align-center">
                  {Object.entries(socialIcons).map(([key, value]) => (
                    <SocialIcon key={key} title={key} logo={value.img} url={value.url} />
                  ))}
                </div>
            }
          </div>;
        })}

        <div className="flex flex-col justify-center items-center">
          <div
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
