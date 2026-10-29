import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo-footer.svg";
import Button from "./Button";
import { FaInstagram, FaLinkedin, FaTiktok, FaXTwitter } from "react-icons/fa6";

type linkType = {
  category: string;
  links: string[];
};

const footerLinks: linkType[] = [
  {
    category: "For Individuals",
    links: [
      "AI Readiness Assessment",
      "AI Starter Assessment",
      "Career Pathmaker",
      "My Readiness HQ",
      "Rewards Hub",
      "Readie streaks",
    ],
  },
  {
    category: "About Us",
    links: ["Our story", "Careers", "Contact", "Newsroom"],
  },
  {
    category: "Resources",
    links: [
      "Blogs & Insights",
      "AI Ethics Guidelines",
      "Research & Reports",
      "Webinars and Events",
      "FAQs",
    ],
  },
  {
    category: "Legal",
    links: [
      "Terms of Service",
      "Privacy Policy",
      "Region Specific Disclosures",
      "Cookie Policy",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-border border-t px-4 py-7 lg:py-15 lg:px-25">
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
        <div className="lg:w-1/5">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <p className="text-sm text-primary-200">
                Subscribe to our newsletter
              </p>
              <input
                placeholder="Enter your email"
                className="py-2 px-4 bg-primary-500 border-border border rounded-[10px] w-full text-primary-200"
              />
            </div>
            <Button color="text-primary-200 bg-primary-400">Subscribe</Button>
            <div className="flex gap-5 items-center">
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
              <a href="#" aria-label="X Twitter">
                <FaXTwitter size={24} />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
              <a href="#" aria-label="TikTok">
                <FaTiktok size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:w-4/5 grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
          {footerLinks.map((linkGroup: linkType, index) => (
            <div key={index} className="flex flex-col gap-4">
              <p className="font-medium text-primary-200">
                {linkGroup.category}
              </p>
              <ul className="flex flex-col gap-2">
                {linkGroup.links.map((item: string, itemIdx) => (
                  <li key={itemIdx}>
                    <Link href="#" className="hover:underline">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 lg:mt-2 flex w-full flex-col lg:flex-row text-center items-center lg:items-end gap-3">
        <Link href="/">
          <Image src={logo} alt="footer logo" />
        </Link>
        <p className="flex-1 text-xs">
          Readie empowers individuals and organisations to thrive in an AI-first
          world.
        </p>
        <p className="text-xs">© 2026 Readie. All rights reserved.</p>
      </div>
    </footer>
  );
}
