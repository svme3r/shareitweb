import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { MenuAlt2Icon } from "@heroicons/react/solid";
import Button from "./Button";
import Cookies from "js-cookie";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState("");
  useEffect(() => {
    setIsLoggedIn(Cookies.get("token"));
  }, []);
  return (
    <>
      <nav className="sticky flex flex-wrap items-center justify-between px-2 py-1 z-10 shadow-md">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              <a>
                <Image src="/assets/logo.png" width={90} height={60} />
              </a>
            </Link>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <MenuAlt2Icon className="h-7 w-7 text-gray-500" />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none items-center md:mx-0 mx-auto lg:ml-auto">
              <li className="nav-item pl-5">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/"
                >
                  <a>
                    <span className="ml-2">Home</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item pl-5">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/"
                >
                  <a>
                    <span className="ml-2">About</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item pl-5">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/"
                >
                  <a>
                    <span className="ml-2">Contact</span>
                  </a>
                </Link>
              </li>
              {!isLoggedIn && (
                <li className="nav-item pl-5">
                  <Link href="/signin">
                    <a className="py-3 px-10 bg-purple-700 hover:bg-purple-900 hover:shadow-2xl text-white rounded transition duration-300 shadow-lg ease-in-out">
                      Sign In
                    </a>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
