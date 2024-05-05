import VideoBanner from "../basic/VideoBanner";

const ProfitBanner = () => {
    return (
        <div className="bg-black tablet:px-20 px-4 min-h-screen flex items-center justify-start py-4">
            <div className="max-w-[1440px] mx-auto w-full">
                <h2 className="title uppercase text-left">Profiting Through</h2>
                <h5 className="w-full text-right text-gradient uppercase">AI Innovation & Decentralization</h5>

                <div className="block tablet:grid grid-cols-3 gap-10 items-center mt-20">
                    <div className="relative col-span-2">
                        <div className="absolute w-full h-full left-0 top-0 opacity-50 bg-gradient-to-t from-[#3D8BFF] to-[#AB23FF]"></div>
                        <VideoBanner videoSrc={'/videos/creon-logo.mp4'} className="w-[950px]"/>
                    </div>
                    <div className="tablet:px-10 px-4 flex tablet:mt-0 mt-4 flex-col justify-center border-x w-full h-full border-gray-900">
                        <p className="font-bold text-[22px]">The dynamic community driven business model of the future.</p>
                        <p className="mt-10">At Creon, we blend the power of AI tools with the dynamic crypto and NFT markets, utilizing an innovative business model to drive profitability. This approach empowers our community, as our NFT and token holders directly benefit from the growth and prosperity of the Creon network, creating a win-win scenario for both our community and for the projects we launch.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfitBanner;