import React, { useState } from "react";

import { BiChevronDown } from "react-icons/bi";

export function FilterData() {
    const [select, setSelect] = useState("popular");
    const [open1, setOpen1] = useState(false);
    const filterData = ["Position", "Date", "Rating", "Popular"];

    return (
        <div className="w-fit font-medium max-h-fit relative">
            <div
                onClick={() => setOpen1(!open1)}
                className="bg-white w-full border-2 border-gray-400 p-2 font-bold flex items-center justify-center rounded text-black"
            >
                <span className="text-gray-500">Sort by:</span>
                {select}
                <BiChevronDown className={`${open1 && "rotate-180"}`} />
            </div>
            <ul
                className={`bg-white absolute w-full mt-2 overflow-y-auto
                                     ${open1 ? "max-h-20 rounded-sm" : "max-h-0"}`}
            >
                {filterData.map((item, key) => {
                    return (
                        <li
                            key={Math.floor(Math.random()) * Math.floor(Math.random()) + (2 * 124) / 3.5}
                            className="h-full py-1 ps-2 "
                            onClick={() => {
                                setSelect(item);
                            }}
                        >
                            {item}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
export function FilterPage() {
    const [open, setOpen] = useState(false);
    const [selectNum, setSelectNum] = useState("20 per page");
    const filterPage = ["20 per page", "30 per page", "40 per page", "50 per page"];

    return (
        <div className="w-fit font-medium max-h-fit relative">
            <div
                onClick={() => setOpen(!open)}
                className="bg-white border-2 border-gray-400 w-full font-bold p-2 flex items-center justify-center rounded text-black"
            >
                <span className="text-gray-500">Show:</span>
                {selectNum}
                <BiChevronDown className={`${open && "rotate-180"}`} />
            </div>
            <ul
                className={`bg-white absolute w-full mt-2 overflow-y-auto
                                     ${open ? "max-h-20 ps-2 rounded-sm" : "max-h-0"}`}
            >
                {filterPage.map((item, key) => {
                    return (
                        <li
                            key={Math.floor(Math.random()) * Math.floor(Math.random()) + (2 * 124) / 3.5}
                            className="h-full py-1 ps-2 "
                            onClick={() => {
                                setSelectNum(item);
                            }}
                        >
                            {item}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
