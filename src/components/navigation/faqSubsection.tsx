import { Disclosure } from '@headlessui/react'
import { useState } from "react";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

function FaqSubsection(props: {id: number, title: String, info: String}){ 

    let [open, setOpen] = useState(false)

    function changeOpen(){
        setOpen(prev => {
            return (!prev)
        })
    }
    return (
        <div className={open ? 'bg-[#8e8e8e] h-100% shadow-[inset_-5px_-5px_0px_rgb(113,113,113),inset_5px_5px_0px_rgb(177,177,177)]':'mBG'}>
          <Disclosure >
            <Disclosure.Button onPointerUp={() => {changeOpen()}} className={({ open }) =>
                                classNames(
                                "px-12 py-4 md:px-10 md:py-5 text-left",
                                "focus:outline-none",
                            )
            }>
                            <span >{props.title}</span>
                    </Disclosure.Button>
                <Disclosure.Panel className="px-12 py-6 md:px-20 md:py-15 pt-0">
                {props.info}
            </Disclosure.Panel>
        </Disclosure>
     </div>
    )
}

export default FaqSubsection;