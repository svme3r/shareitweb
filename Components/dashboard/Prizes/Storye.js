import StoryHeader from "../StoryHeader";
import Wrapper from "../Wrapper";
import {
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  ExclamationCircleIcon,
  EyeIcon,
  QuestionMarkCircleIcon,
  StarIcon,
  ThumbUpIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import Header from "../Header";
import Footer from "../../layout/Footer";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import dynamic from "next/dynamic";
const RenderStory = dynamic(() => import("./RenderStory"), {
  ssr: false,
});

const Storye = ({ query, onReadClick, onPostClick }) => {
  console.log("🚀 ~ file: Storye.js ~ line 19 ~ Storye ~ query", query);
  return (
    <>
      <Header />
      <Wrapper>
        {/* Story Top */}
        <StoryHeader />

        {/* Story Header */}
        <div className="flex items-center py-4">
          {/* Left */}
          <div className="flex items-center space-x-3">
            <div className="w-14 h-14 rounded-full overflow-hidden">
              {query.Thumbnail && (
                <Image
                  src={query.Thumbnail}
                  layout="responsive"
                  width={100}
                  height={100}
                />
              )}
            </div>
            <div className="flex flex-col space-y-0">
              <h1 className="text-lg font-bold">{query.Title}</h1>
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 my-3">
                {/* {query.Leagues} */}
              </h4>
            </div>
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
            <p className="my-2 text-gray-600 dark:text-gray-100">
              {query.Stroy && <RenderStory htmlCode={query.Stroy} />}
            </p>
          </div>
        </main>

        {/* Divider */}
        <div className="mb-2">
          <hr />
        </div>

        {/* Actions */}
        <div className="flex gap-10 pb-5">
          <div
            className="text-center w-fit flex flex-col items-center p-2 cursor-pointer"
            onClick={onPostClick}
          >
            <p className="font-bold leading-loose text-lg text-gray-600 dark:text-gray-100">
              {query?.Comments?.length - 1}
            </p>
            <p className="font-semibold leading-loose text-sm text-gray-600 dark:text-gray-100">
              Comments
            </p>
            <DotsCircleHorizontalIcon className="w-8 text-gray-800 dark:text-gray-200" />
          </div>
          <div
            className="text-center w-fit flex flex-col items-center p-2 cursor-pointer"
            onClick={onPostClick}
          >
            <p className="font-bold leading-loose text-lg text-gray-600 dark:text-gray-100">
              {query?.Rating?.length - 1}
            </p>
            <p className="font-semibold leading-loose text-sm text-gray-600 dark:text-gray-100">
              Rating
            </p>
            <StarIcon className="w-8 text-gray-800 dark:text-gray-200" />
          </div>
          <div
            className="text-center w-fit flex flex-col items-center p-2 cursor-pointer"
            onClick={onPostClick}
          >
            <p className="font-bold leading-loose text-lg text-gray-600 dark:text-gray-100">
              50
            </p>
            <p className="font-semibold leading-loose text-sm text-gray-600 dark:text-gray-100">
              Views
            </p>
            <EyeIcon className="w-8 text-gray-800 dark:text-gray-200" />
          </div>
          <div
            className="text-center w-fit flex flex-col items-center p-2 cursor-pointer"
            onClick={onPostClick}
          >
            <p className="font-bold leading-loose text-lg text-gray-600 dark:text-gray-100">
              {query?.Liked}
            </p>
            <p className="font-semibold leading-loose text-sm text-gray-600 dark:text-gray-100">
              Likes
            </p>
            <ThumbUpIcon className="w-8 text-gray-800 dark:text-gray-200" />
          </div>
          <div
            className="text-center w-fit flex flex-col items-center p-2 cursor-pointer"
            onClick={onPostClick}
          >
            <p className="font-bold leading-loose text-lg text-gray-600 dark:text-gray-100">
              {query?.Report}
            </p>
            <p className="font-semibold leading-loose text-sm text-gray-600 dark:text-gray-100">
              Report
            </p>
            <Popup
              trigger={
                <ExclamationCircleIcon className="w-8 text-gray-800 dark:text-gray-200" />
              }
              modal
              nested
            >
              {(close) => (
                <div className="modal p-5">
                  <div className="header my-4 text-2xl font-bold">
                    Report Video
                  </div>
                  <div className="content">
                    <ul className="space-y-3">
                      <li className="flex space-x-5">
                        <label className="font-semibold cursor-pointer">
                          <input type="radio" name="report" /> Sexual Content
                        </label>
                        <Popup
                          trigger={
                            <QuestionMarkCircleIcon className="w-4 cursor-pointer" />
                          }
                          position="right center"
                        >
                          <div>Help content here !!</div>
                        </Popup>
                      </li>
                      <li className="flex space-x-5">
                        <label className="font-semibold cursor-pointer">
                          <input type="radio" name="report" /> Violent or
                          repulsive content
                        </label>
                        <Popup
                          trigger={
                            <QuestionMarkCircleIcon className="w-4 cursor-pointer" />
                          }
                          position="right center"
                        >
                          <div>Help content here !!</div>
                        </Popup>
                      </li>
                      <li className="flex space-x-5">
                        <label className="font-semibold cursor-pointer">
                          <input type="radio" name="report" /> Hateful or
                          Abusive content
                        </label>
                        <Popup
                          trigger={
                            <QuestionMarkCircleIcon className="w-4 cursor-pointer" />
                          }
                          position="right center"
                        >
                          <div>Help content here !!</div>
                        </Popup>
                      </li>
                      <li className="flex space-x-5">
                        <label className="font-semibold cursor-pointer">
                          <input type="radio" name="report" /> Harassment or
                          bullying
                        </label>
                        <Popup
                          trigger={
                            <QuestionMarkCircleIcon className="w-4 cursor-pointer" />
                          }
                          position="right center"
                        >
                          <div>Help content here !!</div>
                        </Popup>
                      </li>
                      <li className="flex space-x-5">
                        <label className="font-semibold cursor-pointer">
                          <input type="radio" name="report" /> Harmful or
                          dangerous acts
                        </label>
                        <Popup
                          trigger={
                            <QuestionMarkCircleIcon className="w-4 cursor-pointer" />
                          }
                          position="right center"
                        >
                          <div>Help content here !!</div>
                        </Popup>
                      </li>
                      <li className="flex space-x-5">
                        <label className="font-semibold cursor-pointer">
                          <input type="radio" name="report" /> Child abuse
                        </label>
                        <Popup
                          trigger={
                            <QuestionMarkCircleIcon className="w-4 cursor-pointer" />
                          }
                          position="right center"
                        >
                          <div>Help content here !!</div>
                        </Popup>
                      </li>
                      <li className="flex space-x-5">
                        <label className="font-semibold cursor-pointer">
                          <input type="radio" name="report" /> Promotes
                          terrorism
                        </label>
                        <Popup
                          trigger={
                            <QuestionMarkCircleIcon className="w-4 cursor-pointer" />
                          }
                          position="right center"
                        >
                          <div>Help content here !!</div>
                        </Popup>
                      </li>
                      <li className="flex space-x-5">
                        <label className="font-semibold cursor-pointer">
                          <input type="radio" name="report" /> Spam or
                          misleading
                        </label>
                        <Popup
                          trigger={
                            <QuestionMarkCircleIcon className="w-4 cursor-pointer" />
                          }
                          position="right center"
                        >
                          <div>Help content here !!</div>
                        </Popup>
                      </li>
                      <li className="flex space-x-5">
                        <label className="font-semibold cursor-pointer">
                          <input type="radio" name="report" /> Infringes my
                          rights
                        </label>
                        <Popup
                          trigger={
                            <QuestionMarkCircleIcon className="w-4 cursor-pointer" />
                          }
                          position="right center"
                        >
                          <div>Help content here !!</div>
                        </Popup>
                      </li>
                      <li className="flex space-x-5">
                        <label className="font-semibold cursor-pointer">
                          <input type="radio" name="report" /> Caption issue
                        </label>
                        <Popup
                          trigger={
                            <QuestionMarkCircleIcon className="w-4 cursor-pointer" />
                          }
                          position="right center"
                        >
                          <div>Help content here !!</div>
                        </Popup>
                      </li>
                    </ul>
                  </div>
                  <div className="actions space-x-1 flex justify-end">
                    <button
                      className="py-1 px-10 font-semibold hover:bg-purple-900 hover:shadow-2xl hover:text-white text-purple-900 rounded transition duration-300 ease-in-out "
                      onClick={() => {
                        close();
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      className="py-1 px-10 bg-purple-700 font-bold hover:bg-purple-900 hover:shadow-2xl text-white rounded transition duration-300 shadow-lg ease-in-out "
                      onClick={() => {
                        close();
                      }}
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Storye;
