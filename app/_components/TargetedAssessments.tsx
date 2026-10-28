import FindTalentCardTwo from "./FindTalentCardTwo";

export type assessmentType = {
  heading?: string;
  description?: string;
  image: string;
  subtitle?: string;
  info?: string;
  imageDescription?: string;
  steps: stepType[];
  buttonText?: string;
  footer?: string;
};

export type stepType = {
  number?: string;
  heading: string;
  content: string;
};

const targetedAssessmentsData: assessmentType = {
  heading: "Run targeted assessments.",
  description:
    "Test the skills of any candidate, from Recruiter Hub, Talent Discovery or your own pipeline, with an assessment built from your job description.",
  image: "/images/campaign-assessment.svg",
  subtitle: "Hover a column · arrows switch",
  info: "Candidate A · Product strategy 82 / 70 · meets level",
  imageDescription:
    "One gauge per skill. The fixed stop is the level the role needs; the slider rises to what the candidate scored.",
  steps: [
    {
      number: "01",
      heading: "Create a campaign",
      content: "Set the role, the key skills and the maturity level you need.",
    },
    {
      number: "02",
      heading: "Invite candidates",
      content:
        "Send invites from your shortlists, or share one Campaign link. Candidates don't need an account.",
    },
    {
      number: "03",
      heading: "Review results",
      content:
        "Proficiency for each skill against your level, the session recording and suggested focus areas for interview.",
    },
  ],
};

const evidenceNotAssertionData: assessmentType = {
  heading: "Evidence, not assertion.",
  description:
    "Skills can be claimed. On Readie they are proven, and you can check the proof yourself.",
  image: "/images/evidence.png",
  steps: [
    {
      number: "Layer 01",
      heading: "Work evidence",
      content:
        "Real artefacts (PRDs, pull requests, design files, reports) tied to specific skills, plus peer-validated work history. No self-assessment.",
    },
    {
      number: "Layer 02",
      heading: "Skill assessment",
      content:
        "Generated from the skills the candidate claims or the job needs, not a generic test bank, and taken under the same integrity controls as a Campaign.",
    },
    {
      number: "Layer 03",
      heading: "Mastery report",
      content:
        "A record of the evidence, not a pass or fail. It carries a tamper-evident hash and is shared only after the candidate approves access.",
    },
  ],
};

const interviewVerificationData: assessmentType = {
  image: "/images/candidates-analysis.svg",
  subtitle: "Arrows step through clips",
  info: "Clip 01 · 00:00:00 · pass",
  imageDescription:
    "The recording runs from reel to reel. At set intervals one frame is sampled; at the head it is checked, and the monitor shows the result.",
  steps: [
    {
      heading: "Identity verification",
      content:
        "Checks that the person on the call is the person who took the campaign assessment.",
    },
    {
      heading: "Deepfake detection",
      content:
        "Looks for a synthetic or altered feed, off-screen reading, and speech that doesn't match lip movement.",
    },
    {
      heading: "Campaign assessment",
      content:
        "Compares the interview with the candidate's recorded assessment session.",
    },
  ],
  buttonText: "Request early access",
  footer:
    "Flags come to you with the clip that raised them, for you to judge. Nothing is rejected automatically.",
};

export default function TargetedAssessments() {
  return (
    <div>
      <FindTalentCardTwo
        data={targetedAssessmentsData}
        order="image-last"
        imageWidth="lg:w-5/9"
        detailsWidth="lg:w-4/9"
      />
      <FindTalentCardTwo
        data={evidenceNotAssertionData}
        order="image-first"
        imageWidth="lg:w-5/9"
        detailsWidth="lg:w-4/9"
      />

      <div>
        <div className="bg-primary-600 px-4 lg:px-14 py-10 lg:py-25">
          <h4 className="text-primary-200 text-[28px] lg:text-[46px] font-semibold">
            Go beyond what candidates say.
          </h4>

          <p className="pt-5">
            Interview inside Readie. The candidate sees an ordinary video call.
            You see integrity checks on clips sampled through the call, and a
            full report when it ends.
          </p>
        </div>
        <FindTalentCardTwo
          data={interviewVerificationData}
          order="image-first"
          imageWidth="lg:w-8/12"
          detailsWidth="lg:w-4/12"
        />
      </div>
    </div>
  );
}
