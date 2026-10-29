import Link from "next/link";
import { PropsWithChildren } from "react";

type buttonType = {
  link?: string;
  color?: string;
  onClick?: () => void;
};
export default function Button({
  link,
  color,
  children,
  onClick,
}: PropsWithChildren<buttonType>) {
  if (link) {
  }

  return (
    <>
      {link ? (
        <Link href={link} className={`btn py-2.5 px-4 ${color && color}`}>
          {children}
        </Link>
      ) : (
        <button
          type="button"
          aria-label="Button"
          role="button"
          onClick={onClick}
          className={`btn w-fit py-2.5 px-5 ${color && color} cursor-pointer flex gap-1 items-center justify-center text-sm lg:text-base hover:opacity-50`}>
          {children}
        </button>
      )}
    </>
  );
}
