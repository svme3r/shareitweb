import { ChevronLeftIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const StoryHeader = () => {
  const router = useRouter();
  return (
    <header className="flex items-center justify-between py-4">
      {/* Left */}
      <div onClick={() => router.back()}>
        <ChevronLeftIcon className="w-9 active:bg-gray-100 hover:bg-gray-100 bg-gray-50 dark:bg-gray-600 transition duration-300 p-2 rounded-full cursor-pointer" />
      </div>
      {/* Right */}
      {/* <div>
        <div className="w-8 h-8 text-center">
          <Link href="/dashboard/coins">
            <a>
              <Image
                src="/assets/coins.png"
                layout="responsive"
                width={100}
                height={100}
                objectFit="contain"
              />
              <p className="text-xs font-semibold">2350</p>
            </a>
          </Link>
        </div>
      </div> */}
    </header>
  );
};

export default StoryHeader;
