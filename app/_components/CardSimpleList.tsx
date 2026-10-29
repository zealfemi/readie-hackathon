import { IoIosCheckmark } from "react-icons/io";

type simpleListType = {
  heading?: string;
  description?: string;
  list: string[];
};

export default function CardSimpleList({
  heading,
  description,
  list,
}: simpleListType) {
  return (
    <div className="flex flex-col gap-3">
      {heading && (
        <h4 className="text-primary-200 capitalize text-lg lg:text-[20px]">
          {heading}
        </h4>
      )}
      {description && <p>{description}</p>}
      <ul className="text-sm flex flex-col gap-2">
        {list.map((l: string, index) => (
          <li key={index} className="flex gap-1.5 items-center">
            <IoIosCheckmark size={20} className="text-primary-300 shrink-0" />{" "}
            {l}
          </li>
        ))}
      </ul>
    </div>
  );
}
