'use client'
import React, { useState } from 'react';
import './page.css'
import YouTubeModal from '../about-us/youtubeModal';

export default function Teaching() {
    const [showModal, setShowModal] = useState(false)
    const [VideoLink, setVideoLink] = useState("")
    return (
        <>
            <section className='teaching-section ' id='sarvan-teaching'>
                <div className="container mx-auto text-center">
                    <h2>See How Shravan Teaches</h2>

                    <div className="carrer-advide-section">
                        <h4>Career  advice</h4>
                        <div className="grid md:grid-cols-2 gap-10">
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
                            <div onClick={() => {
                                setShowModal(true);
                                setVideoLink('https://www.youtube.com/embed/Ljchh5jsEFc?si=tg6JVuR7o6Q7ygHf');
                            }}>
                                <img src="/images/video-thumbnail-3.png" alt="video" />
                                <h5>Gen AI & LLM’s for Product Managers</h5>
                            </div>
                            <div onClick={() => {
                                setShowModal(true);
                                setVideoLink('https://www.youtube.com/embed/faH9HPujo9o?si=OE8s9cK7akfcjaC9');
                            }}>
                                <img src="/images/video-thumbnail-4.png" alt="video" />
                                <h5>System Dynamics for PM’s. How to build Large Scale Systems?
                                </h5>
                            </div>
                            <div onClick={() => {
                                setShowModal(true);
                                setVideoLink('https://www.youtube.com/embed/gQEh_uxz4k8?si=A2yb8wjp-wDBE8PN');
                            }}>
                                <img src="/images/video-thumbnail-5.png" alt="video" />
                                <h5>System Design for PM’s explained through Spotify.</h5>
                            </div>
                            <div onClick={() => {
                                setShowModal(true);
                                setVideoLink('https://www.youtube.com/embed/gQEh_uxz4k8?si=UiRFpBPRypQEI26Z');
                            }}>
                                <img src="/images/video-thumbnail-6.png" alt="video" />
                                <h5>How to Break into Product Management?</h5>
                            </div>
                        </div>
                    </div>

                    <div className="product-sessions-section">
                        <h4>Product Sessions</h4>

                        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
                            <div onClick={() => {
                                setShowModal(true);
                                setVideoLink('https://www.youtube.com/embed/W6VFfxEDQzs?si=74H1YxL2pDBK2-tn');
                            }}>
                                <img src="/images/video-thumbnail-7.png" alt="video" />
                                <h5>How Matt Built Log Rocket, A Product That Is Used By 3,500+ Companies? </h5>
                            </div>
                            <div onClick={() => {
                                setShowModal(true);
                                setVideoLink('https://www.youtube.com/embed/dA7tKnur5IM?si=9W0Wjy2S5prPtwNo');
                            }}>
                                <img src="/images/video-thumbnail-8.png" alt="video" />
                                <h5>Product Cultures, Switching Jobs, Product Manager Mindset : Diving Deep with Adobe's Group PM Dhilip
                                </h5>
                            </div>
                            <div onClick={() => {
                                setShowModal(true);
                                setVideoLink('https://www.youtube.com/embed/aQgAFwlNb-c?si=-42V548hzuhRjHH3');
                            }}>
                                <img src="/images/video-thumbnail-9.png" alt="video" />
                                <h5>Product Cultures, Switching Jobs, Product Manager Mindset : Diving Deep with Adobe's Group PM Dhilip
                                </h5>
                            </div>
                            <div onClick={() => {
                                setShowModal(true);
                                setVideoLink('https://www.youtube.com/embed/3Ntq-LyiRIA?si=qOndghBw8LkGEnNK');
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
