import BannerNextHire from "./_components/BannerNextHire";
import CVLieBanner from "./_components/CVLieBanner";
import FAQs from "./_components/FAQs";
import Hero from "./_components/Hero";
import OurPlans from "./_components/OurPlans";
import TalentPool from "./_components/TalentPool";

export default function Home() {
  return (
    <>
      <Hero />
      <CVLieBanner />
      <TalentPool />
      <OurPlans />
      <FAQs />
      <BannerNextHire />
    </>
  );
}
