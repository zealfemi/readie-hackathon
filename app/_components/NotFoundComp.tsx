"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { HiArrowLeft, HiHome } from "react-icons/hi";

export default function NotFoundComp() {
  const router = useRouter();

  return (
    <main className="z-0 px-5 min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col gap-5 items-center justify-center text-center min-h-full dashed-border px-4 py-8 lg:py-14 w-full max-w-2xl">
        <p className="text-9xl font-bold font-jetbrains text-primary-200">
          404
        </p>
        <p className="text-3xl font-semibold text-primary-200">
          Page not found
        </p>
        <p>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-2">
          <Link
            href="/"
            className="px-8 py-2.5 w-35 btn text-primary-200 flex items-center justify-center gap-2 hover:bg-[#ffffff20]  transition-colors">
            <HiHome /> Home
          </Link>

          <button
            type="button"
            className="px-8 py-2.5 w-35 btn text-primary-200 flex items-center justify-center gap-2 cursor-pointer hover:bg-[#ffffff20] transition-colors"
            onClick={() => router.back()}>
            <HiArrowLeft /> Back
          </button>
        </div>
      </div>
    </main>
  );
}
