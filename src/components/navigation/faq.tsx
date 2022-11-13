import { Tab } from '@headlessui/react'
import { Disclosure } from '@headlessui/react'
import { useState } from "react";
import Faqsubsection from "./faqSubsection"

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Faq = () => { 
    let categories = {
        GENERAL: [
          {
            id: 1,
            title: "What is a Hackathon?",
            info: "A hackathon is a type of technical competition! We provide our attendees with the opportunity to work with new people on cool ideas, and the resources necessary to make those ideas come to life. We do not condone, nor do we allow any actual hacking or other illegal activities! DeltaHacks is an official MLH event. The MLH code of conduct can be found here: http://mlh.io/code-of-conduct"
          },
          {
            id: 2,
            title: "What is Deltahacks?",
            info: "The word “delta Δ” stands for change, and we used this definition to name DeltaHacks - McMaster’s annual Hackathon for Change. This year, DeltaHacks will be an 800-participant event taking place the second weekend of Jan 2023. We hope to inspire students to hack for positive changes that align with their passions - whether it's for the environment, health, inequality, education, or more!"
          },
          {
            id: 3,
            title: "Who Can Participate?",
            info: "Anyone who is willing to learn and have fun! If you have an idea - or even if you don't, you're invited! All university and high school students over 13 during the date of the event are welcome at DeltaHacks!"
          },
          {
            id: 4,
            title: "I have never been to a hackathon before, what should I do?",
            info: "We love first time hackers! We will be providing mentors of all expertise during the hackathon and running workshops, so you’re welcome no matter your skill or experience level."
          },
          {
            id: 5,
            title: "How much does it cost?",
            info: "Absolutely nothing! All you need is a personal computer and internet connection as DeltaHacks will be online this year."
          }
        ],
        LOGISTICS: [
          {
              id: 6,
              title: "Will DeltaHacks 9 be in person or virtual?",
              info: "With the current outlook, DeltaHacks will be taking place in-person this year; however we will not include overnight stay. Our intended approach will be to have buses to and from McMaster on a daily basis during the duration of the event to help transport hackers."
            },
            {
              id: 7,
              title: "Will attendees still get awesome swag?",
              info: "Our team is working hard to get swag items ready to go and be sent out to attendees safely. So yes, there will be awesome swag for participants, mentors, and sponsors."
            },
            {
              id: 8,
              title: "What's the event schedule like?",
              info: "We'll be putting up one closer to the event, you can expect a lot of talks and presentations, fun events, and a lot of chances to meet new people and win prizes!"
            },
            {
              id: 9,
              title: "What kind of workshops, talks, and activities will there be?",
              info: "In previous hackathons, we’ve held numerous workshops and community building events. Workshops also explore various programming tools such as APIs, databases, and platforms like Intro to React Native. Activities like VR demos, meetups, and even cup stacking competitions will be held throughout the weekend! Including all types of experiences ranging from relaxation or health, novelty or competition, our team has something exciting prepared for you to enjoy!"
            },
            {
              id: 10,
              title: "What do I need to participate?",
              info: "As DeltaHacks 9 will be online, all you require is a computer and an internet connection! Also grab some yummy snacks and be ready to build some amazing projects!"
            }
        ],
        APPLICATIONS: [
            {
                id: 11,
                title: "What's the application deadline?",
                info: "Priority applications are due Friday, November 4, 2022. Apply by then for a better chance to be accepted!"
              },
              {
                id: 12,
                title: "How long will it be until I hear back about my application?",
                info: "Our team is working long and hard to mark incoming applications. All decisions are sent out at the same time to your personal emails, about a month after the deadline."
              }
          ],
          MISC: [
            {
                id: 13,
                title: "How big can a team be?",
                info: "Your team can be anywhere up to four people including you, that means you can hack totally alone or in a group of three others, the choice is yours."
              },
              {
                id: 14,
                title: "Do I have to have a team going into the event?",
                info: "Nope! If you do, great! If not, there will be opportunities to network before and during the event to find some other hackers to build a project with."
              },
              {
                id: 15,
                title: "What am I allowed to hack?",
                info: "Your hack can be absolutely anything! There will be certain challenges your team can work towards, and you can win amazing prizes (to be released later) if your submission wins the category!"
              },
              {
                id: 16,
                title: "How are projects judged?",
                info: "Projects are judged by event sponsors and experts from the tech sector. Projects are presented to judges at the exposition and evaluated on multiple factors such as presentation, creativity, practical application, and originality."
              }
          ]
        
      }
      /*let [openCategories, setOpenCategories] = useState(Array(16).fill(null).map((_, i) => [i, false]))
      // Object.values(categories).map((info) => (info.map((section) => [section.id, false])))
      /*function updateOpen(section: any}){
        setOpenCategories((prev: { [x: boolean]: any; }) => {
          return {...prev, prev[section] : !prev[section]}
        })
      }

      function updateOpen(indx: number){
        setOpenCategories(prev => {
          let newVal = [indx, !prev[indx][1]]
          /*let newArr = prev.map(function(a){
            if(a == indx){
              return false;
            }
            else return true;

          })
          console.log(prev)
          return({...prev.slice(0, indx), newVal, ...prev.slice(indx+1)})
        })
      } */
    return (
      <div className="w-4/5 py-10">
        <Tab.Group defaultIndex={0}>
          <div className="flex-box"> 
            <div className="justify-center align-center font-minecraft text-white md:text-3xl gap-x-10">
                {Object.keys(categories).map((category) => (
                <Tab
                key={category}
                className={({ selected }) =>
                classNames(
                  "px-12 py-2 md:px-10 md:py-5",
                  "focus:outline-none",
                  selected
                    ? "bg-[#8e8e8e] h-100% shadow-[inset_-5px_-5px_0px_rgb(113,113,113),inset_5px_5px_0px_rgb(177,177,177)]"
                    : "mBG"
                )
              }
                >
                {category}
                </Tab>
            
            ))}
            </div>
            </div>
            <Tab.Panels className="mt-5">
                {Object.values(categories).map((info, idx) => (
                    <Tab.Panel key={idx} className="flex-box space-y-5 font-minecraft text-white md:text-3xl"> 
                        {info.map((section) => (
                            <Faqsubsection id={section.id} title={section.title} info={section.info} />
                          /*<div className={openCategories[section.id] ? 'bg-[#8e8e8e] h-100% shadow-[inset_-5px_-5px_0px_rgb(113,113,113),inset_5px_5px_0px_rgb(177,177,177)]':'mBG'}>
                            <Disclosure >
                              <Disclosure.Button onPointerUp={() => {updateOpen(section.id)}} className={({ open }) =>
                                  classNames(
                                  "px-12 py-4 md:px-10 md:py-5 text-left",
                                  "focus:outline-none",
                                  /*open
                                    ? "${section.open = !section.open}"
                                    : ""
                                )
              }>
                                <span >{section.title}{section.id}</span>
                              </Disclosure.Button>
                              <Disclosure.Panel className="px-12 py-6 md:px-20 md:py-15 pt-0">
                                {section.info}
                              </Disclosure.Panel>
                            </Disclosure>
                          </div> */
                        ))}
                          
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
      </div>
    )
    
}

export default Faq;

/* font-minecraft text-white md:text-3xl" */