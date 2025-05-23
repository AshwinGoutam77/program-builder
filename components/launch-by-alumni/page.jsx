"use client"
import Marquee from "react-fast-marquee";
import './page.css'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LaunchByAlumni() {
    const data = [
        {
            productBy: "Product - by Kiran Bandreddy",
            image: "/images/launched-alumni-1.png",
            desc: "Pay for Premium AI only when you use",
            link: "https://aiondemand.in/"
        },
        {
            productBy: "Product- by Group “JPDP” ",
            image: "/images/launched-alumni-2.png",
            desc: "Helps you grow with personalized content on Linkedin",
            link: "https://reachly-ai-grow-smart-49.lovable.app/"
        },
        {
            productBy: "By Group “D” ",
            image: "/images/launched-alumni-3.png",
            desc: "AI-Powered Job Matching- Find your perfect career match",
            link: "https://job-finder.replit.app/"
        },
        {
            productBy: "by group “Zero to One”",
            image: "/images/launched-alumni-4.png",
            desc: "Effortless access to the best activities for your little ones",
            link: "https://preview--kidventure-play-zone.lovable.app/"
        },
        {
            productBy: "Product - by Group “G” ",
            image: "/images/launched-alumni-5.png",
            desc: "Personalized AI Health Insurance Recommendations.",
            link: "https://smart-health-choices.lovable.app/"
        },
        {
            productBy: "By Group “B” ",
            image: "/images/launched-alumni-6.png",
            desc: "All-in-one learning for your little ones",
            link: "https://allio-little-learners-path.lovable.app/"
        },
        {
            productBy: "By Group “C” ",
            image: "/images/launched-alumni-7.png",
            desc: "Caring Connections That Make a Difference",
            link: "https://careconnectteam.replit.app/"
        },
        {
            productBy: "By Group “6:P M” ",
            image: "/images/launched-alumni-8.png",
            desc: "Book rides for your family in seconds",
            link: "https://ride-booking-app-five.vercel.app/"
        },
    ]

    const [play, setPlay] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setPlay(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll(".slider--testim");
        elements.forEach((element) => observer.observe(element));

        return () => {
            elements.forEach((element) => observer.unobserve(element));
        };
    }, []);

    return (
        <motion.section className="launch-by-alumni-section w-full overflow-hidden"
           initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut", 
                      delay:.8
                    }}
        >
            <div className="">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left Content */}
                    <div className="lg:col-span-4">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold leading-tight">Launched by our alumni</h2>
                            <p>From idea to live product in 10 days — our community collaborates, builds, and ships AI-first solutions that solve problems people actually care about.</p>
                            <p>The best part? You can do this too!</p>
                        </div>
                    </div>

                    {/* Right Content - Testimonial Slider */}
                    <div className="lg:col-span-8">
                        <div className="">
                            <div className="flex">
                                <Marquee speed={100} delay={3} play={play} autoFill pauseOnHover className="">
                                    {data?.map((item, index) => {
                                        return (
                                            <div className="card" key={index}>
                                                <span className="product-by">{item?.productBy}</span>
                                                <img src={item?.image} alt="alumni-icon" width='100px' />
                                                <p className="text-sm">{item?.desc}</p>
                                                <a href={item?.link}><button className="primary-btn">View Product <img src="/images/arrow.png" alt="btn" /></button></a>
                                            </div>
                                        )
                                    })}
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}
