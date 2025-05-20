"use client"
import { useState, useEffect, useCallback } from "react";
import { ArrowLeftCircleIcon, ArrowUpRightIcon, PlayIcon } from "@heroicons/react/24/outline"
import useEmblaCarousel from "embla-carousel-react"

export default function VideoTestimonialSlider() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        skipSnaps: false,
    })

    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
        setPrevBtnEnabled(emblaApi.canScrollPrev())
        setNextBtnEnabled(emblaApi.canScrollNext())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on("select", onSelect)
        emblaApi.on("reInit", onSelect)
    }, [emblaApi, onSelect])

    const testimonials = [
        {
            id: 1,
            title: "Analytics & report",
            description: "Amet minim mollit non deserunt ullamco",
            image: "/placeholder.svg?height=200&width=200",
            videoUrl: "#",
        },
        {
            id: 2,
            title: "Analytics & report",
            description: "Amet minim mollit non deserunt ullamco",
            image: "/placeholder.svg?height=200&width=200",
            videoUrl: "#",
        },
        {
            id: 3,
            title: "Analytics & report",
            description: "Amet minim mollit non deserunt ullamco",
            image: "/placeholder.svg?height=200&width=200",
            videoUrl: "#",
        },
        {
            id: 4,
            title: "Analytics & report",
            description: "Amet minim mollit non deserunt ullamco",
            image: "/placeholder.svg?height=200&width=200",
            videoUrl: "#",
        },
    ]

    return (
        <div className="w-full bg-[#1A0B2E] text-white py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left Content */}
                    <div className="lg:col-span-3">
                        <div className="space-y-6">
                            <div className="flex items-center space-x-1">
                                <div className="h-1 w-4 bg-purple-400 rounded-full"></div>
                                <div className="h-1 w-1 bg-purple-400 rounded-full"></div>
                                <div className="h-1 w-1 bg-purple-400 rounded-full"></div>
                                <div className="h-1 w-1 bg-purple-400 rounded-full"></div>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold leading-tight">Exclusive Guest Sessions!</h2>
                            <button
                                variant="outline"
                                className="rounded-full border-white text-white hover:bg-white hover:text-[#1A0B2E] transition-all"
                            >
                                APPLY NOW <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    {/* Right Content - Testimonial Slider */}
                    <div className="lg:col-span-9 relative">
                        <div className="overflow-hidden" ref={emblaRef}>
                            <div className="flex">
                                {testimonials.map((testimonial) => (
                                    <div
                                        key={testimonial.id}
                                        className="flex-[0_0_90%] sm:flex-[0_0_45%] md:flex-[0_0_30%] min-w-0 pl-4 first:pl-0"
                                    >
                                        <div className="bg-[#1E1231] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/30">
                                            <div className="relative">
                                                <div className="bg-[#0E8A7B] aspect-square">
                                                    <img
                                                        src={testimonial.image || "/placeholder.svg"}
                                                        alt="Testimonial"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <button
                                                    className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity"
                                                    aria-label="PlayIcon video"
                                                >
                                                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                                        <PlayIcon className="h-6 w-6 text-white fill-white" />
                                                    </div>
                                                </button>
                                            </div>
                                            <div className="p-5">
                                                <h3 className="font-semibold text-lg">{testimonial.title}</h3>
                                                <p className="text-gray-400 text-sm mt-1">{testimonial.description}</p>
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
                                <ArrowLeftCircleIcon className="h-5 w-5" />
                            </button>
                            <button
                                className={`p-2 rounded-full border border-white/20 ${!nextBtnEnabled ? "opacity-50 cursor-not-allowed" : "hover:bg-white/10"}`}
                                onClick={scrollNext}
                                disabled={!nextBtnEnabled}
                                aria-label="Next slide"
                            >
                                <ArrowUpRightIcon className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
