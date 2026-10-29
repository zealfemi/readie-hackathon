import { IconType } from "react-icons";
import { HiLockClosed, HiOutlineHome } from "react-icons/hi2";
import { MdOutlineVerifiedUser } from "react-icons/md";

export type revealDataType = {
  icon: IconType;
  heading: string;
  description: string;
};

export const revealConsentData: revealDataType[] = [
  {
    icon: HiLockClosed,
    heading: "Every reveal consent-logged",
    description:
      "Passport access, Mastery Report release and every contact reveal are timestamped and recorded. Readie members approve access first",
  },
  {
    icon: MdOutlineVerifiedUser,
    heading: "Cryptographic document hash",
    description:
      "Every Mastery Report carries a tamper-evident hash. Any change invalidates the record.",
  },
  {
    icon: HiOutlineHome,
    heading: "Regulated industry ready",
    description:
      "Built for financial services, healthcare, legal and the public sector, where due diligence in hiring is required",
  },
];
