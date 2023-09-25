import React from "react";
import tag from "../../../Assets/tag.svg";
import user from "../../../Assets/download.svg";
import headphone from "../../../Assets/headphone.svg";

function IconCard() {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 p-3">
            <div className="flex justify-center w-full flex-col items-center">
                <div className="h-16 w-16 rounded-full bg-blue-600 flex justify-center items-center">
                    <img src={headphone} className="text-white h-10 w-10" alt="priceTag" />
                </div>
                <div className="text-xl font-bold py-2">Product Support</div>
                <div className="text-center py-2">Up to 3 years on-site warranty available for your peace of mind</div>
            </div>
            <div className="flex justify-center flex-col items-center">
                <div className="h-16 w-16 rounded-full bg-blue-600 flex justify-center items-center">
                    <img src={user} className="text-white h-10 w-10" alt="priceTag" />
                </div>
                <div className="text-xl font-bold py-2">Product Support</div>
                <div className="text-center py-2">Up to 3 years on-site warranty available for your peace of mind</div>
            </div>
            <div className="flex justify-center flex-col items-center">
                <div className="h-16 w-16 rounded-full bg-blue-600 flex justify-center items-center">
                    <img src={tag} className="text-white h-10 w-10" alt="priceTag" />
                </div>
                <div className="text-xl font-bold py-2">Product Support</div>
                <div className="text-center py-2">Up to 3 years on-site warranty available for your peace of mind</div>
            </div>
        </div>
    );
}

export default IconCard;
