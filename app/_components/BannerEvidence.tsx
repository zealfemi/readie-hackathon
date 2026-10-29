import Image from "next/image";
import { Banner, BannerContent, BannerImage } from "./Banner";
import CardDetailedList, { detailedListType } from "./CardDetailedList";
import CardDetailedListHeader from "./CardDetailedListHeader";
import CardImageWithText from "./CardImageWithText";

const evidenceData: detailedListType[] = [
  {
    step: "Layer 01",
    heading: "Work evidence",
    description:
      "Real artefacts (PRDs, pull requests, design files, reports) tied to specific skills, plus peer-validated work history. No self-assessment.",
  },
  {
    step: "Layer 02",
    heading: "Skill assessment",
    description:
      "Generated from the skills the candidate claims or the job needs, not a generic test bank, and taken under the same integrity controls as a Campaign.",
  },
  {
    step: "Layer 03",
    heading: "Mastery report",
    description:
      "A record of the evidence, not a pass or fail. It carries a tamper-evident hash and is shared only after the candidate approves access.",
  },
];

export default function BannerEvidence() {
  return (
    <div className="border-border border-t">
      <Banner imageWidth="lg:w-5/9" contentWidth="lg:w-4/9">
        <BannerImage>
          <div className="flex items-center justify-center h-full w-full relative min-h-70 md:h-120 lg:h-90">
            <Image
              src="/images/evidence.png"
              alt="Evidence, not assertion."
              fill
              className="object-contain"
            />
          </div>
        </BannerImage>

        <BannerContent>
          <CardDetailedListHeader
            heading="Evidence, not assertion."
            description="Skills can be claimed. On Readie they are proven, and you can check the proof yourself."
          />
          {evidenceData.map((list: detailedListType, index) => (
            <div key={index}>
              <CardDetailedList
                step={list.step}
                heading={list.heading}
                description={list.description}
              />
            </div>
          ))}
        </BannerContent>
      </Banner>
    </div>
  );
}
