'use client';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

const ProgramTabsSection = () => {
    const [activeTab, setActiveTab] = useState('professional');

    const tabs = [
        { id: 'professional', label: 'Professional Growth' },
        { id: 'personal', label: 'Personal Growth' },
        { id: 'mindset', label: 'Mindset Shift' },
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <p className="gradient mb-2">SOLUTIONS</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        One Program<br />endless solutions
                    </h2>
                </div>

                <div className="flex flex-col items-center">
                    <div className="flex flex-wrap justify-center gap-2 border-b border-white/10 mb-8 w-full max-w-2xl">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                className={`px-6 py-3 text-center transition-colors ${activeTab === tab.id
                                    ? 'text-white border-b-2 border-purple-500'
                                    : 'text-white/60 hover:text-white/80'
                                    }`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="w-full max-w-4xl mx-auto">
                        <div className="bg-[#1A1A2E] rounded-2xl p-6 md:p-8">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="w-full md:w-1/2">
                                    <div className="relative bg-gradient-to-br from-purple-500/20 to-purple-900/20 rounded-xl">
                                        <img
                                            src="../../images/tab-1.png"
                                            alt="Profile 2"
                                            className="object-cover rounded-xl"
                                        />
                                    </div>
                                </div>

                                <div className="w-full md:w-1/2 flex flex-col justify-center">
                                    <h3 className="text-2xl font-bold text-white mb-4">
                                        Help, advice and guidance from professional consultants
                                    </h3>
                                    <p className="text-white/70 mb-6">
                                        Get expert guidance and support from industry professionals who have worked with leading companies.
                                    </p>
                                    <button className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors group">
                                        <span>Follow our Twitter for more</span>
                                        <ArrowRightIcon className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgramTabsSection;