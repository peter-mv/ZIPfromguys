import Link from "next/link";
import React from "react";
import { RiMenuLine } from "react-icons/ri";
import NavigationHeader from './NavigationHeader'

function Header() {
  return (
    <header className="bg-white py-4 px-4 md:px-0 z-50">
      <div className="mx-auto container max-w-sm md:max-w-2xl lg:max-w-6xl flex items-center justify-between">
        <div className="">
          <Link href="/" className="text-blue-500 font-bold text-2xl">
            Logo
          </Link>
        </div>

        <NavigationHeader />

        <div className="hidden lg:flex items-center justify-center gap-4">
          <Link
            href="/"
            className="text-blue-500 hover:text-blue-300 transition"
          >
            Log In
          </Link>
          <Link
            href="/"
            className="bg-blue-500 hover:bg-blue-300 transition px-3 py-1 rounded-lg text-white"
          >
            Sign In
          </Link>
        </div>

        <Link href="/" className="flex lg:hidden">
          <RiMenuLine className="text-blue-500" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
