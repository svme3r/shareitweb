import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import profile from "/public/assets/profile.png";
import Image from "next/image";
import {
  CogIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import Cookies from "js-cookie";

export default function Dropdown() {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    Cookies.remove("token");
    Cookies.remove("user");
    Cookies.remove("role");
    Cookies.remove("roleType");
    router.replace("/");
  };
  // const { data: session } = useSession();

  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left z-50">
        <div>
          <Menu.Button className="inline-flex w-full justify-center ">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img src={"/assets/default-profile.png"} />
            </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? "bg-[#974B9D] text-white"
                        : "text-gray-900 dark:text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}
                  >
                    <Link href="/dashboard/account/settings">
                      <a className="flex gap-2">
                        <CogIcon
                          className={`w-5 ${
                            active
                              ? "text-white"
                              : "text-[#974B9D] dark:text-purple-400"
                          }`}
                        />
                        Account Setting
                      </a>
                    </Link>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? "bg-[#974B9D] text-white"
                        : "text-gray-900 dark:text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <Link href="/dashboard/coins">
                      <a className="flex gap-2">
                        <CurrencyDollarIcon
                          className={`w-5 ${
                            active
                              ? "text-white"
                              : "text-[#974B9D] dark:text-purple-400"
                          }`}
                        />
                        Coins
                      </a>
                    </Link>
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? "bg-[#974B9D] text-white"
                        : "text-gray-900 dark:text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <Link href="/dashboard/coins/payment">
                      <a className="flex gap-2">
                        <CreditCardIcon
                          className={`w-5 ${
                            active
                              ? "text-white"
                              : "text-[#974B9D] dark:text-purple-400"
                          }`}
                        />
                        Your Card
                      </a>
                    </Link>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={logout}
                    className={`${
                      active
                        ? "bg-[#974B9D] text-white"
                        : "text-gray-900 dark:text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}
                  >
                    <LogoutIcon
                      className={`w-5 ${
                        active
                          ? "text-white"
                          : "text-[#974B9D] dark:text-purple-400"
                      }`}
                    />
                    Log Out
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
