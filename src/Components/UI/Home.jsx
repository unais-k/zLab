import React from "react";
import banner from "../../Assets/tufGameBanner.jpg";
import { IoAppsSharp } from "react-icons/io5";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Accordion, ColorAcc, FilterAcc } from "./Components/Accordion";
import upwind from "../../Assets/upwind.png";
import XPhoto from "../../Assets/Group 108.png";
import { FilterPage, FilterData, FilterSideBar } from "./Components/DropDown";
import Card from "./Components/Card";
import Pagination from "./Components/Pagination";
import chairPhoto from "../../Assets/image 49.jpg";
import { photoOfLaptop, photoOfBrand } from "./Components/Constant";
import IconCard from "./Components/IconCard";

function Home() {
    const list = [
        {
            title: "Category",
            cat: [
                {
                    type: "CUSTOM PCS",
                    qyt: "15",
                },
                {
                    type: "MSI ALL-IN-ONE PCS",
                    qyt: "45",
                },
                {
                    type: "HP/COMPAQ PCS",
                    qyt: "1",
                },
            ],
        },
        {
            title: "Price",
            cat: [
                {
                    type: "$0.00 - $1,000.00",
                    qyt: "19",
                },
                {
                    type: "$1,000.00 - $2,000.00",
                    qyt: "21",
                },
                {
                    type: "$2000.00 - $3000.00",
                    qyt: "9",
                },
                {
                    type: "$3,000.00 - $4,000.00",
                    qyt: "6",
                },
                {
                    type: "$4000.00 - $5,000.00",
                    qyt: "3",
                },
                {
                    type: "$5,000.00 - $6,000.00",
                    qyt: "1",
                },
                {
                    type: "$6000.00 - $7,000.00",
                    qyt: "1",
                },
                {
                    type: "$7,000.00 And Above",
                    qyt: "1",
                },
            ],
        },
    ];

    return (
        <section className="pt-0">
            <div className="container">
                <div className="hidden md:block">
                    <img src={banner} alt="banner" />
                </div>
                <div className="flex justify-start flex-wrap items-center py-3 md:text-sm text-xs">
                    Home
                    <svg
                        class="w-5 h-auto fill-current mx-2 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                    </svg>
                    Laptops
                    <svg
                        class="w-5 h-auto fill-current mx-2 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                    </svg>
                    Everyday Use Notebooks
                    <svg
                        class="w-5 h-auto fill-current mx-2 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                    </svg>
                    MSI Prestige Series
                    <svg
                        class="w-5 h-auto fill-current mx-2 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                    </svg>
                    <span className="text-gray-400">MSI WS Series</span>
                </div>
                <div>
                    <h2 className="font-[800] text-2xl">MSI PS Series (20)</h2>
                </div>
                <div className="flex justify-normal gap-2 mb-16">
                    {/* Filter */}
                    <div className="w-1/5 md:block hidden">
                        <div className="flex justify-center items-center">
                            <div className="w-full flex justify-center items-center h-10">
                                <MdOutlineArrowBackIosNew size={10} />
                                <h2 className="font-bold">Back</h2>
                            </div>
                        </div>
                        <div className="bg-[#F5F7FF] rounded-sm">
                            <h2 className="text-center py-3 font-bold text-xl">Filter</h2>
                            <div className="flex justify-center items-center mb-4">
                                <button className="border-2 bg-transparent text-gray-500 rounded-full px-4 py-2 font-bold ">
                                    Clear Filter
                                </button>
                            </div>
                            {list?.map((item, key) => {
                                return <Accordion key={key} data={item} />;
                            })}
                            <ColorAcc />
                            <FilterAcc />
                        </div>
                        <div className="bg-[#F5F7FF] rounded-sm mt-1">
                            <h2 className="text-center py-3 font-bold text-xl">Brands</h2>
                            <div className="flex justify-center items-center pb-4">
                                <button className="border-2 bg-transparent text-gray-500 rounded-full px-4 py-2 font-bold ">
                                    All Brands
                                </button>
                            </div>
                            <div className="bg-white w-full">
                                <div className="grid grid-cols-1 w-full  md:grid-cols-2">
                                    {photoOfBrand?.map((item, key) => {
                                        return (
                                            <div>
                                                <img
                                                    className="border border-gray-100 w-full"
                                                    src={item}
                                                    alt="PicOfTheDay"
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#F5F7FF] rounded-sm mt-1 px-2 py-2">
                            <h2 className="text-center py-3 font-bold text-xl">Compare Products</h2>
                            <div className="text-sm pb-2 text-center">You have no items to compare</div>
                        </div>
                        <div className="bg-[#F5F7FF] rounded-sm mt-1 px-2 py-2">
                            <h2 className="text-center py-3 font-bold text-xl">My Wish List</h2>
                            <div className="text-sm pb-2 text-center">You have no item in your wish list</div>
                        </div>
                        <div className="h-fit w-full mt-1 hidden md:block   ">
                            <img className="w-full" src={chairPhoto} alt="Gaming Chair" />
                        </div>
                    </div>
                    {/* product filter */}
                    <div className="w-full flex items-center flex-col">
                        <div className="flex w-full justify-between items-center">
                            <div className="md:block hidden w-full">
                                <p className="text-gray-500 text-xs">items 1-35 of 61</p>
                            </div>
                            <div className="flex justify-evenly md:justify-end w-full gap-3 text-sm">
                                <FilterSideBar />
                                <FilterData />
                                <FilterPage />

                                <div className="md:block hidden">
                                    <div className="flex justify-center items-center gap-3">
                                        <IoAppsSharp size={30} />
                                        <img src={upwind} className="h-6 w-6" alt="UpWind" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:hidden w-full block">
                            <div className="w-full flex justify-start">
                                <p className="text-gray-500 text-xs">items 1-35 of 61</p>
                            </div>
                        </div>
                        <div className="hidden md:block w-full text-sm gap-3">
                            <div className="flex justify-start w-full items-center">
                                <div className="border border-solid border-gray-400 px-2 py-2">
                                    <div className="text-gray-500 flex justify-center items-center gap-2">
                                        <span className="font-bold text-black">CUSTOM PCS</span> (24)
                                        <img src={XPhoto} alt="Xpic" />
                                    </div>
                                </div>
                                <div className="border border-solid border-gray-400 px-2 py-2">
                                    <div className="text-gray-500 flex justify-center items-center gap-2">
                                        <span className="font-bold text-black">HP/COMPAQ PCS</span> (24)
                                        <img src={XPhoto} alt="Xpic" />
                                    </div>
                                </div>
                                <div className="border border-solid border-gray-400 px-2 py-2">
                                    <div className="text-gray-500 flex justify-center items-center gap-2">
                                        <span className="font-bold text-black">Clear All</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                            {photoOfLaptop?.map((item, key) => (
                                <Card data={item} key={key} />
                            ))}
                        </div>
                        <div className="flex justify-center items-center w-full mt-4">
                            <Pagination />
                        </div>
                        <div className="flex flex-col justify-center w-full mt-8">
                            <div className="bg-gradient-to-b from-transparent to-white opacity-50 px-3 text-gray-500 text-sm">
                                MSI has unveiled the Prestige Series line of business-class and gaming notebooks. Tuned for
                                color accuracy, the Prestige Series also leverages True Color Technology, which allows users
                                to adjust the display profile to best fit their computing needs.
                                <br />
                                <br />
                                There are six different screen profiles, which are tuned for gaming, reducing eye fatigue,
                                sRGB color accuracy, increasing clarity for words and lines, reducing harmful blue light,
                                and optimizing contrast for watching movies. <br /> Given the various display profiles and
                                discrete graphics chip, the Prestige Series notebooks can be used for various design work as
                                well as for office tasks given that the screen can be adjusted for better clarity, color
                                accuracy, or for eye strain reduction. Users working with video or 3D rendering will
                                appreciate the "movie mode" for which contrast is increased. <br />
                                <br /> Home users or students can benefit from the "anti-blue" and the "office mode"
                                options, both of which are designed to reduce eye strain. This is helpful when working on
                                the computer for extended periods of time. Additionally, in their down time, students can
                                also use the "gamer mode" to increase the screen brightness.
                            </div>
                            <div className="h-fit bottom-0 flex justify-between flex-col items-center ">
                                <button className="bg-transparent px-4 py-2 border border-gray-400 rounded-full font-semibold">
                                    more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#F5F7FF] p-3 md:hidden block">
                    <IconCard />
                </div>
            </div>
        </section>
    );
}

export default Home;
