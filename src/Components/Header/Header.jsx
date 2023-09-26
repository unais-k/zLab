import React from "react";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import logo from "../../Assets/logo.png";
import whiteLogo from "../../Assets/whiteLogo.png";
import { IoReorderThreeSharp } from "react-icons/io5";

function Header() {
    return (
        <header className="w-full h-[130px] flex flex-col items-center bg-black">
            <div className="container">
                <div className="flex justify-between items-center text-white font-semibold text-sm">
                    <div className="h-full w-12 block sm:hidden">
                        <div className="bg-blue-600 h-12 w-full rounded-full flex justify-center items-center z-0 -mb-8">
                            <img src={whiteLogo} className="w-fit" alt="Logo" />
                        </div>
                    </div>
                    <div className="text-xs md:text-sm">
                        <span className="text-gray-600">Mon-Thu:</span> 9.00 AM - 5.30 PM
                    </div>
                    <div className="text-gray-600 flex flex-row">
                        <p className="hidden md:block"> Visit our showroom in 1234 Street Address City Address, 1234</p>
                        <span className="border-b text-white border-white ms-2 pb-1 text-xs md:text-sm">Contact Us</span>
                    </div>
                    <div className="hidden sm:block">
                        <div className="flex justify-between flex-row gap-2">
                            Call Us: (00) 1234 5678
                            <div className="flex justify-center gap-1">
                                <AiFillFacebook size={25} color="white" />
                                <AiFillInstagram
                                    size={25}
                                    color="white
                                "
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="w-full bg-blue-600 md:bg-white z-10 h-[80px] flex items-center text-black">
                <div className="container">
                    <div className="flex justify-between  items-center">
                        <div className="flex justify-between items-center gap-10">
                            <div className="md:block hidden">
                                <img src={logo} alt="LogoPhoto" className="w-fit h-fit" />
                            </div>
                            <div className="text-2xl text-smallTextColor md:hidden cursor-pointer">
                                <IoReorderThreeSharp />
                            </div>
                            <div className="navbarMenu md:block hidden">
                                <ul className="flex items-center gap-3 font-bold">
                                    <li>Laptops</li>
                                    <li>Desktop PCs</li>
                                    <li>Networking Devices</li>
                                    <li>Printers & Scanners</li>
                                    <li>ALL Other Products</li>
                                    <li>Repairs</li>
                                    <li>
                                        <button className="rounded-full border-2 border-blue-600 bg-white text-blue-600 px-3 py-2">
                                            Our Deals
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex md:justify-between justify-center gap-3 items-center">
                            <div className="md:hidden block">
                                <div class="relative flex items-center w-full h-12 rounded-full focus-within:shadow-lg bg-white overflow-hidden">
                                    <div class="grid place-items-center h-full w-12 text-gray-300">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            />
                                        </svg>
                                    </div>

                                    <input
                                        class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                                        type="text"
                                        id="search"
                                        placeholder="Search something.."
                                    />
                                </div>
                            </div>
                            <div className="relative rounded-full bg-white  shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg md:block hidden ">
                                <div className="mx-auto max-w-md">
                                    <form className="relative mx-auto w-max">
                                        <input
                                            type="SearchBar"
                                            className="peer cursor-pointer relative z-10 h-12 rounded-full border bg-transparent outline-none w-12 md:focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4"
                                        />
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            />
                                        </svg>
                                    </form>
                                </div>
                            </div>
                            <div className="relative">
                                <div class="t-0 absolute left-0">
                                    <p class="flex h-1 w-1 items-center justify-center rounded-full md:bg-blue-600 bg-white border border-blue-600 md:text-white p-2 text-xs text-blue-600">
                                        3
                                    </p>
                                </div>
                                <FiShoppingCart className="text-white md:text-black" size={25} />
                            </div>
                            <FaRegUserCircle className="text-white md:text-black" size={25} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
