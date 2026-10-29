"use client";

import { FaCircle } from "react-icons/fa6";
import PlanCard from "./PlanCard";
import { ourPlans, planType } from "../_data/ourPlans";
import { useState } from "react";

export default function OurPlans() {
  const [planBilling, setPlanBilling] = useState<"monthly" | "annually">(
    "monthly",
  );

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

        <div className="border-border border rounded-[10px] p-1">
          <button
            type="button"
            aria-label="monthly plan switch"
            aria-checked={planBilling === "monthly"}
            role="switch"
            onClick={() => setPlanBilling("monthly")}
            className={`cursor-pointer rounded-[7px] py-1.25 px-3.5 text-xs md:text-sm ${planBilling === "monthly" && "bg-primary-200 text-primary-800"} transition-all duration-350 ease-in-out`}>
            Monthly
          </button>
          <button
            type="button"
            aria-label="annual plan switch"
            aria-checked={planBilling === "annually"}
            role="switch"
            onClick={() => setPlanBilling("annually")}
            className={`cursor-pointer rounded-[7px] py-1.25 px-3.5 text-xs md:text-sm ${planBilling === "annually" && "bg-primary-200 text-primary-800"} transition-all duration-350 ease-in-out`}>
            Annual · 20% off
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-3 px-4 lg:px-1">
        {ourPlans.map((plan: planType, index) => (
          <div key={index}>
            <PlanCard plan={plan} planIndex={index} planBilling={planBilling} />
          </div>
        ))}
      </div>
    </div>
  );
}
