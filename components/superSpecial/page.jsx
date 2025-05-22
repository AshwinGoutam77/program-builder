import React from 'react';
import './page.css'

export default function SuperSpecial() {
    return (
        <section className='super-special-section'>
            <div className="container mx-auto text-center text-white">
                <h2>Super Special -<span className='gradient'> Week 9</span></h2>
                <p className='mt-4'>Ideate, Build & Launch a LIVE PRODUCT in 10 Days, Get a chance to Funded</p>

                <div className="orbit-flip-container">
                    <div className="orbit-flip-inner">
                        {/* Front Side */}
                        <div className="orbit-front">
                            <h3>
                                <span className="font-bold">Productathon</span> is
                                <span className="block">
                                    <span className="core">core</span> of our community
                                </span>
                            </h3>
                        </div>

                        {/* Back Side */}
                        <div className="orbit-back">
                            <p className="text-center px-4">Join hands with product leaders, participate in real-world challenges, and learn by doing!</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
