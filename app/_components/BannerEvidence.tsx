import Image from "next/image";
import { Banner, BannerContent, BannerImage } from "./Banner";
import CardDetailedList, { detailedListType } from "./CardDetailedList";
import CardDetailedListHeader from "./CardDetailedListHeader";
import { evidenceData } from "../_data/targetedAssessments";

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
