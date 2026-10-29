import { GoVerified } from "react-icons/go";
import { HiPhone } from "react-icons/hi2";
import { planType } from "./OurPlans";

export default function PlanCard({
  plan,
  planIndex,
}: {
  plan: planType;
  planIndex: number;
}) {
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
              <button className="p-2 recommended-btn text-xs">
                Recommended
              </button>
            )}
          </p>
          <p>{plan.subtitle}</p>
        </div>
        <p>
          <span
            className={`text-[27px] font-semibold ${planIndex !== 3 && "text-primary-200"}`}>
            {plan.price}
          </span>
          {plan.billing}
        </p>
        {plan.recommended && (
          <>
            <p>or {plan.annualBilling}</p>
            <div className="flex gap-2 items-center">
              <button className="w-10 h-5 bg-primary-100 border-border border relative rounded-full p-0.5 flex justify-start items-center cursor-pointer">
                <div className="w-4 h-4 rounded-full bg-primary-200"></div>
              </button>
              <p>Annual Billing</p>
            </div>
          </>
        )}
      </div>
      <div
        className={`p-4 lg:p-6 border-t ${planIndex === 0 && 1 && "border-border"} ${planIndex === 2 && "border-primary-300"} ${planIndex === 3 && "border-[#3B3B4F]"}`}>
        <div className="flex flex-col gap-6">
          <button
            className={`w-full btn py-2.5 px-5 cursor-pointer flex gap-1 items-center justify-center text-sm lg:text-base hover:opacity-50 ${planIndex === 0 && "bg-[#3B3B4F] text-primary-200"} ${planIndex === 1 && "bg-primary-400 text-primary-200"} ${planIndex === 2 && "bg-primary-200 text-primary-800"} ${planIndex === 3 && "bg-[#FFFFFF70] text-primary-800"}`}>
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
                  className="text-xs md:text-sm flex gap-2  items-center opacity-50">
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
