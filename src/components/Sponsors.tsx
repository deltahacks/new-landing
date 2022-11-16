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
    <div className="font-minecraft text-white">
      <button
        onClick={() => {
          setHandleShow(!handleShow);
        }}
        className="align-middle transform px-12 py-2 md:px-10 md:py-3 text-center focus:outline-none text-xl md:text-2xl"
      >
        Our sponsors
      </button>
      <div
        className={classNames(
          "text-center text-2xl md:text-4xl align-middle transform",
          handleShow ? "rotate-180 transform pt-5 md:pt-10 " : ""
        )}
      >
        <div className="rotate-90 transform">{"<"}</div>
      </div>
      { handleShow ?
        <div className="min-h-screen">
            <div className="w-1/5 absolute left-1/2 transform -translate-x-1/2">
                <img src={RBC} className=""alt="RBC logo"></img>
            </div>
            <div className="w-1/3 absolute top-1/2 md:top-[60%] lg:top-[70%] right-1/2 transform -translate-x-1/3">
                <img src={Arcelor} className=""alt="ArcelorMittal logo"></img>
            </div>
            <div className="w-1/3 absolute top-1/2 md:top-[60%] lg:top-[70%] left-1/2 transform translate-x-1/3">
                <img src={Uizard} className="self-center"alt="Uizard logo"></img>
          </div>
      </div> : null}
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
        <div className="rotate-90 transform">{"<"}</div>
      </div>
      { handleShow ?
      <div className="absolute w-full">
        <div className="">
            <img src={RBC} alt="RBC logo"></img>
        </div>
        <div className="">
            <img src={Uizard} alt="Uizard logo"></img>
        </div>
        <div className="">
            <img src={Arcelor} alt="ArcelorMittal logo"></img>
        </div>
      </div> : null}
        
*/
