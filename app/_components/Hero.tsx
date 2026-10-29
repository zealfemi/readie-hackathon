import hero from "@/public/images/hero.png";
import Image from "next/image";
import {
  HiArrowRight,
  HiOutlineHome,
  HiOutlineLockClosed,
} from "react-icons/hi2";
import { MdOutlineVerifiedUser } from "react-icons/md";
import Button from "./Button";

export default function Hero() {
  return (
    <section>
      <div className="grid lg:grid-cols-2">
        <div className="px-4 py-10 md:px-7 lg:p-14 flex flex-col gap-5 h-full items-center justify-center border-b lg:border-r lg:border-b-0 border-border bg-primary-600">
          <h1 className="text-primary-200 text-left font-semibold text-3xl md:text-4xl lg:text-6xl leading-tight">
            Find talent. See the evidence.{" "}
            <span className="text-primary-400">Hire with confidence.</span>
          </h1>

          <p>
            Source from Readie&apos;s verified community or the open web, test
            skills against your job description, read evidence-backed Passports
            and check every interview, in one workspace
          </p>

          <div className="flex flex-col lg:flex-row gap-5 items-start justify-center lg:justify-start w-full font-medium text-white">
            <Button color="bg-primary-400">
              Start a Campaign · Free <HiArrowRight />
            </Button>
            <Button>Explore Recruiter Hub</Button>
          </div>
        </div>

        <div className="flex w-full">
          <Image
            src={hero}
            alt="hero image"
            className="object-cover w-full max-h-155"
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 border-border border-t border-b">
        <p className="flex items-center justify-center gap-2 text-sm py-5.5 px-14 border-border border-b lg:border-r lg:border-b-0">
          <MdOutlineVerifiedUser size={20} className="text-primary-300" />
          Verified evidence, not claims
        </p>
        <p className="flex items-center justify-center gap-2 text-sm py-5.5 px-14 border-border border-b lg:border-r lg:border-b-0">
          <HiOutlineLockClosed size={20} className="text-primary-300" />
          Verified evidence, not claims
        </p>
        <p className="flex items-center justify-center gap-2 text-sm py-5.5 px-14">
          <HiOutlineHome size={20} className="text-primary-300" />
          Verified evidence, not claims
        </p>
      </div>
    </section>
  );
}
