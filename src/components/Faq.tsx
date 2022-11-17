import { Tab } from "@headlessui/react";
import { Disclosure } from "@headlessui/react";
import { useEffect, useRef, useState } from "react";
import Faqsubsection from "./FaqSubsection";
import autoAnimate from "@formkit/auto-animate";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
const categories = {
  General: [
    {
      title: "What is a Hackathon?",
      info: "A hackathon is a type of technical competition! We provide our attendees with the opportunity to work with new people on cool ideas, and the resources necessary to make those ideas come to life. We do not condone, nor do we allow any actual hacking or other illegal activities! DeltaHacks is an official MLH event. The MLH code of conduct can be found here: http://mlh.io/code-of-conduct",
    },
    {
      title: "What is Deltahacks?",
      info: "The word “delta Δ” stands for change, and we used this definition to name DeltaHacks - McMaster’s annual Hackathon for Change. This year, DeltaHacks will be an 800-participant event taking place the second weekend of Jan 2023. We hope to inspire students to hack for positive changes that align with their passions - whether it's for the environment, health, inequality, education, or more!",
    },
    {
      title: "Who Can Participate?",
      info: "Anyone who is willing to learn and have fun! If you have an idea - or even if you don't, you're invited! All university and high school students over 13 during the date of the event are welcome at DeltaHacks!",
    },
    {
      title: "I have never been to a hackathon before, what should I do?",
      info: "We love first time hackers! We will be providing mentors of all expertise during the hackathon and running workshops, so you’re welcome no matter your skill or experience level.",
    },
    {
      title: "How much does it cost?",
      info: "Absolutely nothing! All you need is a personal computer and internet connection as DeltaHacks will be online this year.",
    },
  ],
  Logistics: [
    {
      title: "Will DeltaHacks 9 be in person or virtual?",
      info: "With the current outlook, DeltaHacks will be taking place in-person this year; however we will not include overnight stay. Our intended approach will be to have buses to and from McMaster on a daily basis during the duration of the event to help transport hackers.",
    },
    {
      title: "Will attendees still get awesome swag?",
      info: "Our team is working hard to get swag items ready to go and be sent out to attendees safely. So yes, there will be awesome swag for participants, mentors, and sponsors.",
    },
    {
      title: "What's the event schedule like?",
      info: "We'll be putting up one closer to the event, you can expect a lot of talks and presentations, fun events, and a lot of chances to meet new people and win prizes!",
    },
    {
      title: "What kind of workshops, talks, and activities will there be?",
      info: "In previous hackathons, we’ve held numerous workshops and community building events. Workshops also explore various programming tools such as APIs, databases, and platforms like Intro to React Native. Activities like VR demos, meetups, and even cup stacking competitions will be held throughout the weekend! Including all types of experiences ranging from relaxation or health, novelty or competition, our team has something exciting prepared for you to enjoy!",
    },
    {
      title: "What do I need to participate?",
      info: "As DeltaHacks 9 will be online, all you require is a computer and an internet connection! Also grab some yummy snacks and be ready to build some amazing projects!",
    },
  ],
  Applications: [
    {
      title: "What's the application deadline?",
      info: "Priority applications are due Friday, November 4, 2022. Apply by then for a better chance to be accepted!",
    },
    {
      title: "How long will it be until I hear back about my application?",
      info: "Our team is working long and hard to mark incoming applications. All decisions are sent out at the same time to your personal emails, about a month after the deadline.",
    },
  ],
  Misc: [
    {
      title: "How big can a team be?",
      info: "Your team can be anywhere up to four people including you, that means you can hack totally alone or in a group of three others, the choice is yours.",
    },
    {
      title: "Do I have to have a team going into the event?",
      info: "Nope! If you do, great! If not, there will be opportunities to network before and during the event to find some other hackers to build a project with.",
    },
    {
      title: "What am I allowed to hack?",
      info: "Your hack can be absolutely anything! There will be certain challenges your team can work towards, and you can win amazing prizes (to be released later) if your submission wins the category!",
    },
    {
      title: "How are projects judged?",
      info: "Projects are judged by event sponsors and experts from the tech sector. Projects are presented to judges at the exposition and evaluated on multiple factors such as presentation, creativity, practical application, and originality.",
    },
  ],
};
const Faq = () => {
  const parent = useRef(null);
  const toScroll = useRef<HTMLDivElement>(null);

  // check if the url contains the faq hash
  // and scroll into view
  useEffect(() => {
    if (window.location.hash === "#faq") {
      if (toScroll?.current) {
        toScroll.current.scrollIntoView();
      }
    }
  }, [toScroll, window.location.hash]);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <div className="lg:w-full sm:px-48 py-10">
      <div className="p-12 pt-0 md:pl-80 text-white">
        <div className=" shadow-none outline-none transform px-12 py-2 md:px-10 md:py-4 text-center focus:bg-transparent text-xl md:text-3xl">
          Frequently Asked<div>Questions</div>
        </div>
        <div className="text-center text-2xl md:text-4xl align-middle rotate-90 transform">
          {">"}
        </div>
      </div>
      <div
        className="md:pt-[10em] min-h-[40em] px-4 md:px-0"
        id="faq"
        ref={toScroll}
      >
        <Tab.Group defaultIndex={0}>
          <div className="gap-x-1">
            <div className="flex flex-wrap lg:flex-nowrap justify-center w-full align-center font-minecraft text-white md:text-xl gap-5">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "text-center p-4 md:py-4 md:px-8 h-full w-full md:w-[45%] lg:w-1/4 focus:outline-none",
                      selected
                        ? "bg-[#8e8e8e] shadow-[inset_-5px_-5px_0px_rgb(113,113,113),inset_5px_5px_0px_rgb(177,177,177)]"
                        : "bg-[#606060] shadow-[inset_-5px_-5px_0px_rgba(74,74,74),inset_5px_5px_0px_rgb(169,169,169)]"
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </div>
          </div>
          <div className="h-[2px] bg-white opacity-40 w-full my-8 md:hidden"></div>
          <Tab.Panels className="mt-5" ref={parent}>
            {Object.values(categories).map((info, idx) => (
              <Tab.Panel
                key={idx}
                className="flex-box space-y-5 font-minecraft text-white md:text-1xl"
              >
                {info.map((section, index) => (
                  <Faqsubsection
                    key={index}
                    title={section.title}
                    info={section.info}
                  />
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Faq;
