import React from "react";
import TwitterIcon from "@/assets/images/twitter.png";
import Telegram from "@/assets/images/telegram.png";
import Discord from "@/assets/images/discord.png";

const FooterSection = () => {
  return (
    <footer className="absolute bottom-0 left-0 bg-transparent z-50 w-full tablet:px-20 px-4">
      <div className="max-w-[1440px] gap-2 mx-auto pb-8 flex tablet:flex-row flex-col justify-between items-center">
        <div className="flex  tablet:gap-16 gap-2 items-center tablet:flex-row flex-col">
          <p>© Creon 2023. All rights reserved.</p>

          <div className="flex gap-4 items-center">
            <div className="border-2 border-white rounded-full p-1.5">
              <img src={Telegram.src} alt="telegram" className="w-4 h-4"/>
            </div>
            <div className="border-2 border-white rounded-full p-1.5">
              <img src={Discord.src} alt="discord" className="w-4 h-4" />
            </div>
            <div className="border-2 border-white rounded-full p-1.5">
              <img src={TwitterIcon.src} alt="Twitter" className="w-4 h-4" />
            </div>
          </div>
        </div>

        <p className="text-[16px]">Powered by <span className="font-bold">NIFTABLES</span></p>
      </div>
    </footer>
  );
};

export default FooterSection;