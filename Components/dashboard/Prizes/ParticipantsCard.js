import { ShieldCheckIcon } from "@heroicons/react/solid";
import Image from "next/image";

const WinnerCard = ({
  title = "Title",
  thumbnail = "/assets/profile.png",
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="flex p-5 w-72 justify-between border-[1px] border-gray-100 dark:border-gray-700 shadow-md rounded-md space-x-10 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200"
    >
      {/* Left */}
      <div>
        <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100">{title}</h3>
        <p className="text-gray-500 font-semibold flex gap-2 leading-9">
          15 Nov 2022
        </p>
      </div>
      {/* Right */}
      <div className="rounded-full overflow-hidden w-10 h-10">
        <Image
          src={thumbnail}
          height="100"
          width="100"
          objectFit="contain"
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default WinnerCard;
