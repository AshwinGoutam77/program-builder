"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import YouTubeModal from "./youtubeModal"

const slides = [
    {
        id: 1,
        subtitle: "Shravan Tickoo",
        title: "Former Director of Product at a Series A startup",
        description:
            "Shravan Tickoo is a globally recognized Product Management Influencer and Educator, with 165K+ followers on LinkedIn and 42K+ on YouTube. A guest lecturer at IIMs, IITs, NTU, and ISB, he bridges academic theory with real-world expertise, empowering product managers worldwide. He’s mentored 500+ PMs now at Microsoft, Google, Meta, and Amazon, and was honored by PMI as a Leading Product Educator. Drawing on timeless wisdom from the Bhagavad Gita, Shravan instills integrity, resilience, and honest leadership.As an angel investor in 15+ startups across the US, Canada, Singapore, and India, he combines strategic insight with hands - on experience.",
        image: "/placeholder.svg?height=500&width=400",
        alt: "Business people on stairs",
    },
    {
        id: 2,
        subtitle: "Shravan Tickoo",
        title: "Former Director of Product at a Series A startup",
        description:
            "Shravan Tickoo is a globally recognized Product Management Influencer and Educator, with 165K+ followers on LinkedIn and 42K+ on YouTube. A guest lecturer at IIMs, IITs, NTU, and ISB, he bridges academic theory with real-world expertise, empowering product managers worldwide. He’s mentored 500+ PMs now at Microsoft, Google, Meta, and Amazon, and was honored by PMI as a Leading Product Educator. Drawing on timeless wisdom from the Bhagavad Gita, Shravan instills integrity, resilience, and honest leadership.As an angel investor in 15+ startups across the US, Canada, Singapore, and India, he combines strategic insight with hands - on experience.",
        image: "/placeholder.svg?height=500&width=400",
        alt: "Business people on stairs",
    },
    {
        id: 3,
        subtitle: "Shravan Tickoo",
        title: "Former Director of Product at a Series A startup",
        description:
            "Shravan Tickoo is a globally recognized Product Management Influencer and Educator, with 165K+ followers on LinkedIn and 42K+ on YouTube. A guest lecturer at IIMs, IITs, NTU, and ISB, he bridges academic theory with real-world expertise, empowering product managers worldwide. He’s mentored 500+ PMs now at Microsoft, Google, Meta, and Amazon, and was honored by PMI as a Leading Product Educator. Drawing on timeless wisdom from the Bhagavad Gita, Shravan instills integrity, resilience, and honest leadership.As an angel investor in 15+ startups across the US, Canada, Singapore, and India, he combines strategic insight with hands - on experience.",
        image: "/placeholder.svg?height=500&width=400",
        alt: "Business people on stairs",
    },
]

export default function AboutUs() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)
    const [showModal, setShowModal] = useState(false)
    const slideContainerRef = useRef(null)

    const nextSlide = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
        setTimeout(() => setIsAnimating(false), 500)
    }

    const prevSlide = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
        setTimeout(() => setIsAnimating(false), 500)
    }

    const goToSlide = (index) => {
        if (isAnimating || index === currentSlide) return
        setIsAnimating(true)
        setCurrentSlide(index)
        setTimeout(() => setIsAnimating(false), 500)
    }

    const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX)
    const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)
    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 100) nextSlide()
        if (touchStart - touchEnd < -100) prevSlide()
    }

    return (
        <div className="relative container mx-auto my-20">
            <div
                className="relative overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                ref={slideContainerRef}
            >
                <div
                    className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {slides.map((slide) => (
                        <div key={slide.id} className="min-w-full h-full flex flex-col md:flex-row">
                            <div className="w-full md:w-1/2 relative">
                                <img
                                    src="../../images/sarvan's-image.png"
                                    alt={slide.alt}
                                    className="object-cover rounded-lg"
                                />
                            </div>
                            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                                <div className="flex items-center mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                                    <div className="w-6 h-0.5 bg-blue-600 mr-2"></div>
                                    <span className="gradient">{slide.subtitle}</span>
                                </div>
                                <h2
                                    className="text-4xl md:text-3xl font-bold text-white mb-4 text-gray-900 animate-fade-in"
                                    style={{ animationDelay: "0.2s" }}
                                >
                                    {slide.title}
                                </h2>
                                <p className="text-gray-600 text-sm mb-8 text-white animate-fade-in" style={{ animationDelay: "0.3s" }}>
                                    {slide.description}
                                </p>
                                <div className="flex items-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
                                    <button
                                        onClick={() => setShowModal(true)}
                                        className="primary-btn mr-4"
                                    >
                                        How does Shravan teach?
                                    </button>
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={prevSlide}
                                            className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-sm hover:bg-gray-800 transition-colors"
                                            aria-label="Previous slide"
                                        >
                                            <ChevronLeftIcon className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={nextSlide}
                                            className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-sm hover:bg-gray-800 transition-colors"
                                            aria-label="Next slide"
                                        >
                                            <ChevronRightIcon className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-blue-600 w-4" : "bg-gray-400 hover:bg-gray-600"}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* YouTube Modal */}
            <YouTubeModal show={showModal} onClose={() => setShowModal(false)} />
        </div>
    )
}

