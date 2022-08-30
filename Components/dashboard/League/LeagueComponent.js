import StoryHeader from "../StoryHeader";
import Wrapper from "../Wrapper";
import { BookmarkIcon } from "@heroicons/react/outline";
import { BookOpenIcon, PencilAltIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { useRouter } from "next/router";

const LeagueComponent = ({ query }) => {
console.log("🚀 ~ file: LeagueComponent.js ~ line 9 ~ LeagueComponent ~ query", query)
  const router = useRouter();
  const [bookmark, setBookmark] = useState(false);

  const onPostClick = () => {
    router.push(`/dashboard/league/add?id=${query._id}`);
  };
  
  const onReadClick = () => {
    router.push(`/dashboard/league/participants?id=${query._id}`);
    // router.push(
    //   {
    //     pathname: `/dashboard/league/participants?id=${query._id}`,
    //     query: query,
    //   },
    //   "/dashboard/league/participants"
    // );
  };

  let startDate = new Date(query.StartDate);
  let endDate = new Date(query.Deadline);

  return (
    <Wrapper>
      {/* Story Top */}
      <StoryHeader />

      {/* Story Header */}
      <div className="flex justify-between items-center  py-4">
        {/* Left */}
        <div>
          <h1 className="text-5xl font-bold">{query.Title}</h1>
          <h4 className="text-2xl font-semibold text-gray-500 dark:text-gray-400 my-3">
            {query.Leagues}
          </h4>
        </div>
        {/* Right */}
        <div
          onClick={() => setBookmark((e) => !e)}
          className={`p-3 rounded-full cursor-pointer transition duration-150 ${
            bookmark ? "bg-purple-800 text-white" : "bg-gray-200"
          }`}
        >
          <BookmarkIcon
            className={`w-6 ${
              bookmark ? "dark:text-gray-100" : "dark:text-gray-800"
            }`}
          />
        </div>
      </div>

      {/* Divider */}
      <div>
        <hr />
      </div>

      {/* Content */}
      <main className="my-4 ">
        <div>
          <h4 className="text-2xl font-bold text-gray-800 dark:text-white">
            About Story
          </h4>
          <p className="my-2 text-gray-600 dark:text-gray-200">
            {query.Description}
          </p>
        </div>
        <div className="my-7">
          <h4 className="text-2xl font-bold text-gray-800 dark:text-white">
            Rules and Regulations
          </h4>
          <p className="my-2 text-gray-600 dark:text-gray-200">
            {query.RulesandRegulation}
          </p>
        </div>
        <div className="my-7">
          <h4 className="text-2xl font-bold text-gray-800 dark:text-white">
            Deadlines
          </h4>
          <p className="my-2 text-gray-600 dark:text-gray-200">
            ZenVentzi I can&apos;t find a feature like that.
          </p>
          <p className="text-gray-500 dark:text-gray-300">
            <strong className="text-gray-700 dark:text-gray-100">
              Start Date:{" "}
            </strong>
            {startDate.toLocaleDateString()}
          </p>
          <p className="text-gray-500 dark:text-gray-300">
            <strong className="text-gray-700 dark:text-gray-100">
              End Date:{" "}
            </strong>
            {endDate.toLocaleDateString()}
          </p>
        </div>
      </main>

      {/* Divider */}
      <div className="mb-2">
        <hr />
      </div>

      {/* Actions */}
      <div className="flex gap-10">
        <div
          className="text-center w-fit flex flex-col items-center p-2 cursor-pointer"
          onClick={onReadClick}
        >
          <p className="font-semibold leading-loose">Read</p>
          <BookOpenIcon className="w-10 text-purple-600" />
        </div>
        <div
          className="text-center w-fit flex flex-col items-center p-2 cursor-pointer"
          onClick={onPostClick}
        >
          <p className="font-semibold leading-loose">Post Story</p>
          <PencilAltIcon className="w-10 text-purple-600" />
        </div>
      </div>
    </Wrapper>
  );
};

export default LeagueComponent;
