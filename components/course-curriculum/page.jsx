"use client"

import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import './page.css'

export default function CourseCurriculum() {
    const [openIndex, setOpenIndex] = useState(0)
    const [activeTab, setActiveTab] = useState("live")

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index)
    }

    return (
        <div className="w-full text-white py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
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
                                <span className="week-box">Week {i + 1}</span>
                                <span className="font-medium">
                                    {i === 0
                                        ? "Product Thinking in an AI World"
                                        : "Break your goal into actionable input metrics"}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <ChevronDownIcon
                                    className={`h-4 w-4 transform transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""
                                        }`}
                                />
                            </div>
                        </button>

                        {openIndex === i && (
                            <div className="border-t border-gray-800 px-4 pb-6 pt-2">
                                {i === 0 ? (
                                    <>
                                        {/* Tabs */}
                                        <div className="flex gap-10 border-b border-gray-800 text-sm">
                                            {["live", "assignments", "reading"].map((tab) => (
                                                <button
                                                    key={tab}
                                                    onClick={() => setActiveTab(tab)}
                                                    className={`py-2 text-start w-full ${activeTab === tab
                                                        ? "border-b-1 border-white text-white"
                                                        : "text-gray-400"
                                                        }`}
                                                >
                                                    {{
                                                        live: "Live Theory Session",
                                                        assignments: "Live Lab Session",
                                                    }[tab]}
                                                </button>
                                            ))}
                                        </div>

                                        {/* Tab Content */}
                                        <div className="mt-4 tabs-content-section">
                                            {activeTab === "live" && (
                                                <div className="grid grid-cols-2 items-center gap-6">
                                                    <img src="../../images/week-1.png" alt="img" className="rounded" />
                                                    <div>
                                                        <div className="flex gap-2">
                                                            <span className="badge">SATURDAY- 12PM IST</span>
                                                            <span className="badge"> LIVE • 3hrs</span>
                                                        </div>

                                                        <ul>
                                                            <li><img src="/images/right-click.png" alt="icom" />How to think like a 1% Product Manager? </li>
                                                            <li><img src="/images/right-click.png" alt="icom" />How AI is changing the work of Product Managers?</li>
                                                            <li><img src="/images/right-click.png" alt="icom" />Where is the future of Product Management?</li>
                                                            <li><img src="/images/right-click.png" alt="icom" />The Mindset needed to become a 1% Product Manager</li>
                                                        </ul>
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
