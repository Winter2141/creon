import { CardProps } from "@/types/componentTypes";
import React from "react";

const ComingSoonCard: React.FC<CardProps> = ({ title, subTitle, imgSrc, description }) => {
  return (
    <div className="relative bg-gray-900 rounded max-w-[450px] py-10">
        <div className="absolute -top-2 right-4 rounded-full font-bold text-[12px] px-2 bg-white text-black uppercase">coming soon</div>
        <div className="px-8 h-36">
            <h5 className="uppercase">{title}</h5>
            <p className="text-gradient font-bold text-[22px]">{subTitle}</p>
        </div>
        <div className="relative pr-[30px]">
            <div className="relative rounded-r-md">
                <img src={imgSrc} alt={title} />
                {/* <div className="rounded-r-md absolute left-0 top-0 w-full h-full opacity-60 bg-gradient-to-t from-[#3D8BFF] via-[#3D8BFF] to-[#AB23FF]"></div> */}
            </div>
        </div>
        <p className="px-8 mt-8">{description}</p>
    </div>
  );
};

export default ComingSoonCard;