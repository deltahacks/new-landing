import { Disclosure } from "@headlessui/react";
import React, { useState } from "react";
import RBC from "../../public/RBC.png";
import Uizard from "../../public/Uizard.png";
import Arcelor from "../../public/ArcelorMittal.png";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Sponsors = () => {
  const [handleShow, setHandleShow] = useState<boolean>(false);

  return (
    <div className="justify-center font-minecraft text-white">
      <button
        onClick={() => {
          setHandleShow(!handleShow);
        }}
        className="px-12 py-2 md:px-10 md:py-3 text-center focus:outline-none text-xl md:text-2xl"
      >
        Our sponsors
      </button>
      <div
        className={classNames(
          "text-center text-4xl align-middle transform",
          handleShow ? "rotate-180 transform md:py-0 " : ""
        )}
      >
        <div className="rotate-90 transform">{">"}</div>
      </div>
      { handleShow ?
      <div>
      <div className="absolute -translate-x-[30%] ">
        <img src={RBC} alt="RBC logo"></img>
      </div>
      <div className="absolute">
        <img src={Uizard} alt="Uizard logo"></img>
      </div>
      <div className="absolute">
        <img src={Arcelor} alt="ArcelorMittal logo"></img>
      </div>
      </div> : null }
    </div>
  );
};

export default Sponsors;
/*
<Disclosure>
<Disclosure.Button
  onPointerUp={() => {
    setOpen(!open);
  }}
  className="px-12 py-2 md:px-10 md:py-3 text-center focus:outline-none text-xl md:text-2xl"
>
  Our Sponsors
</Disclosure.Button>
<div
  className={classNames(
    "text-center text-4xl align-middle transform",
    open ? "rotate-180 transform md:py-0 " : ""
  )}
>
  <div className="rotate-90 transform">{">"}</div>
</div>
<Disclosure.Panel className="">
  <div className="absolute -translate-x-[30%] ">
    <img src={RBC} alt="RBC logo"></img>
  </div>
  <div className="absolute">
    <img src={Uizard} alt="Uizard logo"></img>
  </div>
  <div className="absolute">
    <img src={Arcelor} alt="ArcelorMittal logo"></img>
  </div>
</Disclosure.Panel>

</Disclosure>
*/
