import React from 'react';
import { VideoBannerProps } from "@/types/componentTypes";

const VideoBanner: React.FC<VideoBannerProps> = ({ videoSrc, className }) => {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        src={videoSrc}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBanner;
