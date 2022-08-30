import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import profile from "/public/assets/profile.png";
import Image from "next/image";
import {
  BellIcon,
  CogIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

export default function NotificationsDropdown() {
  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left z-50">
        <div>
          <Menu.Button className="inline-flex w-full justify-center ">
            <div>
              <BellIcon className="w-8 text-white" />
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
            <div>
              <h4 className="p-2 text-sm font-semibold">Notifications</h4>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-[#974B9D] text-white" : "text-gray-900 dark:text-white"
                    } group flex w-full items-center rounded-md px-2 py-4 text-sm gap-2`}
                  >
                    <Link href="/dashboard/account/settings">
                      <a className="text-left space-y-2">
                        <h4 className="font-semibold">13 Nov 2022</h4>
                        <p className={active ? "text-white" : "text-gray-600 dark:text-gray-300"}>
                          It is a long established fact that a reader will be
                          distracted.
                        </p>
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
                      active ? "bg-[#974B9D] text-white" : "text-gray-900 dark:text-white"
                    } group flex w-full items-center rounded-md px-2 py-4 text-sm gap-2`}
                  >
                    <Link href="/dashboard/account/settings">
                      <a className="text-left space-y-2">
                        <h4 className="font-semibold">13 Nov 2022</h4>
                        <p className={active ? "text-white" : "text-gray-600 dark:text-gray-300"}>
                          It is a long established fact that a reader will be
                          distracted.
                        </p>
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
                      active ? "bg-[#974B9D] text-white" : "text-gray-900 dark:text-white"
                    } group flex w-full items-center rounded-md px-2 py-4 text-sm gap-2`}
                  >
                    <Link href="/dashboard/account/settings">
                      <a className="text-left space-y-2">
                        <h4 className="font-semibold">13 Nov 2022</h4>
                        <p className={active ? "text-white" : "text-gray-600 dark:text-gray-300"}>
                          It is a long established fact that a reader will be
                          distracted.
                        </p>
                      </a>
                    </Link>
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
