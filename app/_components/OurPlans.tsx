import { FaCircle } from "react-icons/fa6";
import PlanCard from "./PlanCard";

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

const ourPlans: planType[] = [
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

export default function OurPlans() {
  return (
    <div className="bg-primary-600 border-border border-t">
      <div className="px-4 md:px-7 lg:px-14 pt-15 pb-12 lg:pt-25 lg:pb-16 flex flex-col gap-5 text-center justify-center items-center">
        <p className="text-primary-300 text-sm flex items-center justify-center gap-1.5">
          <FaCircle size={6} /> Pricing
        </p>
        <h3 className="text-primary-200 text-[28px] lg:text-[46px] font-semibold leading-tight">
          Choose your plan.
        </h3>
        <p className="max-w-160">
          AI can write a flawless CV in seconds, and the same tools can put a
          different face on a video call. Interviews test presentation,
          references are biased, and none of it shows what a candidate can
          actually do.
        </p>

        <div className="border-border border rounded-[10px] p-1 transition-all duration-300 ease-in-out">
          <button
            className={`cursor-pointer rounded-[7px] py-1.25 px-3.5 text-xs md:text-sm bg-primary-200 text-primary-800`}>
            Monthly
          </button>
          <button
            className={`cursor-pointer rounded-[7px] py-1.25 px-3.5 text-xs md:text-sm`}>
            Annual · 20% off
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-3 px-4 lg:px-1">
        {ourPlans.map((plan: planType, index) => (
          <div key={index}>
            <PlanCard plan={plan} planIndex={index} />
          </div>
        ))}
      </div>
    </div>
  );
}
