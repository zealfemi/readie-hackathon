import arcs from "@/public/images/arcs.svg";
import Image from "next/image";
import { HiLockClosed, HiOutlineHome } from "react-icons/hi2";
import { MdOutlineVerifiedUser } from "react-icons/md";

export default function RevealConsent() {
  return (
    <div className="radial-bg-2 px-4 py-15 md:py-20 md:px-7 lg:px-14 lg:py-25 relative overflow-hidden">
      <Image src={arcs} alt="arcs svg" className="absolute top-0 right-0" />

      <div>
        <div className="max-w-155 flex flex-col gap-5">
          <h3 className="text-primary-200 text-[28px] lg:text-[46px] font-semibold">
            Every reveal. Consent-logged. Audit-ready.
          </h3>
          <p className="">
            Readie members consent before anyone sees their Passport or reports.
            Candidates found through Talent Discovery stay anonymous until you
            choose to reveal them, and every invitation tells them how they were
            found and how to opt out. When legal asks how a hire was made, you
            have a sealed record, not a recollection
          </p>
        </div>

        <div className="mt-10 lg:mt-16.5 grid lg:grid-cols-3">
          <div className="flex flex-col gap-5 py-7 border-border border-t lg:px-7">
            <HiLockClosed size={24} className="text-primary-200" />
            <div className="flex flex-col gap-2">
              <h4 className="font-medium text-primary-200 text-[16.5px]">
                Every reveal consent-logged
              </h4>
              <p className="text-sm">
                Passport access, Mastery Report release and every contact reveal
                are timestamped and recorded. Readie members approve access
                first
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5 py-7 border-border border-t lg:border-l lg:px-7">
            <MdOutlineVerifiedUser size={24} className="text-primary-200" />
            <div className="flex flex-col gap-2">
              <h4 className="font-medium text-primary-200 text-[16.5px]">
                Every reveal consent-logged
              </h4>
              <p className="text-sm">
                Passport access, Mastery Report release and every contact reveal
                are timestamped and recorded. Readie members approve access
                first
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 pt-7 border-border border-t lg:border-l lg:px-7">
            <HiOutlineHome size={24} className="text-primary-200" />
            <div className="flex flex-col gap-2">
              <h4 className="font-medium text-primary-200 text-[16.5px]">
                Every reveal consent-logged
              </h4>
              <p className="text-sm">
                Passport access, Mastery Report release and every contact reveal
                are timestamped and recorded. Readie members approve access
                first
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
