import { Banner, BannerContent, BannerImage } from "./Banner";
import Button from "./Button";
import CardDetailedList, { detailedListType } from "./CardDetailedList";
import CardImageWithText from "./CardImageWithText";

export type assessmentType = {
  image: string;
  subtitle: string;
  info: string;
  imageDescription: string;
  steps: stepType[];
  buttonText: string;
  footer: string;
};

export type stepType = {
  number?: string;
  heading: string;
  content: string;
};

const goBeyondData: detailedListType[] = [
  {
    heading: "Identity verification",
    description:
      "Checks that the person on the call is the person who took the campaign assessment.",
  },
  {
    heading: "Deepfake detection",
    description:
      "Looks for a synthetic or altered feed, off-screen reading, and speech that doesn't match lip movement.",
  },
  {
    heading: "Campaign assessment",
    description:
      "Compares the interview with the candidate's recorded assessment session.",
  },
];

export default function BannerGoBeyond() {
  return (
    <div>
      <div className="bg-primary-600 px-4 lg:px-14 py-10 lg:py-25 border-border border-t">
        <h4 className="text-primary-200 text-[28px] lg:text-[46px] font-semibold leading-tight">
          Go beyond what candidates say.
        </h4>

        <p className="pt-5 max-w-150">
          Interview inside Readie. The candidate sees an ordinary video call.
          You see integrity checks on clips sampled through the call, and a full
          report when it ends.
        </p>
      </div>

      <div>
        <Banner imageWidth="lg:w-8/12" contentWidth="lg:w-4/12">
          <BannerImage>
            <CardImageWithText
              cardImage="/images/candidates-analysis.svg"
              alt="Go beyond what candidates say."
              description="The recording runs from reel to reel. At set intervals one frame is sampled; at the head it is checked, and the monitor shows the result."
              textLeft="Arrows step through clips"
              textRight="Clip 01 · 00:00:00 · pass"
            />
          </BannerImage>

          <BannerContent>
            <div className="flex flex-col gap-10 justify-between">
              <div>
                {goBeyondData.map((list: detailedListType, index) => (
                  <div key={index}>
                    <CardDetailedList
                      heading={list.heading}
                      description={list.description}
                    />
                  </div>
                ))}

                <div className="mt-5">
                  <Button color="text-primary-200">Request early access</Button>
                </div>
              </div>
              <div>
                <div className="w-14 border-border border-b"></div>
                <p className="text-sm py-5 border-border border-b">
                  Flags come to you with the clip that raised them, for you to
                  judge. Nothing is rejected automatically.
                </p>
              </div>
            </div>
          </BannerContent>
        </Banner>
      </div>
    </div>
  );
}
