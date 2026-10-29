"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const [loading, setLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
      setTimeout(() => setShouldRender(false), 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      role="status"
      aria-label="Loading page content"
      className={`fixed inset-0 z-9999 flex flex-col items-center justify-center bg-primary-800 transition-opacity duration-500 ease-in-out ${
        loading
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}>
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-4 border-primary-500/30" />
          <div className="absolute inset-0 rounded-full border-4 border-primary-400 border-t-transparent motion-safe:animate-spin" />
        </div>

        {/* <p className="text-sm font-medium text-primary-200 tracking-wider animate-pulse">
          Loading...
        </p> */}
        <span className="sr-only">Loading, please wait...</span>
      </div>
    </div>
  );
}
