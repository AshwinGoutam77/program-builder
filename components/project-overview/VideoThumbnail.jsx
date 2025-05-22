'use client';

import { PlayIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const VideoThumbnail = () => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div
            className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden cursor-pointer"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {/* Video Thumbnail */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
                style={{
                    backgroundImage: "url('https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg')",
                    transform: isHovering ? 'scale(1.05)' : 'scale(1)'
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div
                    className={`flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 
            ${isHovering ? 'scale-110 bg-white/30' : 'scale-100'}`}
                >
                    <PlayIcon
                        className={`transition-transform duration-300 stroke-white ${isHovering ? 'translate-x-0.5' : ''}`}
                    />
                </div>
            </div>
        </div>
    );
};

export default VideoThumbnail;