"use client"
import { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import './page.css'

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

    const testimonials = [
        {
            name: "Jenny Wilson",
            title: "Project Manager at Microsoft",
            image: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-1.jpg",
        },
        {
            name: "Robert Fox",
            title: "Founder at Brain.co",
            image: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-2.jpg",
        },
        {
            name: "Kristin Watson",
            title: "UX Designer at Google",
            image: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-3.jpg",
        },
        {
            name: "John Smith",
            title: "CEO at Devwings",
            image: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-3.jpg",
        },
    ]

    return (
        <section className="w-full text-white py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
            <div className="mx-auto container">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold text-white">
                        Trusted by 30k world <span className="block">class companies & design teams</span>
                    </h2>
                    <div className="flex justify-end space-x-2">
                        <button
                            className={`p-2 rounded-full border border-white/20 ${!prevBtnEnabled ? "opacity-50 cursor-not-allowed" : "hover:bg-white/10"}`}
                            onClick={scrollPrev}
                            disabled={!prevBtnEnabled}
                            aria-label="Previous slide"
                        >
                            <ChevronLeftIcon className="h-5 w-5 text-white" />
                        </button>
                        <button
                            className={`p-2 rounded-full border border-white/20 ${!nextBtnEnabled ? "opacity-50 cursor-not-allowed" : "hover:bg-white/10"}`}
                            onClick={scrollNext}
                            disabled={!nextBtnEnabled}
                            aria-label="Next slide"
                        >
                            <ChevronRightIcon className="h-5 w-5 text-white" />
                        </button>
                    </div>
                </div>

                <div className="mt-10 overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="min-w-[100%] sm:min-w-[50%] lg:min-w-[33.3333%] px-2"
                            >
                                <div className="bg-gray-900 rounded-md shadow px-6 py-10 mx-2">
                                    <div className="relative w-24 h-24 mx-auto">
                                        <img className="relative object-cover w-24 h-24 mx-auto rounded-full" src={testimonial?.image} alt="" />
                                        <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                                            <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                <path
                                                    d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <blockquote className="mt-6 text-md md:text-sm text-white text-center">
                                        <p>“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.,Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.,Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.,Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.”</p>
                                    </blockquote>
                                    <p className="text-white font-semibold mt-6 text-center">{testimonial.name}</p>
                                    <p className="text-gray-400 text-center">{testimonial.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="overflow-hidden mt-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative">
                    <div
                        className="flex  gap-10 animate-marquee whitespace-nowrap"
                        style={{ animationDuration: "40s" }}
                    >
                        {/* {videoList.map((src, idx) => (
                            <video
                                key={idx}
                                src={src}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-[300px] h-[200px] object-cover mx-0"
                            />
                        ))} */}

                        {videoList.map((src, idx) => (
                            <img
                                key={idx}
                                src={src}
                                alt="Video Thumbnail"
                                className="w-[300px] h-[300px] object-cover mx-0"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
