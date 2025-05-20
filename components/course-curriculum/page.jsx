"use client"

import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

export default function CourseCurriculum() {
    const [openIndex, setOpenIndex] = useState(0)
    const [activeTab, setActiveTab] = useState("live")

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index)
    }

    return (
        <div className="bg-black text-white py-20 px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-10">
                    <p className="gradient mb-1">Course Curriculum</p>
                    <h1 className="text-4xl font-bold mb-2">What will you learn?</h1>
                    <p className="text-sm text-gray-400">
                        The curriculum teaches you step-by-step, how few companies build in the real world.
                    </p>
                </div>

                {[...Array(4)].map((_, i) => (
                    <div
                        key={i}
                        className="border border-gray-800 rounded-lg overflow-hidden mb-4 transition-all duration-300"
                    >
                        <button
                            onClick={() => toggleAccordion(i)}
                            className="w-full flex items-center justify-between p-4 focus:outline-none"
                        >
                            <div className="flex items-center gap-4 text-left">
                                <span className="text-gray-400">0{i + 1}</span>
                                <span className="font-medium">
                                    {i === 0
                                        ? "Become problem obsessed, instead of jumping to solutions"
                                        : "Break your goal into actionable input metrics"}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-400">Week {i + 1}</span>
                                <ChevronDownIcon
                                    className={`h-4 w-4 transform transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""
                                        }`}
                                />
                            </div>
                        </button>

                        {openIndex === i && (
                            <div className="bg-gray-900 px-4 pb-6 pt-2">
                                {i === 0 ? (
                                    <>
                                        {/* Tabs */}
                                        <div className="flex gap-6 border-b border-gray-800 text-sm">
                                            {["live", "assignments", "reading"].map((tab) => (
                                                <button
                                                    key={tab}
                                                    onClick={() => setActiveTab(tab)}
                                                    className={`py-2 ${activeTab === tab
                                                        ? "border-b-2 border-white text-white"
                                                        : "text-gray-400"
                                                        }`}
                                                >
                                                    {{
                                                        live: "Live Session + Lab Session",
                                                        assignments: "Group Assignments + Presentations",
                                                        reading: "Pre read/Post read + Recorded lectures",
                                                    }[tab]}
                                                </button>
                                            ))}
                                        </div>

                                        {/* Tab Content */}
                                        <div className="mt-4">
                                            {activeTab === "live" && (
                                                <div className="grid grid-cols-2 items-center gap-6">
                                                    <img src="../../images/tab-1.png" alt="img" className="rounded" />
                                                    <div>
                                                        <h4 className="text-4xl md:text-2xl font-bold text-white mb-4 text-gray-900 animate-fade-in">Help, advice and guidance from professional consultants</h4>
                                                        <p className="text-sm mb-4">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                                            sint. Velit officia consequat duis enim velit mollit. Exercitation veniam
                                                            consequat sunt nostrud amet.</p>
                                                        <a href="#" className="text-white text-sm flex items-center gap-2">Follow our Twitter for more <ChevronRightIcon className="w-4" /></a>
                                                    </div>
                                                </div>
                                            )}

                                            {activeTab === "assignments" && (
                                                <div className="bg-gray-800 p-4 rounded-lg">
                                                    <h3 className="text-xl font-semibold mb-3">Group Assignments</h3>
                                                    <p className="text-gray-400">
                                                        Work with your peers on practical assignments that reinforce the concepts learned in the live
                                                        sessions.
                                                    </p>
                                                </div>
                                            )}

                                            {activeTab === "reading" && (
                                                <div className="bg-gray-800 p-4 rounded-lg">
                                                    <h3 className="text-xl font-semibold mb-3">Pre and Post Reading Materials</h3>
                                                    <p className="text-gray-400">
                                                        Access curated reading materials and recorded lectures to prepare for and review after live
                                                        sessions.
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </>
                                ) : (
                                    <p className="text-gray-400">Content for Week {i + 1} will be unlocked soon.</p>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
