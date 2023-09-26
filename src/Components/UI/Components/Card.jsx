import React from "react";
import Stock from "../../../Assets/In Stock.png";
import star from "../../../Assets/Star 9.png";
import fadeStar from "../../../Assets/Star 1.png";

function Card({ data }) {
    return (
        <div>
            <div
                className="flex flex-col items-center p-3 text-sm"
                key={Math.floor(Math.random()) * Math.floor(Math.random()) + (2 * 124) / 3.5}
            >
                <div className=" flex justify-start w-full mb-1">
                    <img src={Stock} alt="Stock Pic" />
                </div>
                <div>
                    <img src={data} alt="Laptop" />
                </div>
                <div className="flex justify-start  w-full mt-1 mb-3">
                    <div className="flex justify-start pe-1">
                        <img src={star} alt="Star" className="h-4 w-4" />
                        <img src={star} alt="Star" className="h-4 w-4" />
                        <img src={star} alt="Star" className="h-4 w-4" />
                        <img src={star} alt="Star" className="h-4 w-4" />
                        <img src={fadeStar} alt="Star" className="h-4 w-4" />
                    </div>
                    <div className="ms-3">Reviews (4)</div>
                </div>
                <div>
                    EX DISPLAY : MSI Pro 16
                    <br />
                    Flex-036AU 15.6 MULTITOUCH All-In-One
                </div>
                <div className="flex justify-start flex-col w-full mt-2">
                    <div className="line-through text-sm text-gray-500">$499.00</div>
                    <div className="font-bold text-xl text-black ps-1">$499.00</div>
                </div>
            </div>
        </div>
    );
}

export default Card;
