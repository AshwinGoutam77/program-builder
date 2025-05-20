"use client"

import { useState } from "react"
import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline"

const caseStudies = [
    {
        title: "Varun Khanna",
        exp: "12+ Years of Exp",
        summary:
            "Product Lead @ Google",
        image: "/images/alumini-1.jpeg",
    },
    {
        title: "Dev Yadav",
        exp: "10+ Years of Exp",
        summary:
            "Product Lead @Agthia Group",
        image: "/images/alumini-2.jpeg",
    },
    {
        title: "Shobhit Gupta",
        exp: "4+ Years of Exp",
        summary:
            "SPM @ Service Now",
        image: "/images/alumini-3.jpeg",
    },
    {
        title: "Varun Khanna",
        exp: "12+ Years of Exp",
        summary:
            "Product Lead @ Google",
        image: "/images/alumini-1.jpeg",
    },
]

export default function Alumni() {

    return (
        <section className="w-full text-white py-20 px-4 md:px-8 lg:px-16 overflow-hidden bg-gray-950">
            <div className="container mx-auto relative z-10">
                <div className="mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                        Our Alumni
                    </h2>
                    <p className="text-xl w-[85%] m-auto text-gray-200">
                        These exceptional students, thriving at leading companies who exemplify the highest standards of excellence, resilience, and leadership. Explore their profiles and get inspired by their journeys of growth, achievement, and impact
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {caseStudies.map((study, i) => (
                        <div
                            key={i}
                            className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-violet-500/30 transition duration-300 group"
                        >
                            <div className="h-70 bg-gradient-to-br from-violet-900/30 to-teal-900/30 relative">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <img
                                        src={study.image}
                                        alt={study.title}
                                        className="max-h-full w-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-violet-400 transition">
                                    {study.title}
                                </h3>
                                <p className="text-gray-300 text-sm mb-2">Built by {study.exp}</p>
                                <p className="text-gray-200 mb-4">{study.summary}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
