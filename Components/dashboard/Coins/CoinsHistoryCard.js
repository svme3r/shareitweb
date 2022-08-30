import {
  ArrowCircleDownIcon,
  ArrowCircleUpIcon
} from "@heroicons/react/solid";

const CoinsHistoryCard = ({
  coins = 2000,
  arrowUp = true,
  actionText = "Buy",
  ammount = 1000,
  date = "29 Jun 2022"
}) => {
  return (
    <div className="bg-[#c067c7] text-white flex justify-between rounded-lg px-5 py-2">
      {/* Left */}
      <div className="flex flex-col">
        {/* Top */}
        <div className="flex items-center gap-5">
          <h3 className="text-2xl font-bold">{actionText} Coins</h3>
          {arrowUp ? <ArrowCircleUpIcon className="w-7 text-red-800" />:<ArrowCircleDownIcon className="w-7 text-green-400" /> }
        </div>
        {/* Bottom */}
        <div className="font-semibold text-md">
          {coins.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </div>
      </div>
      {/* Right */}
      <div className="flex flex-col text-right">
        {/* Top */}
        <div>
          <h4 className="text-lg text-gray-800 font-semibold">29 Jun 2022</h4>
        </div>
        {/* Bottom */}
        <div>
          <h4 className="text-lg font-semibold">${ammount}</h4>
        </div>
      </div>
    </div>
  );
};

export default CoinsHistoryCard;
