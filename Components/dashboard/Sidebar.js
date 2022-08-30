import { useEffect, useState } from "react";
import { ChevronLeftIcon, MenuIcon } from "@heroicons/react/solid";
import {
  CashIcon,
  ChartBarIcon,
  HomeIcon,
  MoonIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const { systemTheme, setTheme, theme } = useTheme();

  useEffect(()=>{
    theme === "dark" ? setEnabled(true) : setEnabled(false)
  },[theme])

  // if (enabled) {
  //   setTheme("dark");
  //   // if (typeof window !== "undefined") console.log(localStorage.getItem("darkmode"));
  // } else {
  //   setTheme("light");
  //   // if (typeof window !== "undefined") console.log(localStorage.getItem("darkmode"));
  // }

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     console.log("You are on the browser");
  //     localStorage.setItem("darkmode", enabled);
  //     // 👉️ can use localStorage here
  //   } else {
  //     console.log("You are on the server");
  //     // 👉️ can't use localStorage
  //   }
  // }, [enabled]);

  // const setDarkMode = () => {

  // }

  return (
    <>
      {showSidebar ? (
        <>
          <button
            className="flex text-4xl text-black active:bg-gray-100 hover:bg-gray-100 transition duration-300 p-2 rounded-full items-center cursor-pointer fixed left-10 top-6 z-50"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <ChevronLeftIcon className="w-6 h-6 text-black dark:text-white dark:hover:text-black" />
          </button>
        </>
      ) : (
        <>
          <MenuIcon
            onClick={() => setShowSidebar(!showSidebar)}
            className="md:w-7 md:h-7 w-7 z-30 flex items-center cursor-pointer text-white"
          />
        </>
      )}

      <div
        // style={{ background: "#974B9D" }}
        className={`bg-white dark:bg-gray-900 top-0 left-0 w-[50vw] md:w-[20vw] text-white fixed h-full z-40 pt-20  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="hover:bg-gray-100 transition duration-100 cursor-pointer my-2 py-2">
          <Link href="/dashboard">
            <a className="flex items-center gap-2 px-5 text-black dark:text-white dark:hover:text-gray-800 font-semibold text-lg">
              <HomeIcon className="w-8 h-8 text-purple-600" /> Home
            </a>
          </Link>
        </div>
        <div className="hover:bg-gray-100 transition duration-100 cursor-pointer my-2 py-2">
          <Link href="/dashboard/winners">
            <a className="flex items-center gap-2 px-5 text-black dark:text-white dark:hover:text-gray-800 font-semibold text-lg">
              <CashIcon className="w-8 h-8 text-purple-600" /> Winners
            </a>
          </Link>
        </div>
        <div className="hover:bg-gray-100 transition duration-100 cursor-pointer my-2 py-2">
          <Link href="/dashboard/prizes">
            <a className="flex items-center gap-2 px-5 text-black dark:text-white dark:hover:text-gray-800 font-semibold text-lg">
              <ChartBarIcon className="w-8 h-8 text-purple-600" /> Contest
              Prizes
            </a>
          </Link>
        </div>
        <div className="hover:bg-gray-100 transition duration-100 cursor-pointer my-2 py-2 flex items-center gap-2 px-5 dark:hover:text-gray-800 text-black dark:text-white font-semibold text-lg">
          <MoonIcon className="w-8 h-8 text-purple-600" /> Dark Mode
          <label className="inline-flex relative items-center mr-5 cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={enabled}
              readOnly
            />
            <div
              onClick={() => {
                setEnabled(!enabled);
                setTheme(theme === "dark" ? "light" : "dark");
              }}
              className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-purple-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"
            ></div>
          </label>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
