import { FaCircle } from "react-icons/fa6";
import RecruitmentHub from "./RecruitmentHub";

export default function TalentPool() {
  return (
    <section className="">
      <div className="px-4 md:px-7 lg:px-14 pt-25 pb-16 flex flex-col gap-5 text-center justify-center items-center bg-primary-600">
        <p className="text-primary-300 text-sm flex items-center justify-center gap-1.5">
          <FaCircle size={6} /> Two ways to find talent
        </p>
        <h3 className="text-[28px] lg:text-[46px] font-semibold">
          <span className="text-primary-200">A broader talent pool.</span> More
          of the right people.
        </h3>
        <p className="max-w-160">
          AI can write a flawless CV in seconds, and the same tools can put a
          different face on a video call. Interviews test presentation,
          references are biased, and none of it shows what a candidate can
          actually do.
        </p>
      </div>

      <RecruitmentHub />
    </section>
  );
}
