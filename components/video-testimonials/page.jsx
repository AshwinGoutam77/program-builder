"use client"
import { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"
import { PlayCircleIcon, PlayIcon } from "@heroicons/react/24/outline"
import "./page.css"
export default function VideoTestimonialSlider() {
    const AUTOPLAY_INTERVAL = 3000;
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        skipSnaps: false,
    });

    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        setNextBtnEnabled(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
    }, [emblaApi, onSelect]);

    // ✅ Auto-play Effect
    useEffect(() => {
        if (!emblaApi) return;

        const interval = setInterval(() => {
            emblaApi.scrollNext();
        }, AUTOPLAY_INTERVAL);

        return () => clearInterval(interval); // Clear on unmount or emblaApi change
    }, [emblaApi]);
    const testimonials = [
        {
            id: 1,
            title: "Jitin Nagpal",
            description: "Founder at LifeBro",
            image: "/images/students.png",
            videoUrl: "#",
            exp: "19+ Years of Experience"
        },
        {
            id: 2,
            title: "Jitin Nagpal",
            description: "Founder at LifeBro",
            image: "/images/students.png",
            videoUrl: "#",
            exp: "19+ Years of Experience"
        },
        {
            id: 3,
            title: "Jitin Nagpal",
            description: "Founder at LifeBro",
            image: "/images/students.png",
            videoUrl: "#",
            exp: "19+ Years of Experience"
        },
        {
            id: 4,
            title: "Jitin Nagpal",
            description: "Founder at LifeBro",
            image: "/images/students.png",
            videoUrl: "#",
            exp: "19+ Years of Experience"
        },
    ]

    return (
        <div className="w-full text-white py-20 px-4 md:px-8 lg:px-16 overflow-hidden" id="our-alumni">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left Content */}
                    <div className="lg:col-span-4">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold leading-tight">Hear from our Students!</h2>
                            <p>Real voices. Real journeys. Real impact. It’s stories from those who dared to do the work because the best proof is lived experience</p>
                        </div>
                    </div>

                    {/* Right Content - Testimonial Slider */}
                    <div className="lg:col-span-8 relative">
                        <div className="overflow-hidden" ref={emblaRef}>
                            <div className="flex">
                                {testimonials.map((testimonial) => (
                                    <div
                                        key={testimonial.id}
                                        className="pl-4"
                                    >
                                        <div className="bg-gray-900 h-100  w-[300px] testimonial-card shrink-0 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/30">
                                            <div className="relative">
                                                <div className="bg-[#0E8A7B] aspect-square">
                                                    <img
                                                        src={testimonial.image || "/placeholder.svg"}
                                                        alt="Testimonial"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <button
                                                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:opacity-100 transition-opacity"
                                                    aria-label="Play video"
                                                >
                                                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                                        <PlayIcon className="h-6 w-6 text-white fill-white" />
                                                    </div>
                                                </button>
                                            </div>
                                            <div className="flex items-center justify-between p-5">
                                                <div className="w-full">
                                                    <h3 className="font-semibold text-lg">{testimonial.title}</h3>
                                                    <p className="text-gray-400 text-sm mt-1">{testimonial.description}</p>
                                                </div>
                                                <p className="text-gray-400 text-sm text-end">{testimonial?.exp}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex justify-end mt-6 space-x-2">
                            <button
                                className={`p-2 rounded-full border border-white/20 ${!prevBtnEnabled ? "opacity-50 cursor-not-allowed" : "hover:bg-white/10"}`}
                                onClick={scrollPrev}
                                disabled={!prevBtnEnabled}
                                aria-label="Previous slide"
                            >
                                <ChevronLeftIcon className="h-5 w-5" />
                            </button>
                            <button
                                className={`p-2 rounded-full border border-white/20 ${!nextBtnEnabled ? "opacity-50 cursor-not-allowed" : "hover:bg-white/10"}`}
                                onClick={scrollNext}
                                disabled={!nextBtnEnabled}
                                aria-label="Next slide"
                            >
                                <ChevronRightIcon className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
