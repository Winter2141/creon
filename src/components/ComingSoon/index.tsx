import React from "react";
import Image1 from "@/assets/images/coming_img1.png";
import Image2 from "@/assets/images/coming_img2.png";
import Image3 from "@/assets/images/coming_img3.png";
import ComingSoonCard from "./Card";

const ComingSoon: React.FC = () => {
    const items = [
        {
            title: 'Token',
            subTitle: 'The Gateway token to the world of AI',
            description: 'Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.',
            imgSrc: Image1.src
        },
        {
            title: 'Revenue',
            subTitle: 'Driving income and growth through decentralization',
            description: 'CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.',
            imgSrc: Image2.src
        },
        {
            title: 'Launchpad',
            subTitle: 'Driving the future of AI Innovation',
            description: 'The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.',
            imgSrc: Image3.src
        }
    ]
  return (
    <div className="flex items-center justify-center min-h-screen tablet:px-20 px-4">
        <div className="max-w-[1440px] mx-auto">
            <div className={`grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-10`}>
            {
                items.map((item, index) => (
                    <ComingSoonCard key={index} {...item} />
                ))
            }
            </div>
        </div>
    </div>
  );
};

export default ComingSoon;