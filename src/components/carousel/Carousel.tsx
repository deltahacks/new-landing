import { useState, useEffect } from "react";
import CarouselPane from "./CarouselPane";
import { mod } from "../../util";

const Carousel = () => {
  const [activePane, setActivePane] = useState(0);
  const [animateArrows, setAnimateArrows] = useState(-5);

  const carousel = [
    {
      title: "About Us",
      desktopDescription: [
        "At DeltaHacks, we believe change comes from dreaming big.",
        "Each year we enable over 800 students from across North America, working hard over 36 hours, to bring their big ideas to life.",
        "Our team works diligently year round to provide a welcoming atmosphere to all of our participants. DeltaHacks gives you the platform to make an idea a reality, whether it be with a team, or on your own.",
        "Unleash your creativity and make something great, we'll handle the rest! Make big ideas a reality at",
        "DeltaHacks 9!",
      ],
      mobileDescription: [
        "At DeltaHacks, we believe change comes from dreaming big.",
        "Each year we enable 800+ students across North America to bring their big ideas to life.",
        "Our team works year round to give the platform to make an idea a reality.",
        "Unleash your creativity, at DeltaHacks 9!",
      ],
    },
    {
      title: "The Hackathon for Change",
      desktopDescription: [
        "DeltaHacks is the annual hackathon for change, it's even in the name!",
        "The primary focus of DeltaHacks is to enable hackers from all over to make a positive change in any field! We work with McMaster University to welcome hackers of all levels!",
        "We work with McMaster University to welcome hackers of all levels, from the novice to the most experienced! We supply the food, venue, and workshops to provide even the most seasoned veterans with new experiences.",
        "Now in our 9th year running, DeltaHacks 9 is our biggest and best DeltaHacks yet. Join us this January and take part in an experience you won’t forget!",
      ],
      mobileDescription: [
        "DeltaHacks is the annual hackathon for change.",
        "The primary focus of DeltaHacks is to enable hackers from all over to make a positive change in any field! We work with McMaster University to welcome hackers of all levels!",
        // "Now in our 9th year running, DeltaHacks 9 is our biggest and best yet. Join us this January for an experience you won’t forget!",
      ],
    },
    {
      title: "Past Hacks",
      desktopDescription: [
        "Environmental Hacks works towards a more sustainable future, from reducing emissions and overall global warming potential to helping individuals make more conscious and environmentally friendly choices!",
        "The Education Hack aims to empower students, professors, and other people in academia to create technological solutions to augment learning.",
        "With the curriculum shifting gears to integrate more technology in all fields, it is crucial that we adapt by developing teaching tools that can support our students and teachers.",
      ],
      mobileDescription: [
        "Environmental Hacks works towards a sustainable future from educating individuals to globally reducing emissions.",
        "The Education Hack empowers people in academia to create technological solutions for learning.",
      ],
    },
    {
      title: "More Hacks!",
      desktopDescription: [
        "Our Health Hack has helped students think about impacting other industries that could use the solutions they create to save lives! With the many changes to modern medicine happening everyday, it only makes sense that the integration of technology in modern medicine is vital to enabling the industry to grow.",
        "The Productivity Hack is a hack we conceived to boost the work you could get done in a day, or perhaps just create something that could make a lot of people's lives significantly easier!",
      ],
      mobileDescription: [
        "Our Health Hack has helped students think about impacting other industries to save lives! The integration of technology into modern medecine is vital the growth of the industry.",
        "The Productivity Hack is about boosting daily productivity, or making people's lives significantly easier!",
      ],
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setAnimateArrows(-animateArrows);
    }, 1000);
  }, [animateArrows]);

  return (
    <div className="px-8 sm:px-14 overflow-hidden">
      <div className="min-h-screen w-full relative flex items-center justify-center flex-col">
        {carousel.map((pane, id) => (
          <CarouselPane
            key={id}
            id={id}
            numPanes={carousel.length}
            activePane={activePane}
          >
            <div className="hidden sm:block space-y-4">
              <h1 className="text-4xl">{pane.title}</h1>
              <br />
              {pane.desktopDescription.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
            <div className="sm:hidden space-y-4 text-sm">
              <h1 className="text-3xl">{pane.title}</h1>
              {pane.mobileDescription.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </CarouselPane>
        ))}
        <div className="absolute t-0 r-0 b-0 l-0 m-auto h-4/6 sm:h-3/5 w-full max-w-4xl">
          <div className="z-40 relative h-full w-full">
            <button
              className="text-6xl font-bold text-yellow-300 duration-1000"
              // for some reason doesn't work in tailwind
              style={{
                textShadow:
                  "-3px -3px black, -3px 3px black, 3px 3px black, 3px -3px black",
                position: "absolute",
                top: "50%",
                transform: `translate(${-animateArrows}px, -50%)`,
              }}
              onClick={() =>
                setActivePane(mod(activePane - 1, carousel.length))
              }
            >
              {"<"}
            </button>
            <button
              className="text-6xl font-bold text-yellow-300 duration-1000"
              style={{
                textShadow:
                  "-3px -3px black, -3px 3px black, 3px 3px black, 3px -3px black",
                position: "absolute",
                top: "50%",
                right: "0",
                transform: `translate(${animateArrows}px, -50%)`,
              }}
              onClick={() =>
                setActivePane(mod(activePane + 1, carousel.length))
              }
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
