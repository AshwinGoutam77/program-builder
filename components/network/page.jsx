import React from 'react';
import './page.css'

export default function Network() {
    return (
        <section className='network-section'>
            <div className="container m-auto text-center">
                <h2 className='mb-4'>The Retreat: Where Stories, <span className="block">Friendships and Good Vibes Flow.</span></h2>
                <p>After 9 intense weeks of building, we head offline — for a weekend of rest, deep conversations, and <span className="block">the kind of networking that propels your journey forward.</span></p>
            </div>

            <div className='network-banner'>
                <div className="container m-auto text-center">
                    <h2>Join a Network That <span className="block">Elevates You ❤️</span></h2>
                    <a href='#' className='flex items-center justify-center gap-2'>Curated Community experience <img src="/images/light-arrow.png" alt="arrow" /></a>
                    <p>Program 5- Retreat (Chikmagalur)</p>
                </div>
            </div>
        </section>
    )
}
