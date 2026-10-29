export type planType = {
  name: string;
  subtitle: string;
  price: string;
  annualPrice: string;
  billing: string;
  annualBilling: string;
  recommended: boolean;
  buttonText: string;
  features: string[];
  disabledFeatures: string[];
};

export const ourPlans: planType[] = [
  {
    name: "Scout",
    subtitle: "Verification-as-a-Service",
    price: "Free",
    annualPrice: "Free",
    billing: "",
    annualBilling: "",
    recommended: false,
    buttonText: "Start Scouting",
    features: [
      "Assessments per JD",
      "Detailed campaign reports with evidence dossiers",
      "Basic candidate search",
      "Unlimited campaigns — each lasts 24 hours",
      "AI Readiness Score visible on all candidates",
      "$99 overage rate per campaign duration extension",
    ],
    disabledFeatures: ["Candidate profile reveal"],
  },
  {
    name: "Hunter Starter",
    subtitle: "Testing the waters",
    price: "$29",
    annualPrice: "$278.40",
    billing: "/per Month",
    annualBilling: "$278.40/year ($23.20/month) billed annually (20% off)",
    recommended: false,
    buttonText: "Start Hunting",
    features: [
      "Everything in scout",
      "5 passport reveals",
      "5 Mastery Report requests",
      "5 Campaign Insight Report downloads",
      "$99 overage rate per campaign duration extension",
    ],
    disabledFeatures: [],
  },
  {
    name: "Hunter",
    subtitle: "Unlimited Global Sourcing",
    price: "$299",
    annualPrice: "$2,870.40",
    billing: "/per Month",
    annualBilling: "$2,870.40/year ($239.20/month) billed annually (20% off)",
    recommended: true,
    buttonText: "Start Hunting",
    features: [
      "Everything in Scout",
      "Unlimited campaigns",
      "Full candidate profiles reveal",
      "filter global talent by verified score",
      "Direct contact — open-mode candidates",
      "Full campaign report download",
      "Unlimited Mastery Report downloads",
    ],
    disabledFeatures: [],
  },
  {
    name: "Team Hunter",
    subtitle: "Running a team or agency?",
    price: "",
    annualPrice: "",
    billing: "",
    annualBilling: "",
    recommended: false,
    buttonText: "Book a call",
    features: [
      "Everything in Hunter",
      "Starting from 3 members",
      "Shared reveal credits",
    ],
    disabledFeatures: [],
  },
];
