import { FaCircle } from "react-icons/fa6";

export type detailedListType = {
  step?: string | number;
  heading: string;
  description: string;
};

export default function CardDetailedList({
  step,
  heading,
  description,
}: detailedListType) {
  return (
    <>
      <div className="flex gap-2.5 lg:gap-4 py-5 border-border border-b">
        {step && <p className="shrink-0 font-jetbrains text-xs">{step}</p>}
        <div>
          <p className="font-medium text-primary-200 text-[16.5px] flex items-center gap-1.5 mb-1.5">
            {!step && <FaCircle size={5} className="text-[#4FD8B0] shrink-0" />}
            {heading}
          </p>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </>
  );
}
