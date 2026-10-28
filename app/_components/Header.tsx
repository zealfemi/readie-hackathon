"use client";

import logo from "@/public/images/logo-header.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import { SlArrowDown } from "react-icons/sl";
import Button from "./Button";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="sticky top-0 bg-primary-800">
      <div className="relative text-base font-light">
        <div className="flex justify-between items-center border-b border-border py-4 px-4 md:px-10 lg:px-25 text-white">
          <span className="">
            <Link href="/">
              <Image src={logo} alt="header logo" />
            </Link>
          </span>

          <div className="lg:hidden place-items-end">
            <HiMenu
              size={20}
              className="cursor-pointer"
              onClick={() => setShowMenu(true)}
            />
          </div>

          <nav className="hidden flex-1 lg:flex justify-center items-center gap-5 text-white w-full">
            <Link href="/" className="flex items-center gap-1.75">
              For Individuals <SlArrowDown size={14} />
            </Link>
            <Link href="/">For Organizations</Link>
            <Link href="/">Pricing</Link>
            <Link href="/">Our Story</Link>
          </nav>

          <div className="place-items-end hidden lg:block">
            <div className="flex gap-4 items-center justify-end w-fit font-medium">
              <Link href="">Log In</Link>
              <Button link="/" color="bg-primary-400">
                Sign Up
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`absolute p-4 backdrop-blur-lg w-screen h-screen transition-all duration-500 ease-in-out overflow-hidden ${
            showMenu
              ? "top-0 opacity-100 pointer-events-auto"
              : "-top-96 opacity-0 pointer-events-none"
          }`}>
          <div className="">
            <div className="w-full">
              <div className="">
                <HiXMark
                  size={20}
                  className="cursor-pointer"
                  onClick={() => setShowMenu(false)}
                />
              </div>

              <nav className="mt-10 flex flex-col gap-4 text-white text-center w-full font-light capitalize">
                <Link
                  href="/"
                  className="flex items-center justify-center w-full gap-1.75">
                  For Individuals <SlArrowDown size={12} />
                </Link>
                <Link href="/">For Organizations</Link>
                <Link href="/">Pricing</Link>
                <Link href="/">Our Story</Link>

                <Link href="">Log In</Link>
                <Button link="/" color="bg-primary-400">
                  Sign Up
                </Button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
