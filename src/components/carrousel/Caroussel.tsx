import {useState} from "react";
import CarousselPane from "./CarousselPane";

// ! not adaptive enough for IPHONE SE or samsung galaxy s8+
const Carrousel = () => {
  const [activePane, setActivePane] = useState(0);
  const [numPanes, setNumPanes] = useState(4);

  // TODO put title and descriptions in an object and iterate through that

  return (
    <div className="px-8 sm:px-14 overflow-hidden">
      <div className="min-h-screen width-full relative flex items-center justify-center flex-col">
        <CarousselPane id={0} numPanes={numPanes} activePane={activePane}>
          <div className="hidden sm:block space-y-4">
            <h1 className="text-4xl">About Us</h1>
            <br />
            <p>At DeltaHacks, we believe change comes from dreaming big.</p>
            <p>Each year we enable over 800 students from across North America, working hard over 36 hours, to bring their big ideas to life.</p>
            <p>Our team works diligently year round to provide a welcoming atmosphere to all of our participants. DeltaHacks gives you the platform to make an idea a reality, whether it be with a team, or on your own.</p>
            <p>Unleash your creativity and make something great, we'll handle the rest! Make big ideas a reality at</p>
            <p>DeltaHacks 9!</p>
          </div>
          <div className="sm:hidden space-y-4 text-sm">
            <h1 className="text-3xl">About Us</h1>
            <p>At DeltaHacks, we believe change comes from dreaming big.</p>
            <p>Each year we enable 800+ students across North America to bring their big ideas to life.</p>
            <p>Our team works diligently year round to give you the platform to make an idea a reality.</p>
            <p>Unleash your creativity and make something great, we'll handle the rest! Make big ideas a reality at</p>
            <p>DeltaHacks 9!</p>
          </div>
        </CarousselPane>
        <CarousselPane id={1} numPanes={numPanes} activePane={activePane}>
          <div className="hidden sm:block space-y-4">
            <h1 className="text-4xl">The Hackathon for Change</h1>
            <br />
            <p>DeltaHacks is the annual hackathon for change, it's even in the name!</p>
            <p>The primary focus of DeltaHacks is to enable hackers from all over to make a change, whether it be in education, environment, health or any other field, we're extremely passionate about hacking to make a positive change!</p>
            <p>We work with McMaster University to welcome hackers of all levels, from the novice to the most experienced! We supply the food, venue, and workshops to provide even the most seasoned veterans with new experiences.</p>
            <p>Now in our 9th year running, DeltaHacks 9 is our biggest and best DeltaHacks yet. Join us this January and take part in an experience you won’t forget!</p>
          </div>
          <div className="sm:hidden space-y-4 text-sm">
            <h1 className="text-3xl">The Hackathon for Change</h1>
            <p>DeltaHacks is the annual hackathon for change.</p>
            <p>The primary focus of DeltaHacks is to enable hackers from all over to make a positive change in any field! We work with McMaster University to welcome hackers of all levels!</p>
            <p>Now in our 9th year running, DeltaHacks 9 is our biggest and best yet. Join us this January for an experience you won’t forget!</p>
          </div>
        </CarousselPane>
        <CarousselPane id={2} numPanes={numPanes} activePane={activePane}>
          <div className="hidden sm:block space-y-4">
            <h1 className="text-4xl">Some of the Hacks we've done</h1>
            <br />
            <p>Environmental Hacks to work towards a more sustainable future, from reducing emissions and overall global warming potential to helping individuals make more conscious and environmentally friendly choices!</p>
            <p>The Education hack aims to empower students, professors, and other people in academia to create technological solutions to augment learning.</p>
            <p>With the curriculum shifting gears to integrate more technology in all fields, it is crucial that we adapt by developing teaching tools that can support our students and teachers.</p>
          </div>
          <div className="sm:hidden space-y-4 text-sm">
            <h1 className="text-3xl">Some of our Hacks</h1>
            <p>Environmental Hacks to work towards a more sustainable future from educating individuals to globally reducing emissions.</p>
            <p>The Education hack aims to empower people in academia to create technological solutions to augment learning.</p>
            <p>With the increasing integration of tech in education, we must adapt by developing tools for students and teachers.</p>
          </div>
        </CarousselPane>
        <CarousselPane id={3} numPanes={numPanes} activePane={activePane}>
          <div className="hidden sm:block space-y-4">
            <h1 className="text-4xl">More Hacks!</h1>
            <br />
            <p>Our Health Hack has helped students think about impacting other industries that could use the solutions they create to save lives! With the many changes to modern medicine happening everyday, it only makes sense that the integration of technology in modern medicine is vital to enabling the industry to grow.</p>
            <p>The Productivity Hack is a hack we conceived to boost</p>
            <p>the work you could get done in a day, or perhaps just create something that could make a lot of peoples lives significantly easier!</p>
          </div>
          <div className="sm:hidden space-y-4 text-sm">
            <h1 className="text-3xl">More Hacks!</h1>
            <p>Our Health Hack has helped students think about how they could impact other industries to save lives! The integration of technology into modern medecine is vital to enabling the industry to grow.</p>
            <p>The Productivity Hack is a hack we conceived to boost</p>
            <p>the work you could get done in a day, or perhaps just create something that could make a lot of peoples lives significantly easier!</p>
          </div>
        </CarousselPane>
        <button
          className="w-44 h-44 z-40 bg-slate-700"
          onClick={() => setActivePane((activePane+1) % numPanes)} 
        />
      </div>
    </div>
  )
}

export default Carrousel;