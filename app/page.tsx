import BannerNextHire from "./_components/BannerNextHire";
import CVLieBanner from "./_components/CVLieBanner";
import Hero from "./_components/Hero";
import TalentPool from "./_components/TalentPool";

export default function Home() {
  return (
    <>
      <Hero />
      <CVLieBanner />
      <TalentPool />
      <BannerNextHire />
    </>
  );
}
