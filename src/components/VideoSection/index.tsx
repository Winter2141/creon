import React from "react";
import VideoBanner from "../basic/VideoBanner";
import Image1 from "@/assets/images/ai_image1.png";
import Image2 from "@/assets/images/ai_image2.png";
import Image3 from "@/assets/images/ai_image3.png";
import VideoSectionCard from "@/components/VideoSection/Card";

const VideoSection: React.FC = () => {
    const items = [
        {
            title: "AI Prospects, Market Size, and Development Pace",
            description: "The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.",
            imgSrc: Image1.src
        },
        {
            title: "AI Tools and Market",
            description: "AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others.",
            imgSrc: Image2.src
        },
        {
            title: "AI, Crypto, and NFT Market",
            description: "Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities.",
            imgSrc: Image3.src
        }
    ]
    return (
        <div className="relative tablet:px-20 px-4 pt-20 pb-40">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black to-black-0 z-10"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-black-0 z-10"></div>
            <VideoBanner videoSrc={'/videos/roadmap-video.mp4'} className="absolute w-full h-full top-0 left-0"/>
            <div className="relative max-w-[1440px] mx-auto flex flex-col gap-10 z-20">
                {
                    items.map((item, index) => {
                        return (
                            <VideoSectionCard key={index} {...item} />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default VideoSection;