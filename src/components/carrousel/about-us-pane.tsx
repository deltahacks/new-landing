interface Props {
  children: JSX.Element[] | JSX.Element | string;
};

const AboutUsPane = ({children}: Props) => {

  return (<>
    <div className="absolute t-0 r-0 b-0 l-0 m-auto h-4/6 sm:h-96 w-full max-w-3xl p-3
      bg-gradient-to-b from-white to-zinc-400">
      <div className="h-full w-full text-white p-11
        bg-gradient-to-b from-neutral-600 to-neutral-800">
        {children}
      </div>
    </div>
  </>);
}

export default AboutUsPane;
