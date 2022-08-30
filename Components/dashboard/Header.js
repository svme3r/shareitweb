import Link from "next/link";
import Sidebar from "./Sidebar";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Dropdown from "./Dropdown";
import NotificationsDropdown from "./NotificationsDropdown";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Header = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const searchQuery = () => {
    router.push(`/dashboard/search?query=${search}`);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchQuery();
  };

  return (
    // bg-[#974B9D]
    <div className="w-full bg-purple-900 rounded-br-2xl rounded-bl-2xl shadow-sm flex justify-between gap-2 md:items-center flex-col md:flex-row px-10 py-3">
      {/* Left */}
      <div className="flex md:flex-1 items-center gap-5">
        <Sidebar />
        <div>
          {/* <Image /> */}
          <img
            src="/assets/logo.png"
            width={70}
            height={50}
            className="brightness-0 hidden md:block invert-[1]"
          />
        </div>
      </div>

      {/* Center */}
      {/* Search Bar */}
      <div
        className="flex md:flex-1 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg"
        // onClick={() => router.push("/dashboard/search")}
      >
        <form className="flex" onSubmit={handleSearch}>
          <button type="submit">
            <SearchIcon className="w-5 text-gray-500 dark:text-gray-300" />
          </button>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search"
            className="flex-2 outline-none text-sm px-2 bg-white dark:bg-gray-800 "
          />
        </form>
      </div>

      {/* Right */}
      <div className="flex gap-8 md:flex-1 justify-end items-center">
        <div>
          <NotificationsDropdown />
        </div>
        <div className="text-center">
          <Link href="/dashboard/coins">
            <a>
              <Image
                src="/assets/coins.png"
                layout="responsive"
                width={100}
                height={100}
                objectFit="contain"
              />
              <p className="text-xs font-semibold text-white">2350</p>
            </a>
          </Link>
        </div>
        <div>
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default Header;
