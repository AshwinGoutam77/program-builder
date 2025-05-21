"use client"
import { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import './page.css'
import Marquee from "react-fast-marquee";

export default function Testimonials() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
    })

    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setPrevBtnEnabled(emblaApi.canScrollPrev())
        setNextBtnEnabled(emblaApi.canScrollNext())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on("select", onSelect)
        emblaApi.on("reInit", onSelect)
    }, [emblaApi, onSelect])

    const videos = [
        "/images/video-1.png",
        "/images/video-2.png",
        "/images/video-3.png",
        "/images/video-4.png",
        "/images/video-5.png",
    ]

    const videoList = [...videos, ...videos]

    const TestimonialData = [
        {
            name: "Jenny Wilson",
            title: "Project Manager at Microsoft",
            image: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-1.jpg",
            description: "We saw immediate improvements in our portfolio performance after switching to Prisma. The guidance, integrated tools, and customizable investment options are unmatched in the industry. Their attention to detail and personalized approach have set a new benchmark."
        },
        {
            name: "Robert Fox",
            title: "Founder at Brain.co",
            image: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-2.jpg",
            description: "We saw immediate improvements in our portfolio performance after switching to Prisma. The guidance, integrated tools, and customizable investment options are unmatched in the industry. Their attention to detail and personalized approach have set a new benchmark."
        },
        {
            name: "Kristin Watson",
            title: "UX Designer at Google",
            image: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-3.jpg",
            description: "We saw immediate improvements in our portfolio performance after switching to Prisma. The guidance, integrated tools, and customizable investment options are unmatched in the industry. Their attention to detail and personalized approach have set a new benchmark."
        },
        {
            name: "John Smith",
            title: "CEO at Dsss",
            image: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-3.jpg",
            description: "We saw immediate improvements in our portfolio performance after switching to Prisma. The guidance, integrated tools, and customizable investment options are unmatched in the industry. Their attention to detail and personalized approach have set a new benchmark."
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
        <section className="testimonials-slider-section w-full text-white py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
            <div className="">
                <div>
                    <h2 className="m-auto text-center">
                        What Students Think <span className="block">about us?</span>
                    </h2>

                    <div className="buttons text-center">
                        <button>Jobs Cracked <img src="/images/white-arrow.png" alt="job" /></button>
                        <button>Lovely Comments</button>
                    </div>
                </div>

                <div
                    className="slider--testim mt-10"
                >
                    <Marquee speed={100} delay={3} play={play} autoFill pauseOnHover className="">
                        {TestimonialData &&
                            TestimonialData?.map((item, index) => {
                                return (
                                    <div className="item" key={index}>
                                        <div className="card">
                                            <div className="card-body">
                                                <p className="">{item?.description}</p>

                                                <div className="flex items-center justify-between mt-4">
                                                    <div className="flex items-center gap-2">
                                                        <img
                                                            src={item?.image}
                                                            alt={item?.name}
                                                            title={item?.name}
                                                            className="rounded-circle"
                                                            width="46px"
                                                            height="46px"
                                                            loading="lazy"
                                                        />
                                                        <div>
                                                            <p className="user-post text-sm">{item?.title}</p>
                                                            <p className="user-name text-sm">{item?.name}</p>
                                                        </div>
                                                    </div>
                                                    <div className="position-relative">
                                                        <img
                                                            src="/images/linkedin.png"
                                                            alt={item?.name}
                                                            title={item?.name}
                                                            className="rounded-circle"
                                                            width="26px"
                                                            height="26px"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </Marquee>
                </div>
            </div>
        </section>
    )
}
