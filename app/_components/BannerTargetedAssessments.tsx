import { Banner, BannerContent, BannerImage } from "./Banner";
import CardDetailedList, { detailedListType } from "./CardDetailedList";
import CardDetailedListHeader from "./CardDetailedListHeader";
import CardImageWithText from "./CardImageWithText";

const targetedAssessmentsList: detailedListType[] = [
  {
    step: "01",
    heading: "Create a campaign",
    description:
      "Set the role, the key skills and the maturity level you need.",
  },
  {
    step: "02",
    heading: "Invite candidates",
    description:
      "Send invites from your shortlists, or share one Campaign link. Candidates don't need an account.",
  },
  {
    step: "03",
    heading: "Review results",
    description:
      "Proficiency for each skill against your level, the session recording and suggested focus areas for interview.",
  },
];

export default function BannerTargetedAssessments() {
  return (
    <div>
      <Banner imageWidth="lg:w-5/9" contentWidth="lg:w-4/9">
        <BannerContent>
          <CardDetailedListHeader
            heading="Run targeted assessments."
            description="Test the skills of any candidate, from Recruiter Hub, Talent Discovery or your own pipeline, with an assessment built from your job description."
          />
          {targetedAssessmentsList.map((list: detailedListType, index) => (
            <div key={index}>
              <CardDetailedList
                step={list.step}
                heading={list.heading}
                description={list.description}
              />
            </div>
          ))}
        </BannerContent>

        <BannerImage>
          <CardImageWithText
            cardImage="/images/campaign-assessment.svg"
            alt="Targeted assessment"
            description="One gauge per skill. The fixed stop is the level the role needs; the slider rises to what the candidate scored."
            textLeft="Hover a column · arrows switch"
            textRight="Candidate A · Product strategy 82 / 70 · meets level"
          />
        </BannerImage>
      </Banner>
    </div>
  );
}
