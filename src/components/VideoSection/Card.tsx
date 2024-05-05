import React from "react";
import { CardProps } from "@/types/componentTypes";

const VideoSectionCard: React.FC<CardProps> = ({ title, description, imgSrc }) => {
    return (
        <div className="rounded bg-gray-900 md:grid md:grid-cols-3 items-center opacity-60">
            <div className="col-span-2 w-full tablet:p-10 p-4">
                <h5 className="text-white uppercase">{title}</h5>
                <p className="text-white mt-5">{description}</p>
            </div>
            <div className="w-full h-full relative" style={{ backgroundImage: `url(${imgSrc})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                <div className="z-10 rounded-r-md absolute left-0 top-0 w-full h-full opacity-60 bg-gradient-to-t from-[#3D8BFF] via-[#3D8BFF] to-[#AB23FF]"></div>
                <img src={imgSrc} alt={title} className="w-auto h-full object-cover" />
            </div>
        </div>
    );
}

export default VideoSectionCard;