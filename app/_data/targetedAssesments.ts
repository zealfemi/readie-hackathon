import { detailedListType } from "../_components/CardDetailedList";

export const targetedAssessmentsList: detailedListType[] = [
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

export const evidenceData: detailedListType[] = [
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
