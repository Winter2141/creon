import React from "react";
import Icon1 from '@/assets/images/icon1.png';
import Icon2 from '@/assets/images/icon2.png';
import Icon3 from '@/assets/images/icon3.png';
import Icon4 from '@/assets/images/icon4.png';
import AccordionBox from "@/components/basic/AccordionBox";
import CreonLogo from '@/assets/images/CREON.png';


const MissionBanner: React.FC = () => {
    const missions = [
        {
            title: 'Profitability and Growth',
            content: 'At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.',
            logoSrc: Icon1.src
        },
        {
            title: 'Transparent & Fair Decentralized Earnings',
            content: 'At Creon, we deliver a unique opportunity to benefit from a real AI-based business that generates profits. We believe that through our solutions, every investor will be able to reap the benefits of the latest achievements in the field of artificial intelligence.',
            logoSrc: Icon2.src
        },
        {
            title: 'Launching the future',
            content: 'At Creon, we deliver a unique opportunity to benefit from a real AI-based business that generates profits. We believe that through our solutions, every investor will be able to reap the benefits of the latest achievements in the field of artificial intelligence.',
            logoSrc: Icon3.src
        },
        {
            title: 'Limitless Possibilities of AI & Crypto',
            content: "The possibilities offered by the integration of AI and cryptocurrencies are limitless, and we're just beginning to explore them. As pioneers, our journey into uncharted territory is fraught with challenges, but the rewards promise to be equally extraordinary. Creon isn’t just about profiting from technological innovation; it's about being part of the process that brings these innovations to life.",
            logoSrc: Icon4.src
        }
    ]
  return (
    <div className="bg-black tablet:px-20 px-4 min-h-screen flex items-center justify-start py-4">
        <div className="max-w-[1440px] flex items-start tablet:flex-row flex-col">
            <div className="tablet:w-1/2">
                <h5 className="uppercase">Our vision is to support the innovation of AI blockchain projects <span className="text-gradient">while prioritizing communities and democratizing profits</span></h5>

                <img src={CreonLogo.src} className="tablet:ml-48 mt-12"/>
            </div>
            <div className="tablet:w-1/2 tablet:pl-40">
                {
                    missions.map((mission, index) => (
                        <AccordionBox key={index} title={mission.title} content={mission.content} logoSrc={mission.logoSrc} isOpenInitially={index === 0}/>
                    ))
                }
            </div>
        </div>
    </div>
  );
}

export default MissionBanner;