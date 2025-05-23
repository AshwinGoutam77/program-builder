'use client'
import React, { useRef } from 'react';
import './page.css';
import { motion, useInView } from 'framer-motion';

const features = [
    {
        name: 'Push to deploy.',
        description:
            'From Spotify to Duolingo, visionary founders are demanding an AI-first mindset.',
        icon: '/images/right-click.png',
    },
    {
        name: 'SSL certificates.',
        description: 'AI is not our competitor—it’s our greatest enabler. — Spotify Founder',
        icon: '/images/right-click.png',
    },
    {
        name: 'Database backups.',
        description: 'Every PM must be fluent in AI or risk becoming obsolete.— Duolingo Founder',
        icon: '/images/right-click.png',
    },
];

export default function ProductManagement() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section ref={ref} className="project-management-section" id='project-management'>
            <div className="container mx-auto">
                <div className="mx-auto grid items-center max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">

                    {/* Left side: slide in from left */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="lg:pt-4 lg:pr-8"
                    >
                        <div className="lg:max-w-lg">
                            <h2>Product management is changing in the age of AI</h2>
                            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="p-0 m-0">
                                        <p className="text-white flex items-start gap-2">
                                            <img src={feature.icon} alt="icon" className="mt-2" />
                                            {feature.description}
                                        </p>
                                    </div>
                                ))}
                            </dl>
                            <a
                                href="#curriculum-overview"
                                className="text-base/7 mt-10 font-semibold text-[#C9C2FF] flex gap-2 items-center"
                            >
                                Find more about the Structure of program{' '}
                                <img src="../../images/light-arrow.png" alt="" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right side: slide in from right */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="pm-cards"
                    >
                        {/* Card 1 */}
                        <div className="card">
                            <div className="card-inner">
                                <div className="card-front">
                                    <img src="/images/duolingo.png" alt="Duolingo" />
                                    <img src="/images/times-of-india.png" alt="Times of India" />
                                    <h4>How Duolingo built an AI-first product culture?</h4>
                                    <p>
                                        The integration of artificial intelligence (AI) into everyday work routines is no longer a futuristic concept but a
                                        current reality
                                    </p>
                                    <a href="#">
                                        Read more <img src="/images/blue-arrow.png" alt="arrow" />
                                    </a>
                                </div>
                                <div className="card-back">
                                    <a
                                        href="https://www.forbes.com/sites/douglaslaney/2025/04/09/selling-ai-strategy-to-employees-shopify-ceos-manifesto/"
                                        className="primary-btn"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Read now <img src="/images/arrow.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="card card-2">
                            <div className="card-inner">
                                <div className="card-front">
                                    <img src="/images/shopify.png" alt="Shopify" />
                                    <img src="/images/forbes.png" alt="Forbes" />
                                    <h4>Shopify CEO Manifesto Says “AI Now Mandatory”</h4>
                                    <p>Shopify CEO mandates AI proficiency for all employees —signaling that mastering AI is now essential, not optional.</p>
                                    <a href="#">
                                        Read more <img src="/images/blue-arrow.png" alt="arrow" />
                                    </a>
                                </div>
                                <div className="card-back">
                                    <a
                                        href="https://timesofindia.indiatimes.com/technology/tech-news/duolingo-ceos-all-hands-email-to-employee-says-we-are-becoming-ai-first-and-these-jobs-will-go/articleshow/120731541.cms"
                                        className="primary-btn"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Read now <img src="/images/arrow.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
