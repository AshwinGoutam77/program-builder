"use client";
import React, { useState } from "react";
import "./page.css";
import YouTubeModal from "../about-us/youtubeModal";
import { motion } from "framer-motion";
import { PlayIcon } from "@heroicons/react/24/outline";

export default function Teaching() {
  const [showModal, setShowModal] = useState(false);
  const [VideoLink, setVideoLink] = useState("");
  return (
    <>
      <section className="teaching-section " id="sarvan-teaching">
        <div className="container mx-auto text-center">
          <h2>See How Shravan Teaches</h2>

          <div className="carrer-advide-section">
            <h4>Career advice</h4>
            <div className="grid md:grid-cols-2 gap-10">
              <div
                className="relative"
                onClick={() => {
                  setShowModal(true);
                  setVideoLink(
                    "https://www.youtube.com/embed/cuH1EpGIkDo?si=jc1uDmoe-I4Xkesz"
                  );
                }}
              >
                <button
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:opacity-100 transition-opacity"
                  aria-label="Play video"
                >
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <PlayIcon className="h-6 w-6 text-white fill-white" />
                  </div>
                </button>
                <img src="/images/video-thumbnail-1.png" alt="video" />
              </div>
              <div
                className="relative"
                onClick={() => {
                  setShowModal(true);
                  setVideoLink(
                    "https://www.youtube.com/embed/cuH1EpGIkDo?si=jc1uDmoe-I4Xkesz"
                  );
                }}
              >
                <button
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:opacity-100 transition-opacity"
                  aria-label="Play video"
                >
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <PlayIcon className="h-6 w-6 text-white fill-white" />
                  </div>
                </button>
                <img src="/images/video-thumbnail-2.png" alt="video" />
              </div>
            </div>
          </div>

          <motion.div
            className="product-sessions-section"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.6,
            }}
          >
            <h4>Product Sessions</h4>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
              <div
                onClick={() => {
                  setShowModal(true);
                  setVideoLink(
                    "https://www.youtube.com/embed/Ljchh5jsEFc?si=tg6JVuR7o6Q7ygHf"
                  );
                }}
              >
                <div className="relative">
                  <button
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:opacity-100 transition-opacity"
                    aria-label="Play video"
                  >
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <PlayIcon className="h-6 w-6 text-white fill-white" />
                    </div>
                  </button>
                  <img src="/images/video-thumbnail-3.png" alt="video" />
                </div>
                <h5>Gen AI & LLM’s for Product Managers</h5>
              </div>
              <div
                onClick={() => {
                  setShowModal(true);
                  setVideoLink(
                    "https://www.youtube.com/embed/faH9HPujo9o?si=OE8s9cK7akfcjaC9"
                  );
                }}
              >
                <div className="relative">
                  <button
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:opacity-100 transition-opacity"
                    aria-label="Play video"
                  >
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <PlayIcon className="h-6 w-6 text-white fill-white" />
                    </div>
                  </button>
                  <img src="/images/video-thumbnail-4.png" alt="video" />
                </div>
                <h5>
                  System Dynamics for PM’s. How to build Large Scale Systems?
                </h5>
              </div>
              <div
                onClick={() => {
                  setShowModal(true);
                  setVideoLink(
                    "https://www.youtube.com/embed/gQEh_uxz4k8?si=A2yb8wjp-wDBE8PN"
                  );
                }}
              >
                <div className="relative">
                  <button
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:opacity-100 transition-opacity"
                    aria-label="Play video"
                  >
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <PlayIcon className="h-6 w-6 text-white fill-white" />
                    </div>
                  </button>
                  <img src="/images/video-thumbnail-5.png" alt="video" />
                </div>
                <h5>System Design for PM’s explained through Spotify.</h5>
              </div>
              <div
                onClick={() => {
                  setShowModal(true);
                  setVideoLink(
                    "https://www.youtube.com/embed/gQEh_uxz4k8?si=UiRFpBPRypQEI26Z"
                  );
                }}
              >
                 <div className="relative">
                  <button
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:opacity-100 transition-opacity"
                    aria-label="Play video"
                  >
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <PlayIcon className="h-6 w-6 text-white fill-white" />
                    </div>
                  </button>
                  <img src="/images/video-thumbnail-6.png" alt="video" />
                </div>
                <h5>How to Break into Product Management?</h5>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="product-sessions-section container"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.7,
          }}
        >
          <h4>Product Sessions</h4>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 ">
            <div
              onClick={() => {
                setShowModal(true);
                setVideoLink(
                  "https://www.youtube.com/embed/W6VFfxEDQzs?si=74H1YxL2pDBK2-tn"
                );
              }}
            >
               <div className="relative">
                  <button
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:opacity-100 transition-opacity"
                    aria-label="Play video"
                  >
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <PlayIcon className="h-6 w-6 text-white fill-white" />
                    </div>
                  </button>
                  <img src="/images/video-thumbnail-7.png" alt="video" />
                </div>
              <h5>
                How Matt Built Log Rocket, A Product That Is Used By 3,500+
                Companies?{" "}
              </h5>
            </div>
            <div
              onClick={() => {
                setShowModal(true);
                setVideoLink(
                  "https://www.youtube.com/embed/dA7tKnur5IM?si=9W0Wjy2S5prPtwNo"
                );
              }}
            >
               <div className="relative">
                  <button
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:opacity-100 transition-opacity"
                    aria-label="Play video"
                  >
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <PlayIcon className="h-6 w-6 text-white fill-white" />
                    </div>
                  </button>
                  <img src="/images/video-thumbnail-8.png" alt="video" />
                </div>
              <h5>
                Product Cultures, Switching Jobs, Product Manager Mindset :
                Diving Deep with Adobe's Group PM Dhilip
              </h5>
            </div>
            <div
              onClick={() => {
                setShowModal(true);
                setVideoLink(
                  "https://www.youtube.com/embed/aQgAFwlNb-c?si=-42V548hzuhRjHH3"
                );
              }}
            >
               <div className="relative">
                  <button
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:opacity-100 transition-opacity"
                    aria-label="Play video"
                  >
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <PlayIcon className="h-6 w-6 text-white fill-white" />
                    </div>
                  </button>
                  <img src="/images/video-thumbnail-9.png" alt="video" />
                </div>
              <h5>
                Product Cultures, Switching Jobs, Product Manager Mindset :
                Diving Deep with Adobe's Group PM Dhilip
              </h5>
            </div>
            <div
              onClick={() => {
                setShowModal(true);
                setVideoLink(
                  "https://www.youtube.com/embed/3Ntq-LyiRIA?si=qOndghBw8LkGEnNK"
                );
              }}
            >
               <div className="relative">
                  <button
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:opacity-100 transition-opacity"
                    aria-label="Play video"
                  >
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <PlayIcon className="h-6 w-6 text-white fill-white" />
                    </div>
                  </button>
                  <img src="/images/video-thumbnail-10.png" alt="video" />
                </div>
              <h5>
                Become a Better Product Manager, Make wise career switch with
                Aakash Gupta ( Product Growth Guy)
              </h5>
            </div>
          </div>
        </motion.div>
      </section>
      <YouTubeModal
        show={showModal}
        onClose={() => setShowModal(false)}
        VideoLink={VideoLink}
      />
    </>
  );
}
