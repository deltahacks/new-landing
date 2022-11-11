interface Props {
  children: JSX.Element[] | JSX.Element | string;
  id: number;
  numPanes: number;
  activePane: number;
};

const mod = (k:number, n: number): number => {
  let res = k%n;
  if (res<0) {
    return res+n;
  } else {
    return res;
  }
}

const CarousselPane = ({children, id, numPanes, activePane}: Props) => {
  let style;
  // Active pane
  if (id==activePane) {
    style = "opacity-100 scale-100 z-20"

  // Left inactive
  } else if (id==mod(activePane-1, numPanes)) {
    style = "translate-x-3/4 scale-75 duration-500 z-10"

  // Right inactive
  } else if (id==mod(activePane+1, numPanes)) {
    style = "-translate-x-3/4 scale-75 duration-500 z-10"

  // default
  } else {
    style = "opacity-100 opacity-30 scale-50 z-0"
  }

  return (<>
    <div className={`absolute t-0 r-0 b-0 l-0 m-auto h-4/6 sm:h-3/5 w-full max-w-3xl p-3
      bg-gradient-to-b from-white to-zinc-400
      duration-500 ${style}`}>
      <div className="h-full w-full text-white p-8 sm:p-11
        bg-gradient-to-b from-neutral-600 to-neutral-800">
        {children}
      </div>
    </div>
  </>);
}

export default CarousselPane;
