import React from "react";

function Pagination() {
    return (
        <div ariaLabel="Pagination" className="flex justify-center items-center  text-gray-600 mt-8 lg:mt-0">
            <a className="p-2 mr-4 rounded-full border border-gray-500 hover:bg-blue-gray-200 hover:text-black bg-transparent">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
            </a>
            <a className="px-4 py-2 rounded-full m-1 border border-gray-500 hover:bg-blue-gray-200 hover:text-black text-gray-500 font-semibold bg-transparent">
                1
            </a>
            <a className="px-4 py-2 rounded-full m-1 border border-gray-500 hover:bg-blue-gray-200 hover:text-black text-gray-500 font-semibold bg-transparent  ">
                2
            </a>
            <a className="px-4 py-2 rounded-full m-1 border border-gray-500 hover:bg-blue-gray-200 hover:text-black text-gray-500 font-semibold bg-transparent">
                3
            </a>
            <a className="px-4 py-2 rounded-full m-1 border border-gray-500 hover:bg-blue-gray-200 hover:text-black text-gray-500 font-semibold bg-transparent">
                ...
            </a>
            <a className="px-4 py-2 rounded-full m-1 border border-gray-500 hover:bg-blue-gray-200 hover:text-black text-gray-500 font-semibold bg-transparent">
                15
            </a>
            <a className="p-2 ml-4 rounded-full m-1 border border-gray-500 hover:bg-blue-gray-200 hover:text-black text-gray-500 font-semibold bg-transparent">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </a>
        </div>
    );
}

export default Pagination;
