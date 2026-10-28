import Image from "next/image";
import { IoIosCheckmark } from "react-icons/io";
import { recruitmentHubDataType } from "./RecruitmentHub";

export default function FindTalentCardOne({
  data,
}: {
  data: recruitmentHubDataType;
}) {
  return (
    <div className="border-border border-t">
      <div className="bg-primary-500 px-4 py-5 lg:px-5">
        <div className="flex items-center justify-center h-full w-full relative min-h-70 md:h-120 lg:h-90 mb-4">
          <Image
            src={data.image}
            alt="recruiter"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-2 lg:justify-between lg:items-center mb-2 font-jetbrains text-[11px]">
          <p>{data.subtitle}</p>
          <p className="text-primary-200">{data.card}</p>
        </div>
        <p className="text-xs">{data.description}</p>
      </div>

      <div className="bg-primary-600 border-border border-t py-7 px-4 lg:px-14 flex flex-col gap-3">
        <h4 className="text-primary-200 capitalize text-lg lg:text-[20px]">
          {data.heading}
        </h4>
        <p>{data.content}</p>
        <ul className="text-sm flex flex-col gap-2">
          {data.features.map((feature: string, index) => (
            <li key={index} className="flex gap-1.5 items-center">
              <IoIosCheckmark size={20} className="text-primary-300" />{" "}
              {feature}
            </li>
          ))}
        </ul>
        <p className="text-xs pt-3 border-border border-t">{data.footer}</p>
      </div>
    </div>
  );
}
