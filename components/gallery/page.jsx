"use client";

import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const videos = [
    "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4",
    "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4",
    "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4",
    "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4",
    "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4",
];

export default function VideoSlider() {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRefs = useRef([]);

    // Make sure videoRefs.current always has same length as videos
    if (videoRefs.current.length !== videos.length) {
        videoRefs.current = Array(videos.length)
            .fill()
            .map((_, i) => videoRefs.current[i] || null);
    }

    const settings = {
        centerMode: true,
        centerPadding: "60px",
        slidesToShow: 3,
        infinite: true,
        speed: 500,
        arrows: true,
        beforeChange: () => {
            // Pause all videos before slide changes
            videoRefs.current.forEach((video) => {
                if (video) {
                    video.pause();
                    video.currentTime = 0; // reset time for nicer UX
                }
            });
            setIsPlaying(false);
        },
        afterChange: (newIndex) => {
            setCurrentSlide(newIndex);
        },
    };

    const togglePlay = () => {
        const currentVideo = videoRefs.current[currentSlide];
        if (!currentVideo) return;

        if (isPlaying) {
            currentVideo.pause();
            setIsPlaying(false);
        } else {
            currentVideo.play();
            setIsPlaying(true);
        }
    };

    return (
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <Slider ref={sliderRef} {...settings}>
                {videos.map((src, i) => {
                    const isCenter = i === currentSlide;
                    return (
                        <div key={i} style={{ padding: 10, position: "relative" }}>
                            <video
                                ref={(el) => (videoRefs.current[i] = el)}
                                src={src}
                                muted
                                width="100%"
                                style={{
                                    cursor: isCenter ? "pointer" : "default",
                                    filter: isCenter ? "none" : "grayscale(70%)",
                                    borderRadius: 8,
                                }}
                                onClick={() => {
                                    if (isCenter) togglePlay();
                                }}
                                playsInline
                            />

                            {isCenter && !isPlaying && (
                                <button
                                    onClick={togglePlay}
                                    style={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        fontSize: 50,
                                        background: "rgba(0,0,0,0.5)",
                                        borderRadius: "50%",
                                        border: "none",
                                        color: "white",
                                        cursor: "pointer",
                                    }}
                                    aria-label="Play video"
                                >
                                    ▶️
                                </button>
                            )}
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}
