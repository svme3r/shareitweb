import { ShieldCheckIcon } from "@heroicons/react/solid";
import Image from "next/image";

const WinnerCard = ({
  title = "Title",
  priceAmount = 270,
  status = "Active",
  thumbnail = "/assets/profile.png",
  onClick
}) => {
  return (
    <div onClick={onClick} className="flex p-5 w-72 justify-between border-[1px] border-gray-100 shadow-md rounded-md space-x-10 cursor-pointer hover:bg-gray-100 transition duration-200">
      {/* Left */}
      <div>
        <h3 className="font-bold text-lg text-gray-800">{title}</h3>
        <p className="text-gray-500 font-semibold flex gap-2 leading-9">
          <ShieldCheckIcon className="w-5" />
          Top Prize: ${priceAmount}
        </p>
      </div>
      {/* Right */}
      <div>
        <div className="rounded-full overflow-hidden">
          <Image
            src={thumbnail}
            height="100"
            width="100"
            objectFit="contain"
            layout="responsive"
          />
        </div>
        <p className="text-sm text-gray-600 font-semibold">{status}</p>
      </div>
    </div>
  );
};

export default WinnerCard;
