"use client"
import Marquee from "react-fast-marquee";
import './page.css'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MasterSpeaker() {
    const data = [
        {
            image: "/images/master-session-img-1.png",
            title: "Matthew Arbesfeld",
            desc: "Co-founder at LogRocket and Thiel Fellow",
            link: "/",
            logo: [
                '/images/log-rocket.png',
                '/images/mit.png',
            ],
            linkedin: "https://www.linkedin.com/in/matthew-arbesfeld-04b5429b/"
        },
        {
            image: "/images/master-session-img-2.png",
            title: "Stefan F. Schnabl",
            desc: "Senior Product Manager at Google",
            link: "/",
            logo: [
                '/images/google.png',
                '/images/ibm.png',
            ],
            linkedin: "https://www.linkedin.com/in/matthew-arbesfeld-04b5429b/"
        },
        {
            image: "/images/master-session-img-3.png",
            title: "Sushant Mathur",
            desc: "Director of Product, Sabre India",
            link: "/",
            logo: [
                '/images/sabre.png',
                '/images/oracle.png',
            ],
            linkedin: "https://www.linkedin.com/in/sfschnabl/"
        },
        {
            image: "/images/master-session-img-4.png",
            title: "Claire Vo",
            desc: "CPO LaunchDarkly, Co-founder, ChatPRD",
            link: "/",
            logo: [
                '/images/launchdarkly.png',
            ],
            linkedin: "https://www.linkedin.com/in/clairevo/"
        },
        {
            image: "/images/master-session-img-5.png",
            title: "Aakash Gupta",
            desc: "Founder of Product Growth Newsletter",
            link: "/",
            logo: [
                '/images/apollo.png',
                '/images/epic.png',
            ],
            linkedin: "https://www.linkedin.com/in/aagupta/"
        },
        {
            image: "/images/master-session-img-6.png",
            title: "Dhilip K",
            desc: "Global Alliance Leader, Adobe",
            link: "/",
            logo: [
                '/images/adobe.png',
            ],
            linkedin: "https://www.linkedin.com/in/dhilip-k-959a113/"
        },
        {
            image: "/images/master-session-img-7.png",
            title: "Ravi Karthik",
            desc: "CMO, ACT Fibrenet",
            link: "/",
            logo: [
                '/images/act.png',
                '/images/f.png',
                '/images/pg.png',
            ],
            linkedin: "https://www.linkedin.com/in/ravikarthikr/"
        },
        {
            image: "/images/master-session-img-8.png",
            title: "Rachna Rao",
            desc: "Senior Director of Product, Scopely",
            link: "/",
            logo: [
                '/images/scopely.png',
                '/images/zynga.png',
            ],
            linkedin: "https://www.linkedin.com/in/rachnarao/"
        },
        {
            image: "/images/master-session-img-9.png",
            title: "Pawan Muralidhar",
            desc: "VP Product, Freight Tiger",
            link: "/",
            logo: [
                '/images/tiger.png',
                '/images/grab.png',
            ],
            linkedin: "https://www.linkedin.com/in/pavanmchengi/"
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
        <motion.section className="master-speaker-section w-full overflow-hidden"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: .8
            }}
        >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Content */}
                <div className="lg:col-span-4 pt-10" >
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight">Master Speaker Sessions</h2>
                        <p className="flex items-start gap-2"><img src="../../images/right-click.png" alt="arrow" className="mt-1" /> Every two weeks, we bring in 3–4 industry leaders</p>
                        <p className="flex items-start gap-2"><img src="../../images/right-click.png" alt="arrow" className="mt-1" /> These Master Speakers share cutting‑edge insights, real‑world case studies, and strategic guidance to elevate your AI-first PM practice.</p>
                    </div>
                </div>

                {/* Right Content - Testimonial Slider */}
                <div className="video-card-section lg:col-span-8">
                    <div className="">
                        <div className="flex">
                            <Marquee speed={100} delay={3} play={play} autoFill pauseOnHover className="">
                                {data?.map((item, index) => {
                                    return (
                                        <div className="card" key={index}>
                                            <img src={item?.image} alt="alumni-icon" className="speaker-img" />
                                            <a href={item?.link} target="_blank">{item?.title}</a>
                                            <p className="text-sm w-full">{item?.desc}</p>

                                            <div className="flex gap-2 items-center justify-between">
                                                <div className="flex gap-2 items-center">
                                                    {item?.logo?.map((logo, i) => {
                                                        return (
                                                            <img src={logo} alt="logo" key={i} />
                                                        )
                                                    })}
                                                </div>
                                                <a href={item?.linkedin} target="_blank"><img src="/images/linkedin.png" alt="" /></a>
                                            </div>
                                        </div>
                                    )
                                })}
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section >
    )
} 