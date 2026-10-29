"use client";

import { useState } from "react";
import Button from "./Button";
import Faq from "./Faq";
import { faqs, faqType } from "../_data/faqs";

export default function FAQs() {
  const [showFaq, setShowFaq] = useState<string | null>(null);

  function toggleFaq(faq: string) {
    setShowFaq((prev) => (prev === faq ? null : faq));
  }
  return (
    <div className="bg-primary-600 flex flex-col lg:flex-row">
      <div className="px-4 sm:px-6 md:px-8 lg:px-14 py-12 md:py-16 border-border border-t border-r lg:w-4/9">
        <div className="flex flex-col gap-6 h-full justify-center">
          <h3 className="text-[28px] lg:text-[46px] font-semibold text-primary-200 capitalize leading-tight">
            Frequently Asked Questions
          </h3>
          <div className="flex flex-col gap-2">
            <h4 className="font-medium text-primary-200 text-[16.5px]">
              Can’t find what you’re looking for?
            </h4>
            <p>
              Access our full support hub for a complete library of FAQs and
              helpful resources.
            </p>
          </div>
          <Button color="text-primary-200 bg-primary-400">
            Visit Our Help Hub
          </Button>
        </div>
      </div>
      <div className="px-4 sm:px-6 md:px-8 lg:px-14 py-12 md:py-16 border-border border-t lg:w-5/9">
        <div className="flex flex-col">
          {faqs.map((faq: faqType, index) => (
            <div key={index}>
              <Faq
                faq={faq}
                onClick={() => toggleFaq(faq.question)}
                isOpen={showFaq === faq.question}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
