'use client';
import VideoThumbnail from './VideoThumbnail';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const Tabs2 = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl text-white font-bold">Live with Shravan</h3>

                <ul className="space-y-4">
                    <BulletPoint text="Live online class covering core frameworks of Product Management and First Principles Thinking" />
                    <BulletPoint text="Every Saturday (12:00PM IST - 4PM IST)" />
                    <BulletPoint text="Doubt clearance at the end of the end of each sessions" />
                </ul>

                <button className='primary-btn'>
                    Download the program brochure <img src="/images/arrow.png" alt="arrow" />
                </button>
            </div>

            <div className='bg-white rounded-lg p-2 pt-10 relative'>
                <div className="absolute top-3 left-3 flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <VideoThumbnail />
            </div>
        </div>
    );
};

const BulletPoint = ({ text }) => {
    return (
        <li className="flex items-start gap-2">
            <img src="/images/right-click.png" alt="icon" className='mt-1' />
            <span className="text-gray-200">{text}</span>
        </li>
    );
};

export default LiveWithShravan;