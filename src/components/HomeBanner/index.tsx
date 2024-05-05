import Home from "../../app/page";
import VideoBanner from "@/components/basic/VideoBanner";

const HomeBanner = () => {
    return (
        <div className="w-full relative">
            <div className="bg-gradient-to-t from-black via-[#3D8BFF] to-[#AB23FF] absolute top-0 left-0 w-full h-full opacity-40 z-10"></div>
            <VideoBanner videoSrc={'/videos/main-background-video.mp4'} className="absolute top-0 z-0 h-screen"/>

            <div className="tablet:px-20 px-4">
                <div className="pb-[100px] max-w-[1440px] mx-auto min-h-screen items-start flex flex-col justify-end z-20 relative">
                    <h1 className="max-w-[1320px] title text-white uppercase">The world's first platform for Tokenizing AI blockchain projects</h1>
                    <p className="mt-8 text-[22px] gradient-border text-gradient text-left">Hold the Creon Pass NFT and earn passive income from AI Tools</p>
                </div>
            </div>
        </div>
    )
};

export default HomeBanner;