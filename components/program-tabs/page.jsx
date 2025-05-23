'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './page.css';

const tabs = [
  {
    id: '1',
    label: 'Aspiring Founders & Founders',
    desc: 'Building 0→1 and 1→10 using AI-first strategies.',
  },
  {
    id: '2',
    label: 'Product Managers & Leaders',
    desc: 'Elevate from backlog managers to drive company-wide AI adoption and scalable roadmaps.',
  },
  {
    id: '3',
    label: 'Project & Program Managers',
    desc: 'Integrate AI workflows into complex project deliveries.',
  },
  {
    id: '4',
    label: 'Engineering Managers & Leaders',
    desc: 'Bridge product vision with AI-driven system design.',
  },
  {
    id: '5',
    label: 'Designers & UX Specialists',
    desc: 'Leverage AI for rapid prototyping and user research.',
  },
  {
    id: '6',
    label: 'Business, Growth & Marketing Pros',
    desc: 'Use AI insights to optimize funnels and targeting.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      ease: "easeInOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function ProgramTabsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className='program-section' id='program-section'>
      <div className="container mx-auto">
        <div className="grid items-center grid-cols-1 gap-y-10 gap-x-0 lg:grid-cols-[40%_60%]">

          {/* Left side: slide in from left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2>Who is this <span className="block">Program for?</span></h2>
            <ul className='my-8'>
              <li><img src="/images/right-click.png" alt="icon" /><span>Aim to be top <span className="font-bold">1% operator</span></span></li>
              <li><img src="/images/right-click.png" alt="icon" /><span>Deliver <span className="font-bold">10x value</span> before chasing titles</span></li>
              <li><img src="/images/right-click.png" alt="icon" /><span>Dedicate <span className="font-bold">15-20 hrs</span> every week</span></li>
            </ul>
            <button className="primary-btn">
              Apply Now <img src="/images/arrow.png" alt="icon" />
            </button>
          </motion.div>

          {/* Right side: cards staggered coming from right */}
          <div className="w-full max-w-screen-lg mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10"
            >
              {tabs.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={cardVariants}
                  className="card"
                >
                  <div className="front">
                    <p>{item.label}</p>
                  </div>
                  <div className="back">
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
