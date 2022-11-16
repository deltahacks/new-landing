import { Disclosure } from "@headlessui/react";
import React, { useState } from "react";
import RBC from "../../public/RBC.png";
import Uizard from "../../public/Uizard.png";
import Arcelor from "../../public/ArcelorMittal.png";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Sponsors = () => {
  return (
    <div className="w-full sm:pb-10 font-minecraft text-white flex justify-center items-center flex-col">
      <div className="p-12">
        <div className="shadow-none outline-none transform px-12 py-2 md:px-10 md:py-4 text-center focus:bg-transparent text-xl md:text-3xl">
          Our Sponsors
        </div>
        <div className="text-center text-2xl md:text-4xl align-middle rotate-90 transform">
          {">"}
        </div>
      </div>
      <div className="w-full relative h-[40vh] sm:h-[50vh]">
        <div className="w-1/3 sm:w-1/5 absolute left-1/2 transform -translate-x-1/2">
          <img src={RBC} className="" alt="RBC logo"></img>
        </div>
        <div className="w-1/2 sm:w-1/3 absolute top-1/2 md:top-[60%] lg:top-[70%] right-1/2 transform -translate-x-1/3">
          <img src={Arcelor} className="" alt="ArcelorMittal logo"></img>
        </div>
        <div className="w-1/2 sm:w-1/3 absolute top-1/2 md:top-[60%] lg:top-[70%] left-1/2 transform translate-x-1/3">
          <img src={Uizard} className="self-center" alt="Uizard logo"></img>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
