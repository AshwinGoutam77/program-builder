"use client";
import React, { useState } from "react";
import "./page.css";
import YouTubeModal from "../about-us/youtubeModal";
import { motion } from "framer-motion";

export default function Teaching() {
  const [showModal, setShowModal] = useState(false);
  const [VideoLink, setVideoLink] = useState("");
  return (
    <>
      <section className="teaching-section ">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            See How Shravan Teaches
          </motion.h2>

          <motion.div className="carrer-advide-section" initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay:.5
            }}>
            <h4>Career advice</h4>
            <div className="grid md:grid-cols-2 gap-10">
              <div
                onClick={() => {
                  setShowModal(true);
                  setVideoLink(
                    "https://www.youtube.com/embed/cuH1EpGIkDo?si=jc1uDmoe-I4Xkesz"
                  );
                }}
              >
                <img src="/images/video-thumbnail-1.png" alt="video" />
              </div>
              <div
                onClick={() => {
                  setShowModal(true);
                  setVideoLink(
                    "https://www.youtube.com/embed/cuH1EpGIkDo?si=jc1uDmoe-I4Xkesz"
                  );
                }}
              >
                <img src="/images/video-thumbnail-2.png" alt="video" />
              </div>
            </div>
          </motion.div>

          <motion.div className="product-sessions-section" initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay:.6
            }}>
            <h4>Product Sessions</h4>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
              <a href="https://www.youtube.com/watch?v=Ljchh5jsEFc">
                <img src="/images/video-thumbnail-3.png" alt="video" />
                <h5>Gen AI & LLM’s for Product Managers</h5>
              </a>
              <a href="https://www.youtube.com/watch?v=faH9HPujo9o">
                <img src="/images/video-thumbnail-4.png" alt="video" />
                <h5>
                  System Dynamics for PM’s. How to build Large Scale Systems?
                </h5>
              </a>
              <a href="https://www.youtube.com/watch?v=gQEh_uxz4k8">
                <img src="/images/video-thumbnail-5.png" alt="video" />
                <h5>System Design for PM’s explained through Spotify.</h5>
              </a>
              <a href="https://www.youtube.com/watch?v=4sPILdZGIqs">
                <img src="/images/video-thumbnail-6.png" alt="video" />
                <h5>How to Break into Product Management?</h5>
              </a>
            </div>
          </motion.div>

          <motion.div className="product-sessions-section" 
          initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay:.7
            }}>
            <h4>Product Sessions</h4>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
              <div
                onClick={() => {
                  setShowModal(true);
                  setVideoLink("https://www.youtube.com/watch?v=Ljchh5jsEFc");
                }}
              >
                <img src="/images/video-thumbnail-7.png" alt="video" />
                <h5>
                  How Matt Built Log Rocket, A Product That Is Used By 3,500+
                  Companies?{" "}
                </h5>
              </div>
              <div
                onClick={() => {
                  setShowModal(true);
                  setVideoLink(
                    "https://www.youtube.com/embed/cuH1EpGIkDo?si=jc1uDmoe-I4Xkesz"
                  );
                }}
              >
                <img src="/images/video-thumbnail-8.png" alt="video" />
                <h5>
                  Product Cultures, Switching Jobs, Product Manager Mindset :
                  Diving Deep with Adobe's Group PM Dhilip
                </h5>
              </div>
              <div
                onClick={() => {
                  setShowModal(true);
                  setVideoLink(
                    "https://www.youtube.com/embed/cuH1EpGIkDo?si=jc1uDmoe-I4Xkesz"
                  );
                }}
              >
                <img src="/images/video-thumbnail-9.png" alt="video" />
                <h5>
                  Product Cultures, Switching Jobs, Product Manager Mindset :
                  Diving Deep with Adobe's Group PM Dhilip
                </h5>
              </div>
              <div
                onClick={() => {
                  setShowModal(true);
                  setVideoLink(
                    "https://www.youtube.com/embed/cuH1EpGIkDo?si=jc1uDmoe-I4Xkesz"
                  );
                }}
              >
                <img src="/images/video-thumbnail-10.png" alt="video" />
                <h5>
                  Become a Better Product Manager, Make wise career switch with
                  Aakash Gupta ( Product Growth Guy)
                </h5>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <YouTubeModal
        show={showModal}
        onClose={() => setShowModal(false)}
        VideoLink={VideoLink}
      />
    </>
  );
}
