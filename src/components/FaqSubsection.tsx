import { Disclosure } from "@headlessui/react";
import React, { useEffect, useRef, useState } from "react";
import autoAnimate from "@formkit/auto-animate";

interface FaqSubsectionProps {
  title: string;
  info: string;
}

const FaqSubsection: React.FC<FaqSubsectionProps> = ({ title, info }) => {
  const [open, setOpen] = useState<boolean>(false);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <div
      className={
        open
          ? "bg-[#8e8e8e] h-100% shadow-[inset_-5px_-5px_0px_rgb(113,113,113),inset_5px_5px_0px_rgb(177,177,177)] z-50"
          : "bg-[#606060] h-full w-auto shadow-[inset_-5px_-5px_0px_rgba(74,74,74),inset_5px_5px_0px_rgb(169,169,169)] z-50"
      }
      ref={parent}
    >
      <Disclosure>
        <Disclosure.Button
          onPointerUp={() => {
            setOpen(!open);
          }}
          className="w-full h-full px-12 py-4 md:px-10 md:py-5 text-left focus:outline-none"
        >
          <span>{title}</span>
        </Disclosure.Button>
        <Disclosure.Panel className="px-12 py-6 md:px-20 md:py-15 pt-0">
          {info}
        </Disclosure.Panel>
      </Disclosure>
    </div>
  );
};

export default FaqSubsection;
