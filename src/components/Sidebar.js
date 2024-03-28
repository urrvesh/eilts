import React from "react";
import constants from "../utils/constants";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "../context/context";

const Sidebar = ({ isAuthenticated = false }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { store, setStore } = useContext();
  const sidebarData = [
    {
      id: 1,
      label: "Home",
      icon: process.env.PUBLIC_URL + "/icons/home.svg",
      url: constants.route.home,
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

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div
      className={`w-full lg:w-fit md:w-full sm:w-full h-full bg-black bg-opacity-25 backdrop-blur-sm absolute lg:relative md:absolute sm:absolute z-[99] lg:z-0 sm:z-[99] md:z-[99] hidden lg:block md:${
        !store.sidebarAction ? "hidden" : "block"
      } sm:${!store.sidebarAction ? "hidden" : "block"}`}
    >
      <div className="w-full absolute top-0 left-0 h-full" role="presentation" onClick={() => setStore({ sidebarAction: false })} />
      <div className="flex flex-col w-[312px] min-w-[312px] h-full bg-sidebarColor justify-between relative z-999">
        <div className="">
          <div className="flex items-center h-20 gap-3 px-6 py-5 border-b">
            <div className="flex items-center justify-center h-10 w-10 bg-white rounded-[10px]">
              <img src={process.env.PUBLIC_URL + "/icons/ilts_icon.png"} alt="AdaptiveIELTS" width={31} />
            </div>
            <span className="font-medium text-custom text-white text-sm leading-6">AdaptiveIELTS</span>
          </div>
          <div className="mt-6 ltr max-h-[calc(100vh-25.6rem)] overflow-y-auto">
            {sidebarData?.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 h-[52px] mb-2.5 font-medium py-3.5 px-6 cursor-pointer hover:text-white ${
                  location.pathname.includes(item.url) ? "bg-1F2225 border-s-[3px] text-white" : "text-c5c5c5"
                }`}
                onClick={() => {
                  navigate(item?.url);
                  setStore({ sidebarAction: false });
                }}
              >
                <img width={24} src={item?.icon} alt={item?.label} />
                <span>{item?.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-[9px] justify-center mb-4">
            <img height={48} src={process.env.PUBLIC_URL + "/icons/app-store.png"} alt="app-store" />
            <img height={48} src={process.env.PUBLIC_URL + "/icons/google-play-store.png"} alt="google-play-store" />
          </div>
          <div className="py-6 border-t">
            <div
              className={`flex items-center gap-3 h-[52px] mb-2.5 font-medium py-3.5 px-6 cursor-pointer ${
                location.pathname.includes("help") ? "text-white" : "text-c5c5c5"
              }`}
              onClick={() => {
                navigate(constants.route.help);
                setStore({ sidebarAction: false });
              }}
            >
              <img width={24} src={process.env.PUBLIC_URL + "/icons/Help.svg"} alt="help" />
              <span>Help</span>
            </div>
            <div
              className={`flex items-center gap-3 h-[52px] mb-2.5 font-medium py-3.5 px-6 cursor-pointer ${
                location.pathname.includes("setting") ? "text-white" : "text-c5c5c5"
              }`}
              onClick={() => {
                navigate(constants.route.setting);
                setStore({ sidebarAction: false });
              }}
            >
              <img width={24} src={process.env.PUBLIC_URL + "/icons/Settings.svg"} alt="setting" />
              <span>Setting</span>
            </div>
            <div
              className="flex items-center gap-3 h-[52px] mb-2.5 text-c5c5c5 py-3.5 px-6 cursor-pointer"
              onClick={() => {
                navigate(constants.route.help);
                setStore({ sidebarAction: false });
              }}
            >
              <img width={24} src={process.env.PUBLIC_URL + "/icons/logout.svg"} alt="logout" />
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Sidebar);
