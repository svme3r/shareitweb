import { useEffect, useState } from "react";
import {
  FilmIcon,
  HomeIcon,
  MenuAlt1Icon,
  PlusCircleIcon,
  StarIcon,
  SupportIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";
import Cookies from "js-cookie";

export default function Sidebar({ open, setOpen }) {
  const [role, setRole] = useState("");

  useEffect(() => {
    setRole(Cookies.get("roleType"));
  }, []);

  return (
    <div
      className={` ${
        open ? "w-16" : "w-60 "
      } flex flex-col h-screen p-3 bg-gray-800 shadow duration-300 fixed`}
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          {!open && (
            <h2 className="text-xl font-bold text-white duration-300">
              <Image src="/assets/logo.png" width={70} height={45} />
            </h2>
          )}
          <button onClick={() => setOpen(!open)}>
            <MenuAlt1Icon className="text-white w-6" />
          </button>
        </div>

        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="rounded-sm">
              <Link href="/admin">
                <a className="flex items-center p-2 space-x-3 rounded-md">
                  <HomeIcon className="text-white w-6" />
                  {!open && <span className="text-gray-100">Home</span>}
                </a>
              </Link>
            </li>
            {role !== "monitor" && (
              <>
                <li className="rounded-sm">
                  <Link href="/admin/roles">
                    <a className="flex items-center p-2 space-x-3 rounded-md">
                      <UserIcon className="text-white w-6" />
                      {!open && <span className="text-gray-100">Roles</span>}
                    </a>
                  </Link>
                </li>
                <li className="rounded-sm">
                  <Link href="/admin/leagues">
                    <a className="flex items-center p-2 space-x-3 rounded-md">
                      <SupportIcon className="text-white w-6" />
                      {!open && <span className="text-gray-100">Leagues</span>}
                    </a>
                  </Link>
                </li>
              </>
            )}

            <li className="rounded-sm">
              <Link href="/admin/stories">
                <a className="flex items-center p-2 space-x-3 rounded-md">
                  <FilmIcon className="text-white w-6" />
                  {!open && <span className="text-gray-100">Stories</span>}
                </a>
              </Link>
            </li>
            <li className="rounded-sm">
              <Link href="/admin/stories/forRating">
                <a className="flex items-center p-2 space-x-3 rounded-md">
                  <PlusCircleIcon className="text-white w-6" />
                  {!open && (
                    <span className="text-gray-100">Stories for Rating</span>
                  )}
                </a>
              </Link>
            </li>
            <li className="rounded-sm">
              <Link href="/admin/stories/monitorRating">
                <a className="flex items-center p-2 space-x-3 rounded-md">
                  <StarIcon className="text-white w-6" />
                  {!open && (
                    <span className="text-gray-100">Monitor Rating</span>
                  )}
                </a>
              </Link>
            </li>
            <li className="rounded-sm">
              <Link href="/admin">
                <a className="flex items-center p-2 space-x-3 rounded-md">
                  <HomeIcon className="text-white w-6" />
                  {!open && <span className="text-gray-100">Settings</span>}
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
