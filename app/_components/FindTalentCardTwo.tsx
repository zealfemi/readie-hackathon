import Image from "next/image";
import { FaCircle } from "react-icons/fa6";
import { assessmentType, stepType } from "./TargetedAssessments";
import Button from "./Button";

type cardType = {
  data: assessmentType;
  order: "image-first" | "image-last";
  imageWidth: "lg:w-5/9" | "lg:w-8/12";
  detailsWidth: "lg:w-4/9" | "lg:w-4/12";
};

export default function FindTalentCardTwo({
  data,
  order,
  imageWidth,
  detailsWidth,
}: cardType) {
  return (
    <div className="border-border border-t flex flex-col lg:flex-row w-full lg:h-200">
      {/* Image Panel */}
      <div
        className={`bg-primary-500 p-4 lg:p-10 w-full ${imageWidth} flex flex-col items-center justify-center ${
          order === "image-first"
            ? "order-1 border-border lg:border-r"
            : "order-2 border-border border-t lg:border-t-0 lg:border-l"
        }`}>
        <div className="relative w-full h-70 md:h-105 lg:h-120 mb-5 overflow-hidden lg:p-16">
          <Image
            src={data.image}
            alt="recruiter"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-contain"
          />
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-2 lg:justify-between lg:items-center text-left mb-2 font-jetbrains text-[11px]">
          {data.subtitle && <p>{data.subtitle}</p>}
          {data.info && <p className="text-primary-200">{data.info}</p>}
        </div>
        {data.imageDescription && (
          <p className="text-xs w-full text-left">{data.imageDescription}</p>
        )}
      </div>

      {/* Content Panel */}
      <div
        className={`bg-primary-600 w-full lg:w-4/9 py-10 ${detailsWidth} px-4 lg:px-10 flex flex-col justify-center text-left gap-5 ${
          order === "image-first"
            ? "order-2 border-border border-t lg:border-t-0"
            : "order-1 lg:order-1"
        }`}>
        {data.heading && (
          <h4 className="text-primary-200 capitalize text-lg lg:text-[20px]">
            {data.heading}
          </h4>
        )}
        {data.description && (
          <p className="border-border border-b pb-5">{data.description}</p>
        )}
        <ul className="text-sm flex flex-col gap-2">
          {data.steps.map((step: stepType, index) => (
            <li
              key={index}
              className="flex gap-2.5 lg:gap-4 border-border border-b py-5">
              {step.number && (
                <p className="shrink-0 font-jetbrains text-xs">{step.number}</p>
              )}
              <div>
                <p className="font-medium text-primary-200 text-[16.5px] flex items-center gap-1.5 mb-1.5">
                  {!step.number && (
                    <FaCircle size={5} className="text-[#4FD8B0] shrink-0" />
                  )}
                  {step.heading}
                </p>
                <p className="text-sm">{step.content}</p>
              </div>
            </li>
          ))}
        </ul>
        {data.buttonText && (
          <Button color="text-primary-200">{data.buttonText}</Button>
        )}

        {data.footer && (
          <div className="my-10">
            <div className="w-14 border-border border-b"></div>
            <p className="border-border border-b py-5 items-end">
              {data.footer}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
