import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";

const CoinsDealCard = ({
  coins = 2000,
  arrowUp = true,
  isBuy = true,
  buttonAmmount = 1000,
  onClick,
}) => {
  return (
    <div className="bg-[#c067c7] text-white flex justify-between rounded-lg">
      {/* Left */}
      <div className="flex items-center space-x-4 px-5 cursor-pointer">
        {/* Image */}
        <div className="w-8 h-7">
          <Image src="/assets/coins.png" width="100" height="100" />
        </div>
        {/* Ammount */}
        <div className="text-2xl font-bold">
          {coins.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </div>
        {/* Arrow */}
        <div>
          {arrowUp ? (
            <ArrowUpIcon className="w-5 text-red-800" />
          ) : (
            <ArrowDownIcon className="w-5 text-green-400" />
          )}
        </div>
      </div>
      {/* Right */}
      <div
        className="bg-blue-300 text-center font-bold py-1 px-5 m-1 rounded-lg cursor-pointer hover:bg-blue-400 active:bg-blue-400 focus:bg-blue-400"
        onClick={onClick}
      >
        <h4>{isBuy ? "Buy" : "Sell"}</h4>
        <p className="text-gray-700">${buttonAmmount}</p>
      </div>
    </div>
  );
};

export default CoinsDealCard;
