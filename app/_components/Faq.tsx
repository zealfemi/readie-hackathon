import { HiMinus, HiPlus } from "react-icons/hi2";
import { faqType } from "./FAQs";

export default function Faq({
  faq,
  onClick,
  isOpen,
}: {
  faq: faqType;
  onClick: () => void;
  isOpen: boolean;
}) {
  return (
    <div
      className={`border-border border-b transition-all duration-300 ease-in-out`}>
      <div className="w-full">
        <button
          className="flex w-full justify-between items-center gap-3 py-5 text-left text-primary-200 hover:cursor-pointer"
          onClick={onClick}>
          <p>{faq.question}</p>
          {!isOpen ? (
            <HiPlus size={16} className="text-primary-300" />
          ) : (
            <HiMinus size={16} className="text-primary-300" />
          )}
        </button>

        <div
          className={`md:max-w-5/6 grid transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen
              ? "grid-rows-[1fr] opacity-100 pb-5"
              : "grid-rows-[0fr] opacity-0 mt-0"
          }`}>
          <div className="min-h-0">
            <p className="text-xs md:text-sm">{faq.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
