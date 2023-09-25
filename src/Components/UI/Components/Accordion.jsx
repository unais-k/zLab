import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export function Accordion(props) {
    const [data, setData] = useState(props.data);

    const handleToggle = () => {
        let activeNew = data?.active === 1 ? 0 : 1;
        setData({ ...data, active: activeNew });
    };
    return (
        <div
            key={Math.floor(Math.random()) * Math.floor(Math.random()) + (2 * 124) / 3.5}
            className={`w-full p-3 duration-500 group ${data?.active === 1 ? "is-active " : ""}`}
        >
            <div className="flex justify-between items-center">
                <div className="w-full group-[.is-active]:font-bold">{data?.title}</div>
                <div
                    className="text-xl cursor-pointer duration-500 group-[.is-active]:rotate-[180deg]"
                    onClick={handleToggle}
                >
                    <MdKeyboardArrowDown size={10} />
                </div>
            </div>
            <div className="overflow-hidden mt-3 duration-300 max-h-0 group-[.is-active]:max-h-full">
                {data?.cat?.map((item, key) => {
                    return (
                        <div className="flex justify-between flex-row">
                            <div>{item.type}</div>
                            <div>{item.qyt}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export function ColorAcc() {
    const [data, setData] = useState(0);
    const handleToggle = () => {
        let activeNew = data?.active === 1 ? 0 : 1;
        setData({ ...data, active: activeNew });
    };
    return (
        <div className={`w-full p-3 duration-500 group ${data?.active === 1 ? "is-active " : ""}`}>
            <div className="flex justify-between items-center">
                <div className="w-full group-[.is-active]:font-bold">Color</div>
                <div
                    className="text-xl cursor-pointer duration-500 group-[.is-active]:rotate-[180deg]"
                    onClick={handleToggle}
                >
                    <MdKeyboardArrowDown size={10} />
                </div>
            </div>
            <div className="overflow-hidden mt-3 flex justify-start gap-3 items-center duration-300 max-h-0 group-[.is-active]:max-h-full">
                <div className="bg-blue-600 cursor-pointer p-4 rounded-full w-3 h-3 border focus:border-blue-500"></div>
                <div className="bg-red-600 p-4 rounded-full w-3 h-3 border focus:border-blue-500"></div>
            </div>
        </div>
    );
}

export function FilterAcc() {
    const [data, setData] = useState(0);
    const handleToggle = () => {
        let activeNew = data?.active === 1 ? 0 : 1;
        setData({ ...data, active: activeNew });
    };
    return (
        <div className={`w-full p-3 duration-500 group ${data?.active === 1 ? "is-active " : ""}`}>
            <div className="flex justify-between items-center">
                <div className="w-full group-[.is-active]:font-bold">Filter Name</div>
                <div
                    className="text-xl cursor-pointer duration-500 group-[.is-active]:rotate-[180deg]"
                    onClick={handleToggle}
                >
                    <MdKeyboardArrowDown size={10} />
                </div>
            </div>
            <div className="overflow-hidden flex justify-center items-center mt-3 duration-300 max-h-0 group-[.is-active]:max-h-full">
                <button className="px-4 py-2 rounded-full bg-blue-600 text-white text-center">Apply filter (2)</button>
            </div>
        </div>
    );
}

export function BrandAcc() {
    const [data, setData] = useState(0);
    const handleToggle = () => {
        let activeNew = data?.active === 1 ? 0 : 1;
        setData({ ...data, active: activeNew });
    };
    return (
        <div className={`w-full p-3 duration-500 group ${data?.active === 1 ? "is-active " : ""}`}>
            <div className="flex justify-between items-center">
                <div className="w-full group-[.is-active]:font-bold">Color</div>
                <div
                    className="text-xl cursor-pointer duration-500 group-[.is-active]:rotate-[180deg]"
                    onClick={handleToggle}
                >
                    <MdKeyboardArrowDown size={10} />
                </div>
            </div>
            <div className="overflow-hidden mt-3 duration-300 max-h-0 group-[.is-active]:max-h-full"></div>
        </div>
    );
}
