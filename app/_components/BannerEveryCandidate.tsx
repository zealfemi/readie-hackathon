import Image from "next/image";
import { Banner, BannerContent, BannerImage } from "./Banner";
import CardSimpleList from "./CardSimpleList";

const everyCandidateList: string[] = [
  "Track candidates from every source",
  "Campaign results and interview reports side by side",
  "Every action consent-logged and audit-ready",
];

export default function BannerEveryCandidate() {
  return (
    <div>
      <Banner imageWidth="lg:w-5/9" contentWidth="lg:w-4/9">
        <BannerContent>
          <div className="flex flex-col gap-5">
            <h3 className="text-[28px] lg:text-[46px] font-semibold">
              <span className="text-primary-200">Every candidate.</span> In one
              place.
            </h3>
            <p>
              Sourcing, Campaigns, interviews and reports live together, so you
              can see where every candidate stands.
            </p>

            <CardSimpleList list={everyCandidateList} />
          </div>
        </BannerContent>
        <BannerImage>
          <div className="flex items-center justify-center h-full w-full relative min-h-70 md:h-120 lg:h-90">
            <Image
              src="/images/every-candidate.png"
              alt="Every candidate. In one place."
              fill
              className="object-contain"
            />
          </div>
        </BannerImage>
      </Banner>
    </div>
  );
}
