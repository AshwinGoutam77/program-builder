"use client";

import { useState } from "react";
import YouTubeModal from "./youtubeModal";
import { motion } from "framer-motion";
import "./page.css";
import Counter from "../Counter/Counter";

const slides = [
    {
        id: 1,
        subtitle: "SHRAVAN TICKOO",
        title: "About the Instructor",
        list: [
            "10+ years as a Product Manager across logistics, edtech, and consumer tech startups.",
            "He is a globally recognized Product Management Influencer and Educator, with 165K+ followers on LinkedIn and 42K+ on YouTube.",
            "A Guest lecturer at IIMs, IITs, NTU, and ISB, he bridges academic theory with real-world expertise, empowering product managers worldwide",
            "He is a globally recognized Product Management Influencer and Educator, with 165K+ followers on LinkedIn and 42K+ on YouTube.",
        ],
        image: "/placeholder.svg?height=500&width=400",
        alt: "Business people on stairs",
    },
    {
        id: 2,
        subtitle: "SHRAVAN TICKOO",
        title: "About the Instructor",
        list: [
            "Part of Top 100 PMs in India by Product folks <span class='block'>Was part of the top 100 impactful PMs by Product folks</span>",
            "PMI Global Recognition <span class='block'>Acknowledged by the Product Management Institute as a top global product educator.</span>",
            "Bhagavad Gita-Inspired Leadership <span class='block'>Teaches product thinking rooted in timeless principles—clarity, dharma, and resilience.</span>",
            "Founder of Rethink Systems <span class='block'>Runs one of India’s most loved product management programs which has scaled to $700K in revenue</span>",
        ],
        image: "/placeholder.svg?height=500&width=400",
        alt: "Business people on stairs",
    },
    {
        id: 3,
        subtitle: "SHRAVAN TICKOO",
        title: "About the Instructor",
        list: [
            "Angel Investor in 15+ Startups <span class='block'>Invested across the US, Canada, Singapore, and India—supporting visionary founders.</span>",
            "Creator of Viral Tech Narratives <span class='block'>His content blends wit, insight, and depth—amassing 190M+ impressions globally.</span>",
            "Champion of First Principles & Systems Thinking <span class='block'>Coaches product managers to think like builders, not just operators.</span>",
        ],
        image: "/placeholder.svg?height=500&width=400",
        alt: "Business people on stairs",
    },
];

export default function AboutUs() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const goToSlide = (index) => {
        if (index === currentSlide) return;
        setCurrentSlide(index);
    };

    const slide = slides[currentSlide];

    return (
        <section id="about-section">
            <div className="relative container mx-auto">
                <div className="relative overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        {/* Left Image */}
                        <motion.div className="relative w-full">
                            <motion.img
                                initial={{ opacity: 1, y: -40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                }}
                                src="../../images/about-img.png"
                                alt={slide.alt}
                                className="object-cover rounded-lg w-full"
                            />
                            <div className="metric-box">
                                <div>
                                    <h4>
                                        <Counter target={100} inView={true} /> <span>+</span>
                                    </h4>
                                    <p>Avg. growth</p>
                                </div>
                                <div>
                                    <h4>
                                        <Counter target={450} inView={true} /> <span>+</span>
                                    </h4>
                                    <p>Projects</p>
                                </div>
                                <div>
                                    <h4>
                                        <Counter target={10} inView={true} />K <span>+</span>
                                    </h4>
                                    <p>Happy investors</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Content */}
                        <div className="flex flex-col justify-center">
                            <motion.h2
                                className="sarvan-heading text-white mb-4 text-gray-900"
                                initial={{ opacity: 0, y: -40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                    delay: 0,
                                }}
                            >
                                {slide.title}
                                <span className="block gradient">{slide.subtitle}</span>
                            </motion.h2>

                            <ul>
                                {slide?.list?.map((item, index) => (
                                    <motion.li
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{
                                            duration: 0.8,
                                            delay: index * 0.2,
                                            ease: "easeOut",
                                        }}
                                        key={index}
                                        className="text-gray-600 text-sm mb-4 text-white flex items-start gap-2"
                                    >
                                        <img
                                            src="/images/right-click.png"
                                            alt="icon"
                                            className="mt-2"
                                        />
                                        <span dangerouslySetInnerHTML={{ __html: item }} />
                                    </motion.li>
                                ))}
                            </ul>
                            <div className="flex gap-1 justify-start pl-7 pb-5">
                                {slides.map((_, index) => (
                                    <button
                                        initial={{ opacity: 0, y: -40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.1 }}
                                        transition={{
                                            duration: 0.5,
                                            ease: "easeOut",
                                            delay: index * .2
                                        }}
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index
                                            ? "bg-blue-600 w-6"
                                            : "bg-gray-400 hover:bg-gray-600"
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-5 items-center mt-4">
                                <button className="primary-btn">
                                    APPLY NOW <img src="/images/arrow.png" alt="" />
                                </button>
                                <a
                                    href='#sarvan-teaching'
                                    className="secondary-btn"
                                >
                                    View Shravans’ Teaching videos
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* YouTube Modal */}
                <YouTubeModal show={showModal} onClose={() => setShowModal(false)} />
            </div>
        </section>
    );
}
