'use client'
import React, { useState } from 'react';
import './page.css'
import YouTubeModal from '../about-us/youtubeModal';

export default function Teaching() {
    const [showModal, setShowModal] = useState(false)
    const [VideoLink, setVideoLink] = useState("")
    return (
        <>
            <section className='teaching-section '>
                <div className="container mx-auto text-center">
                    <h2>See How Shravan Teaches</h2>

                    <div className="carrer-advide-section">
                        <h4>Career  advice</h4>
                        <div className="grid grid-cols-2 gap-10">
                            <div onClick={() => {
                                setShowModal(true);
                                setVideoLink('https://www.youtube.com/embed/cuH1EpGIkDo?si=jc1uDmoe-I4Xkesz');
                            }}>
                                <img src="/images/video-thumbnail-1.png" alt="video" />
                            </div>
                            <div onClick={() => {
                                setShowModal(true);
                                setVideoLink('https://www.youtube.com/embed/cuH1EpGIkDo?si=jc1uDmoe-I4Xkesz');
                            }}>
                                <img src="/images/video-thumbnail-2.png" alt="video" />
                            </div>
                        </div>
                    </div>

                    <div className="product-sessions-section">
                        <h4>Product Sessions</h4>

                        <div className="grid grid-cols-4 gap-10">
                            <a href="https://www.youtube.com/watch?v=Ljchh5jsEFc">
                                <img src="/images/video-thumbnail-3.png" alt="video" />
                                <h5>Gen AI & LLM’s for Product Managers</h5>
                            </a>
                            <a href="https://www.youtube.com/watch?v=faH9HPujo9o">
                                <img src="/images/video-thumbnail-4.png" alt="video" />
                                <h5>System Dynamics for PM’s. How to build Large Scale Systems?
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
                    </div>

                    <div className="product-sessions-section">
                        <h4>Product Sessions</h4>

                        <div className="grid grid-cols-4 gap-10">
                            <div onClick={() => {
                                setShowModal(true);
                                setVideoLink('https://www.youtube.com/watch?v=Ljchh5jsEFc');
                            }}>
                                <img src="/images/video-thumbnail-7.png" alt="video" />
                                <h5>How Matt Built Log Rocket, A Product That Is Used By 3,500+ Companies? </h5>
                            </div>
                            <div onClick={() => {
                                setShowModal(true);
                                setVideoLink('https://www.youtube.com/embed/cuH1EpGIkDo?si=jc1uDmoe-I4Xkesz');
                            }}>
                                <img src="/images/video-thumbnail-8.png" alt="video" />
                                <h5>Product Cultures, Switching Jobs, Product Manager Mindset : Diving Deep with Adobe's Group PM Dhilip
                                </h5>
                            </div>
                            <div onClick={() => {
                                setShowModal(true);
                                setVideoLink('https://www.youtube.com/embed/cuH1EpGIkDo?si=jc1uDmoe-I4Xkesz');
                            }}>
                                <img src="/images/video-thumbnail-9.png" alt="video" />
                                <h5>Product Cultures, Switching Jobs, Product Manager Mindset : Diving Deep with Adobe's Group PM Dhilip
                                </h5>
                            </div>
                            <div onClick={() => {
                                setShowModal(true);
                                setVideoLink('https://www.youtube.com/embed/cuH1EpGIkDo?si=jc1uDmoe-I4Xkesz');
                            }}>
                                <img src="/images/video-thumbnail-10.png" alt="video" />
                                <h5>Become a Better Product Manager, Make wise career switch with Aakash Gupta ( Product Growth Guy)
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <YouTubeModal show={showModal} onClose={() => setShowModal(false)} VideoLink={VideoLink} />
        </>
    )
}
