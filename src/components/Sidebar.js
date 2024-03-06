import React from "react";
import constants from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const sidebarData = [
    {
      id: 1,
      label: "Home",
      icon: process.env.PUBLIC_URL + "/icons/home.svg",
      url: constants.route.root,
    },
    {
      id: 2,
      label: "Vocabulary",
      icon: process.env.PUBLIC_URL + "/icons/vocabulary.svg",
      url: constants.route.vocabulary,
    },
    {
      id: 3,
      label: "Collocation",
      icon: process.env.PUBLIC_URL + "/icons/collocation.svg",
      url: constants.route.collocation,
    },
    {
      id: 4,
      label: "Grammar",
      icon: process.env.PUBLIC_URL + "/icons/grammar.svg",
      url: constants.route.grammar,
    },
    {
      id: 5,
      label: "Writing",
      icon: process.env.PUBLIC_URL + "/icons/Writing.svg",
      url: constants.route.writing,
    },
    {
      id: 6,
      label: "Reading",
      icon: process.env.PUBLIC_URL + "/icons/reading.svg",
      url: constants.route.reading,
    },
  ];

  return (
    <div className="flex flex-col min-w-[312px] bg-sidebarColor justify-between">
      <div className="">
        <div className="flex items-center h-20 gap-3 px-6 py-5">
          <div className="flex items-center justify-center h-10 w-10 bg-white rounded-[10px]">
            <img
              src={process.env.PUBLIC_URL + "/icons/ilts_icon.png"}
              alt="AdaptiveIELTS"
              width={31}
            />
          </div>
          <span className="font-medium text-custom text-white text-sm leading-6">
            AdaptiveIELTS
          </span>
        </div>
        <div className="mt-6 ltr  max-h-[calc(100vh-26.4rem)] overflow-y-auto">
          {sidebarData?.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 h-[52px] mb-2.5 text-c5c5c5 font-medium py-3.5 px-6 cursor-pointer"
              onClick={() => navigate(item?.url)}
            >
              <img
                width={24}
                src={item?.icon}
                alt={item?.label}
                className="text-black"
              />
              <span>{item?.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <div className="flex items-center gap-[9px] justify-center mb-4">
          <img
            height={48}
            src={process.env.PUBLIC_URL + "/icons/app-store.png"}
            alt="app-store"
          />
          <img
            height={48}
            src={process.env.PUBLIC_URL + "/icons/google-play-store.png"}
            alt="google-play-store"
          />
        </div>
        <div className="py-6 border-t">
          <div
            className="flex items-center gap-3 h-[52px] mb-2.5 text-c5c5c5 py-3.5 px-6 cursor-pointer"
            onClick={() => navigate(constants.route.help)}
          >
            <img
              width={24}
              src={process.env.PUBLIC_URL + "/icons/Help.svg"}
              alt="help"
            />
            <span>Help</span>
          </div>
          <div
            className="flex items-center gap-3 h-[52px] mb-2.5 text-c5c5c5 py-3.5 px-6 cursor-pointer"
            onClick={() => navigate(constants.route.help)}
          >
            <img
              width={24}
              src={process.env.PUBLIC_URL + "/icons/Settings.svg"}
              alt="setting"
            />
            <span>Setting</span>
          </div>
          <div
            className="flex items-center gap-3 h-[52px] mb-2.5 text-c5c5c5 py-3.5 px-6 cursor-pointer"
            onClick={() => navigate(constants.route.help)}
          >
            <img
              width={24}
              src={process.env.PUBLIC_URL + "/icons/logout.svg"}
              alt="logout"
            />
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
