"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './page.css';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function VideoSlider() {


    const CustomPrevArrow = ({ onClick }) => (
        <button
            onClick={onClick}
            className="absolute left-0 top-1/2 -translate-y-1/2 mx-10 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
        >
            <ChevronLeftIcon className="h-6 w-6 text-black" />
        </button>
    );

    const CustomNextArrow = ({ onClick }) => (
        <button
            onClick={onClick}
            className="absolute right-0 top-1/2 -translate-y-1/2 mx-10 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
        >
            <ChevronRightIcon className="h-6 w-6 text-black" />
        </button>
    );

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1.5,
        speed: 500,
        nav: false,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.2,
                },
            },
        ],
    };

    return (
        <section className="video-slider-section text-center">
            <h2 className="mb-10">Be Part of a Thriving Community ❤️</h2>
            <div className="w-full slider-container text-white">
                <Slider {...settings}>
                    <div>
                        <video
                            className="rounded-lg w-full h-auto"
                            controls
                            autoPlay={false}
                            muted
                            loop={false}
                            poster="https://d3i8s5ff6r7vzi.cloudfront.net/v2/images/test/cohort-experience-thumnail-1-1.webp" // optional
                        >
                            <source src="https://d3i8s5ff6r7vzi.cloudfront.net/v2/images/test/bengaluru-meetup.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div>
                        <img src="/images/gallery-3.png" alt="2" />
                    </div>
                    <div>
                        <img src="/images/gallery-6.png" alt="3" />
                    </div>
                    <div>
                        <img src="/images/gallery-3.png" alt="4" />
                    </div>
                    <div>
                        <img src="/images/gallery-2.png" alt="5" />
                    </div>
                </Slider>
            </div>
        </section>
    );
}
