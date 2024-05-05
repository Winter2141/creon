import GradientButton from "@/components/basic/GradientButton";
import VideoBanner from "@/components/basic/VideoBanner";

const NFTBanner  = () => {
    const options = [
        "Pre-launch investment opportunities for upcoming AI projects",
        "Free and early access to Creon built AI projects",
        "Higher allocation limits on the Creon AI Launchpad",
        "Revenue share distribution from Creon built AI projects"
    ]
    return (
        <div className="min-h-screen bg-black flex items-center tablet:px-20 px-4 py-4">
            <div className="max-w-[1440px] mx-auto tablet:flex block gap-12 items-center">
                <div className="text-left">
                    <h2 className="title uppercase">Creon Pass Nft</h2>
                    <div className="h-1 border-t border-gray-900 w-full my-8"></div>
                    <p className="text-[22px] max-w-[700px] text-gradient">The Creon NFT pass unlocks access to AI projects, the Creon launchpad, and a ticket to generate passive income through AI-driven tools</p>
                    <div className="mt-8 text-[18px] text-white flex flex-col">
                        {options.map((option, index) => (
                            <div key={index} className="mb-2 border w-fit border-gray-900 rounded-[6px] py-3 px-[18px]">{option}</div>
                        ))}
                    </div>

                    <GradientButton onClick={() => console.log('clicked')} label="Buy Creon Pass" className="mt-12 w-full tablet:w-[450px] py-4"/>
                </div>

                <div>
                    <VideoBanner videoSrc={'/videos/nft-video.mp4'}  className="max-w-[800px]"/>
                </div>
            </div>
        </div>
    )
}

export default NFTBanner;