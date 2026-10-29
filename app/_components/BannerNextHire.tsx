import Image from "next/image";
import bg from "@/public/images/next-hire.png";
import Button from "./Button";
import { HiArrowRight } from "react-icons/hi2";

export default function BannerNextHire() {
  return (
    <div className="relative w-full overflow-hidden">
      <Image
        src={bg}
        alt="next hire"
        unoptimized
        className="w-full h-full object-cover min-h-screen"
      />

      <div className="absolute inset-0 flex items-center justify-center text-center px-4 sm:px-6 md:px-8 lg:px-14 py-12 md:py-20">
        <div className="flex flex-col items-center justify-center gap-5 max-w-xl w-full">
          <h2 className="text-[28px] lg:text-[46px] font-semibold text-primary-200 capitalize leading-tight">
            Your next hire <br />
            deserves the truth.
          </h2>
          <p>
            Ready to remove the blind spots from your hiring process? Start a
            Campaign in under 5 minutes: upload your job description, invite
            candidates, and get an evidence report on each one.
          </p>
          <Button color="bg-primary-400 text-primary-200">
            Start a Campaign · Free <HiArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
