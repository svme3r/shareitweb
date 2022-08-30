import { StarIcon, ThumbUpIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
const RenderStory = dynamic(() => import("../dashboard/Prizes/RenderStory"), {
  ssr: false,
});

const StoryDataCard = ({
  title = "Moon Knight 2",
  desc,
  thumbnail = "/assets/profile.png",
  rating,
  likes,
  href,
}) => {
  return (
    <div className="storyTabsBg text-white rounded flex justify-between items-center py-3 my-2 px-6">
      {/* Left */}
      <div className="flex items-center space-x-5 font-semibold">
        <Image
          src={thumbnail}
          width={40}
          height={40}
          objectFit="cover"
          className="rounded-full"
        />
        <div className="text-lg">{title}</div>
        <div className="flex items-center">
          {/* {`${desc}`.substr(0, 60)} */}
          <RenderStory htmlCode={desc.substr(0, 60)} />
          <Link href={href}>
            <a className="text-sky-400">...read more</a>
          </Link>
        </div>
      </div>
      {/* right */}
      <div className="flex items-center gap-5">
        {/* Ratings */}
        <div className="flex space-x-2 items-center">
          <div className="font-semibold text-xs">Ratings:</div>
          <div className="flex">
            {rating?.map((item, index) => {
              if (index < 5) {
                return <StarIcon key={index} className="w-6 text-yellow-400" />;
              }
            })}
          </div>
        </div>
        {/* Likes */}
        <div className="flex flex-col items-center space-y-0">
          <ThumbUpIcon className="w-6" />
          <small className="text-[10px]">{likes}</small>
        </div>
      </div>
    </div>
  );
};

export default StoryDataCard;
