'use client';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import './page.css';

const ProgramTabsSection = () => {
    const [activeTab, setActiveTab] = useState('professional');

    const tabs = [
        { id: '1', label: 'Aspiring Founders & Founders ' },
        { id: '2', label: 'Product Leaders, Managers & Associates' },
        { id: '3', label: 'Project & Program Managers' },
        { id: '4', label: 'Engineering Leads, Managers & Associates' },
        { id: '5', label: 'Designers & UX Specialists' },
        { id: '6', label: 'Business, Growth & Marketing Pros' },
    ];

    return (
        <section className='program-section'>
            <div className="container mx-auto">
                <div className="grid items-center grid-cols-1 gap-y-5 gap-x-0 lg:grid-cols-[40%_60%]">
                    <div>
                        <h2>Who is this Program for?</h2>
                        <ul className='my-8'>
                            <li><img src="/images/right-click.png" alt="icon" /><span>Aim to be top <span className="font-bold">1% operator</span></span></li>
                            <li><img src="/images/right-click.png" alt="icon" /><span>Deliver <span className="font-bold">10x value</span> before chasing titles</span></li>
                            <li><img src="/images/right-click.png" alt="icon" /><span>Dedicate <span className="font-bold">15-20 hrs</span> every week</span></li>
                        </ul>
                        <button className="primary-btn">Try For Free <img src="/images/arrow.png" alt="icon" /></button>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {tabs?.map((item, index) => {
                            return (
                                <div className="card" key={index}><p>{item.label}</p></div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgramTabsSection;