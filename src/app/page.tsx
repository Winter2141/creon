import Image from "next/image";
import AppLayout from "@/layouts/AppLayout";
import HomeBanner from "@/components/HomeBanner";
import NFTBanner from '@/components/NFTBanner';
import ProfitBanner from '@/components/ProfitBanner';
import MissionBanner from '@/components/MissionBanner';
import ComingSoon from "@/components/ComingSoon";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <AppLayout>
      <HomeBanner />
      <NFTBanner />
      <ProfitBanner/>
      <MissionBanner/>
      <ComingSoon/>
      <VideoSection/>
    </AppLayout>
  );
}
