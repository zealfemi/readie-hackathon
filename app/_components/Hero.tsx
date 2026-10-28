import Image from "next/image";
import hero from "@/public/images/hero.png";
import Button from "./Button";
import { HiArrowRight } from "react-icons/hi2";

export default function Hero() {
  return (
    <div className="md:mx-10 lg:mx-30">
      <div className="grid lg:grid-cols-2">
        <div className="px-4 py-10 lg:p-14 flex flex-col gap-5 h-full items-center justify-center border-b lg:border-r lg:border-b-0 border-border bg-primary-600">
          <h1 className="text-primary-200 font-semibold text-3xl md:text-4xl lg:text-6xl">
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

        <div className="max-w-full">
          <Image
            src={hero}
            alt="hero image"
            className="object-cover max-w-full"
          />
        </div>
      </div>
    </div>
  );
}
