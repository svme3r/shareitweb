import { useState } from "react";
import "react-tabs/style/react-tabs.css";
import StoryDataCard from "./StoryDataCard";

const StoryTable = ({ leagues, stories }) => {
  console.log(
    "🚀 ~ file: StoryTable.js ~ line 6 ~ StoryTable ~ stories",
    stories
  );
  const [activeTab, setActiveTab] = useState(leagues[0]._id);
  // const [activeTab, setActiveTab] = useState([]);

  return (
    <div className="Tabs">
      <ul className="flex space-x-2">
        {leagues?.map((item, index) => {
          if (index <= 10) {
            return (
              <TabNavItem
                key={index}
                title={item.Title}
                id={item._id}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            );
          }
        })}
      </ul>

      <div>
        {stories
          ?.filter((item) => {
            return item.LeagueId === activeTab;
          })
          .map((item, index) => {
            return (
              <StoryDataCard
                key={index}
                rating={item.Rating}
                likes={item.Liked}
                title={item.Title}
                desc={item.Stroy}
                thumbnail={item.Thumbnail}
                href={`/dashboard/league/participants/${item._id}`}
              />
            );
          })}
      </div>
    </div>
  );
};

export const TabContent = ({ id, activeTab, children }) => {
  return activeTab === id ? <div>{children}</div> : null;
};

export const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <li
      onClick={handleClick}
      className={`text-white cursor-pointer rounded-lg font-semibold px-4 py-2 ${
        activeTab === id ? " bg-gray-800 " : "bg-gray-500"
      }`}
    >
      {title}
    </li>
  );
};

export default StoryTable;
