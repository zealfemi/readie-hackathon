"use client";

import { GoVerified } from "react-icons/go";
import { HiPhone } from "react-icons/hi2";
import { planType } from "../_data/ourPlans";
import { useState } from "react";

export default function PlanCard({
  plan,
  planIndex,
  planBilling,
}: {
  plan: planType;
  planIndex: number;
  planBilling: "monthly" | "annually";
}) {
  const [annualBilling, setAnnualBilling] = useState(false);

  return (
    <div
      className={`${planIndex === 0 && "plan-1"} ${planIndex === 1 && "plan-2"} ${planIndex === 2 && "plan-3 text-primary-200"} ${planIndex === 3 && "plan-4 text-[#00000099]"}`}>
      <div className="p-4 lg:p-6 flex flex-col gap-4">
        <div>
          <p className={`mb-2 flex w-full justify-between items-center`}>
            <span
              className={`text-[20px] font-bold ${planIndex !== 3 && "text-primary-200"}`}>
              {plan.name}
            </span>
            {plan.recommended && (
              <button className="p-2 recommended-btn text-xs text-primary-200">
                Recommended
              </button>
            )}
          </p>
          <p>{plan.subtitle}</p>
        </div>
        {plan.price && (
          <p>
            <span
              className={`text-[27px] font-semibold ${planIndex !== 3 && "text-primary-200"}`}>
              {planBilling === "monthly" ? plan.price : plan.annualPrice}
            </span>
            {planBilling === "monthly" &&
              plan.price !== "" &&
              plan.price !== "Free" &&
              "/per Month"}

            {planBilling === "annually" &&
              plan.price !== "" &&
              plan.price !== "Free" &&
              "/per Year"}
          </p>
        )}
        {plan.recommended && planBilling === "monthly" && (
          <>
            <p>or {plan.annualBilling}</p>
            <div>
              <button
                type="button"
                aria-label="Toggle setting"
                aria-checked={annualBilling}
                role="switch"
                onClick={() => setAnnualBilling(!annualBilling)}
                className="flex gap-2 items-center">
                <div
                  className={`w-10 h-5 bg-primary-100 border-border border relative rounded-full p-0.5 flex ${annualBilling ? "justify-end bg-primary-400" : "justify-start"} items-center cursor-pointer transition-all duration-350 ease-in-out`}>
                  <div className="w-4 h-4 rounded-full bg-primary-200 transition-all duration-350 ease-in-out"></div>
                </div>
                <p>Annual Billing</p>
              </button>
            </div>
          </>
        )}
      </div>

      <div
        className={`p-4 lg:p-6 border-t ${planIndex === 0 && 1 && "border-border"} ${planIndex === 2 && "border-primary-300"} ${planIndex === 3 && "border-[#3B3B4F]"}`}>
        <div className="flex flex-col gap-6">
          <button
            className={`w-full btn py-2.5 px-5 cursor-pointer flex gap-1 items-center justify-center text-sm lg:text-base hover:opacity-50 ${planIndex === 0 && "bg-[#3B3B4F] text-primary-200"} ${planIndex === 1 && "bg-primary-400 text-primary-200"} ${planIndex === 2 && "bg-primary-200 text-primary-800"} ${planIndex === 3 && "bg-[#FFFFFF70] text-primary-800 backdrop-blur-3xl"}`}>
            {planIndex === 3 && <HiPhone />}
            {plan.buttonText}
          </button>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              {plan.features.map((feature: string) => (
                <div
                  key={feature}
                  className="text-xs md:text-sm flex gap-2 items-center">
                  <GoVerified
                    size={16}
                    className={`shrink-0 ${planIndex !== 3 && "text-primary-200"}`}
                  />
                  <p
                    className={`${planIndex === 1 && 2 && "text-primary-200"}`}>
                    {feature}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              {plan.disabledFeatures.map((feature: string) => (
                <div
                  key={feature}
                  className="text-xs md:text-sm flex gap-2  items-center opacity-70">
                  <GoVerified size={16} className="shrink-0" />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
