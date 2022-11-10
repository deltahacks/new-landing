import AboutUsPane from "./about-us-pane";

const Carrousel = () => {
  return (
    <div className="px-8 sm:px-14">
      <div className="min-h-screen width-full relative flex items-center justify-center flex-col">
        <AboutUsPane>
          <h1 className="text-4xl">About Us</h1>
          <br />
          <p>
            At DeltaHacks, we believe change comes from dreaming big.
            Each year we enable over 800 students from across North America, working hard over 36 hours, to bring their big ideas to life.
            Our team works diligently year round to provide a welcoming atmosphere to all of our participants. DeltaHacks gives you the platform to make an idea a reality, whether it be with a team, or on your own.
            Unleash your creativity and make something great, we'll handle the rest! Make big ideas a reality at
            DeltaHacks 9!
          </p>
        </AboutUsPane>
      </div>
    </div>
  )
}

export default Carrousel;