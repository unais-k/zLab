import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { dataAccord } from "./Data";

function Accordion({ heading, list }) {
    const [show, setShow] = useState(false);

    return (
        <div>
            <div onClick={() => setShow(!show)} className="flex justify-between items-center cursor-pointer">
                <h1 className="text-xl font-semibold text-white">{heading}</h1>
                <BiChevronDown
                    color="white"
                    className={`text-3xl transition-all duration-500 ${show ? "rotate-180" : ""}`}
                />
            </div>
            <AnimatePresence>
                {show && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-clip"
                    >
                        <ul className="pt-3 text-white border-b border-gray-500 leading-7 text-md pb-4">
                            {list.map((item, key) => {
                                return <li>{item}</li>;
                            })}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Accordion;
