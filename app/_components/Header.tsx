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
    <header className="sticky top-0 z-50 bg-primary-800 w-full">
      <div className="relative text-base font-light">
        <div className="flex justify-between items-center border-b border-border px-4 py-6 lg:px-25 text-white">
          <span>
            <Link href="/">
              <Image src={logo} alt="header logo" priority />
            </Link>
          </span>

          <div className="lg:hidden place-items-end">
            <HiMenu
              size={30}
              className="cursor-pointer"
              onClick={() => setShowMenu(true)}
            />
          </div>

          <nav className="hidden flex-1 lg:flex justify-center items-center gap-5 text-white w-full">
            <Link
              href="#"
              className="flex items-center gap-1.75 hover:underline">
              For Individuals <SlArrowDown size={14} />
            </Link>
            <Link href="#" className="hover:underline">
              For Organizations
            </Link>
            <Link href="#" className="hover:underline">
              Pricing
            </Link>
            <Link href="#" className="hover:underline">
              Our Story
            </Link>
          </nav>

          <div className="place-items-end hidden lg:block">
            <div className="flex gap-4 items-center justify-end w-fit font-medium">
              <Link href="#" className="hover:underline">
                Log In
              </Link>
              <Button link="#" color="bg-primary-400">
                Sign Up
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`fixed top-0 w-full h-full z-50 p-4 backdrop-blur-lg transition-all duration-300 ease-in-out ${
            showMenu
              ? "opacity-100 pointer-events-auto translate-y-0"
              : "opacity-0 pointer-events-none -translate-y-full"
          }`}>
          <div className="w-full flex justify-end">
            <HiXMark
              size={30}
              className="cursor-pointer text-white"
              onClick={() => setShowMenu(false)}
            />
          </div>

          <nav className="mt-10 flex flex-col gap-6 text-white text-center w-full font-light capitalize">
            <Link
              href="#"
              onClick={() => setShowMenu(false)}
              className="flex items-center justify-center gap-1.75 hover:underline">
              For Individuals <SlArrowDown size={12} />
            </Link>
            <Link
              href="#"
              className="hover:underline"
              onClick={() => setShowMenu(false)}>
              For Organizations
            </Link>
            <Link
              href="#"
              className="hover:underline"
              onClick={() => setShowMenu(false)}>
              Pricing
            </Link>
            <Link
              href="#"
              className="hover:underline"
              onClick={() => setShowMenu(false)}>
              Our Story
            </Link>

            <Link
              href="#"
              className="hover:underline"
              onClick={() => setShowMenu(false)}>
              Log In
            </Link>
            <Button link="#" color="bg-primary-400">
              Sign Up
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
