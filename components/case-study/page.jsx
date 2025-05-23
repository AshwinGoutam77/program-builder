"use client";

import { useState } from "react";
import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
const caseStudies = [
  {
    title: "1-1’s with Shravan",
    builder: "Akanksha Garg, PM @ EPAM",
    summary:
      "Ask what’s on your mind, get honest advice, and learn pesonally from Shravan, someone who’s built products from the ground up and been in your shoes",
    tools: ["n8n", "ChatGPT", "Webhook", "Zapier"],
    demoLink: "https://example.com",
    image: "/images/case-study-1.png",
  },
  {
    title: "Portfolio & Mock Interviews",
    builder: "Akanksha Garg, PM @ EPAM",
    summary:
      "Build a portfolio that truly reflects your journey and prep with mock interviews so you’re confident when it’s time to talk about it.",
    tools: ["n8n", "ChatGPT", "Webhook", "Zapier"],
    demoLink: "https://example.com",
    image: "/images/case-study-2.png",
  },
  {
    title: "Branding & Networking",
    builder: "Akanksha Garg, PM @ EPAM",
    summary:
      "Learn how to tell your story, build a brand that opens doors, and network with a community in that leads to real opportunities.",
    tools: ["n8n", "ChatGPT", "Webhook", "Zapier"],
    demoLink: "https://example.com",
    image: "/images/case-study-3.png",
  },
];

export default function CaseStudy() {
  const [selected, setSelected] = useState(null);

  const openModal = (index) => setSelected(index);
  const closeModal = () => setSelected(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      {/* <section className="w-full text-white py-20 px-4 md:px-8 lg:px-16 overflow-hidden bg-gray-950"> */}
      {/* Modal */}
      {selected !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-gray-900 border border-gray-700 rounded-xl max-w-2xl w-full p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white cursor-pointer"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold text-white mb-2">
              {caseStudies[selected].title}
            </h2>
            <p className="text-sm text-gray-400 mb-4">
              Built by {caseStudies[selected].builder}
            </p>

            <p className="text-gray-300 mb-4">
              {caseStudies[selected].summary}
            </p>

            {/* Screenshot or embed */}
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden mb-4">
              <img
                src={caseStudies[selected].image}
                alt="Product demo"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex justify-between items-center mt-6">
              <a
                href={caseStudies[selected].demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-btn"
              >
                View Live Product
              </a>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white text-sm cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <div>
        {/* <div className="mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                        Real Products Built by Our Cohort
                    </h2>
                    <p className="text-xl text-gray-200">
                        Witness the innovation from our Productathon—students ship live AI-driven products that solve real-world problems.
                    </p>
                </div> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {caseStudies.map((study, i) => (
            <div key={i} className="rounded-xl overflow-hidden">
              <img
                src={study.image}
                alt={study.title}
                className="max-h-full w-full object-contain rounded-xxl"
              />
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-violet-400 transition">
                  {study.title}
                </h3>
                {/* <p className="text-gray-300 text-sm mb-2">Built by {study.builder}</p> */}
                <p className="text-gray-200 mb-4 text-md">{study.summary}</p>
                {/* <button
                                    onClick={() => openModal(i)}
                                    className="secondary-btn"
                                >
                                    View Case Study <ChevronRightIcon className="w-5" />
                                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* </section> */}
    </motion.div>
  );
}
