"use client";
import VideoThumbnail from "./VideoThumbnail";
import { motion } from "framer-motion";
const LiveWithShravan = ({ data }) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
    >
      <div className="space-y-6">
        <h3 className="text-2xl md:text-3xl text-white font-bold">
          Live with Shravan
        </h3>

        <ul className="space-y-4">
          {data?.map((point, i) => (
            <BulletPoint key={i} text={point} />
          ))}
        </ul>

                <a href='#' className='text-white flex items-center gap-2'>
                    Download the program brochure <img src="/images/light-arrow.png" alt="arrow" />
                </a>
            </div>

      <div className="bg-white rounded-lg p-2 pt-10 relative">
        <div className="absolute top-3 left-3 flex space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <VideoThumbnail />
      </div>
    </motion.div>
  );
};

const BulletPoint = ({ text }) => {
  return (
    <li className="flex items-start gap-2">
      <img src="/images/right-click.png" alt="bullet icon" className="mt-1" />
      <span className="text-gray-200">{text}</span>
    </li>
  );
};

export default LiveWithShravan;
