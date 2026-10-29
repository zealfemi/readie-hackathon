"use client";

import { createContext, PropsWithChildren, useContext } from "react";

type bannerType = {
  imageWidth: "lg:w-5/9" | "lg:w-8/12";
  contentWidth: "lg:w-4/9" | "lg:w-4/12";
};

const BannerContext = createContext<bannerType>({
  imageWidth: "lg:w-5/9",
  contentWidth: "lg:w-4/9",
});

function useBannerContext() {
  const context = useContext(BannerContext);
  if (!context) throw new Error("Banner context used outside of provider");
  return context;
}

export function Banner({
  imageWidth,
  contentWidth,
  children,
}: PropsWithChildren<bannerType>) {
  return (
    <BannerContext.Provider value={{ imageWidth, contentWidth }}>
      <div className="border-border border-t flex flex-col lg:flex-row w-full lg:min-h-125">
        {children}
      </div>
    </BannerContext.Provider>
  );
}

export function BannerImage({ children }: PropsWithChildren) {
  const { imageWidth } = useBannerContext();
  return (
    <div
      className={`bg-primary-500 p-4 lg:p-10 ${imageWidth} flex flex-col items-center justify-center border-border lg:first:border-r lg:not-first:border-r-0`}>
      {children}
    </div>
  );
}

export function BannerContent({ children }: PropsWithChildren) {
  const { contentWidth } = useBannerContext();
  return (
    <div
      className={`bg-primary-600 w-full ${contentWidth} py-10 px-4 lg:px-10 flex flex-col justify-center items-center text-left gap-5 border-border lg:first:border-r lg:not-first:border-r-0`}>
      {children}
    </div>
  );
}

Banner.Image = BannerImage;
Banner.Content = BannerContent;
