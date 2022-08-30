import Image from "next/image";
import React from "react";

const WinnerSection = () => {
  return (
    <div className="bg-white p-10 border">
      <h2 className="text-center font-bold text-4xl">Winners</h2>
      <div className="flex justify-center gap-5 my-10 flex-wrap">
        <WinnerCard />
        <WinnerCard />
        <WinnerCard />
        <WinnerCard />
      </div>
    </div>
  );
};

const WinnerCard = () => {
  return (
    <div className="border p-4 w-72 rounded-md">
      <div className="flex justify-center items-center relative">
        <img
          src="/assets/story.jpg"
          className="w-32 h-32 object-cover rounded-full"
        />
        <div className="absolute top-0 right-14 bg-yellow-400 p-2 rounded-full">zxc</div>
      </div>
      <div className="p-3 mt-2">
        <p className="text-lg font-semibold">Name: Winner</p>
        <p className="text-lg font-semibold">League Name: Winner</p>
        <p className="text-lg font-semibold">Position: Winner</p>
        <p className="text-lg font-semibold">Prize: Winner</p>
      </div>
    </div>
  );
};

export default WinnerSection;
