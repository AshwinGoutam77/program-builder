"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./page.css";

export default function VideoSlider() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1.5,
    speed: 500,
    nav: false,
    responsive: [
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1, 
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
            <img src="/images/gallery-6.png" alt="" />
          </div>
          <div>
            <img src="/images/gallery-3.png" alt="" />
          </div>
          <div>
            <img src="/images/gallery-6.png" alt="" />
          </div>
          <div>
            <img src="/images/gallery-3.png" alt="" />
          </div>
          <div>
            <img src="/images/gallery-2.png" alt="" />
          </div>
        </Slider>
      </div>
    </section>
  );
}
