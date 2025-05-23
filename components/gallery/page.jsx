"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./page.css";
import { motion } from "framer-motion";

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
      <motion.h2
        className="mb-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        Be Part of a Thriving Community ❤️
      </motion.h2>
      <motion.div
        className="w-full slider-container text-white"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: 0.3,
        }}
      >
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
      </motion.div>
    </section>
  );
}
