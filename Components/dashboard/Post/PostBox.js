import { PencilAltIcon } from "@heroicons/react/outline";
import profile from "/public/assets/profile.png";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const PostEditor = dynamic(() => import("./PostEditor.js"), { ssr: false });

const PostBox = ({onChange}) => {
  return (
    <div className="shadow-md border-gray-200 border-[1px] rounded-3xl p-5">
      {/* PostBox Header */}
      <header className="flex justify-between items-center px-5">
        {/* Left */}
        <div className="flex items-center space-x-3">
          <div className="w-11 h-11 rounded-full overflow-hidden">
            <Image src={profile} />
          </div>
          <div>
            <h4 className="font-bold text-xl">Jenifer</h4>
            <p className="text-gray-600 text-sm">13 Nov 2022</p>
          </div>
        </div>
        {/* Right */}
        <div>
          <Link href="/">
            <a>
              <PencilAltIcon className="w-7 text-blue-400" />
            </a>
          </Link>
        </div>
      </header>

      <div className="my-5">
        {/* TextEditor */}
        <PostEditor value={""} onChange={(data) => onChange(data)} />
      </div>
    </div>
  );
};

export default PostBox;
