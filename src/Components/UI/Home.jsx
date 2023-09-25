import React from "react";
import banner from "../../Assets/tufGameBanner.jpg";

function Home() {
    return (
        <section className="pt-0">
            <div className="container">
                <div className="hidden md:block">
                    <img src={banner} alt="banner" />
                </div>
                <div className="flex justify-start items-center py-3">
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
                    MSI WS Series
                </div>
                <div>
                    <h2 className="font-[800] text-2xl">MSI PS Series (20)</h2>
                </div>
            </div>
        </section>
    );
}

export default Home;
