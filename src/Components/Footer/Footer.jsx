import React from "react";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import amex from "../../Assets/amex.svg";
import maestro from "../../Assets/maestro.svg";
import paypal from "../../Assets/paypal.svg";
import visa from "../../Assets/visa.svg";

function Footer() {
    return (
        <footer className="bg-black pt-12">
            <div className="container">
                <div className="sm:flex items-center justify-between ms:gap-8">
                    <div className="w-full sm:w-1/2 mb-5">
                        <h2 className="text-[26px] leading-10 text-white font-[600] md:text-[2rem]">
                            Sign Up To Our Newsletter.
                        </h2>
                        <span className="text-white text-sm font-extralight">
                            Be the first to hear about the latest offers.
                        </span>
                    </div>
                    <div className="w-full sm:w-1/2 mb-5 flex gap-5 md:flex-row flex-col">
                        <input
                            type="text"
                            className="md:w-3/4 w-full h-10 px-2 bg-black border border-white"
                            placeholder="Your Email"
                        />
                        <button className="px-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full">
                            Subscribe
                        </button>
                    </div>
                </div>
                <div className="text-white flex justify-between md:flex-row flex-col gap-4  pb-5 border-b border-solid border-gray-600">
                    <div>
                        <h2 className="text-gray-500 font-[900] mb-4">Information</h2>
                        <ul className="text-xs">
                            <li>About Us</li>
                            <li>About Zip</li>
                            <li>Privacy Policy</li>
                            <li>search</li>
                            <li>Terms</li>
                            <li>Orders and Returns</li>
                            <li>Contact Us</li>
                            <li>Advanced Search</li>
                            <li>Newsletter Subscription</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-gray-500 font-[900] mb-4">PC Parts</h2>
                        <ul className="text-xs">
                            <li>CPUS</li>
                            <li>Add On Cards</li>
                            <li>Hard Drives(Internal)</li>
                            <li>Graphic Cards</li>
                            <li>Keyboards / Mice</li>
                            <li>Cases / Power Supplies / Cooling</li>
                            <li>RAM (Memory)</li>
                            <li>Software</li>
                            <li>Speakers / Headsets</li>
                            <li>Motherboards</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-gray-500 font-[900] mb-4">Desktop PCs</h2>
                        <ul className="text-xs">
                            <li>Custom PCs</li>
                            <li>Servers</li>
                            <li>MSI All-In-One PCs</li>
                            <li>HP/Compaq PCs</li>
                            <li>ASUS PCs</li>
                            <li>Tecs PCs</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-gray-500 font-[900] mb-4">Laptops</h2>
                        <ul className="text-xs">
                            <li>Everyday Use Notebooks</li>
                            <li>MSI Workstation Series</li>
                            <li>MSI Prestige Series</li>
                            <li>Tablets and Pads</li>
                            <li>Notebooks</li>
                            <li>Infinity Gaming Notebooks</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-gray-500 font-[900] mb-4">Address</h2>
                        <ul className="text-xs">
                            <li>Address: 1234 Street Address City Address, 1234</li>
                            <li>Phones: (00) 1234 5678</li>
                            <li>We are open: Monday-Thursday: 9.00 AM - 5.30 PM</li>
                            <li>Friday: 9.00AM - 6.00 PM</li>
                            <li>Saturday: 11.00AM -5.00 PM</li>
                            <li>Email: shop@email.com</li>
                            <li>Contact Us</li>
                            <li>Advanced Search</li>
                            <li>Newsletter Subscription</li>
                        </ul>
                    </div>
                </div>
                <div className="flex md:justify-between justify-center md:flex-row flex-col items-center gap-3  text-white py-4">
                    <div className="flex justify-start gap-2">
                        <AiFillFacebook size={25} color="gray" />
                        <AiFillInstagram
                            size={25}
                            color="gray
                        "
                        />
                    </div>
                    <div className="flex justify-between gap-2 align-middle">
                        <img src={amex} className="w-10" alt="svg amex" />
                        <img src={maestro} className="w-10" alt="svg amex" />
                        <img src={paypal} className="w-10" alt="svg amex" />
                        <img src={visa} className="w-10" alt="svg amex" />
                    </div>
                    <div>
                        <p className="text-gray-600 font-semibold text-sm">Copyright © 2020 Shop Pty. Ltd.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
