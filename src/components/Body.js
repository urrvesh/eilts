import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useContext } from "../context/context";

const Body = ({ breadcrumb = [], children, className }) => {
  const [darkMode, setDarkMode] = React.useState(false);
  const [sidebarAction, setSidebarAction] = React.useState(false);
  const { screenSize } = useContext();

  return (
    <div className={`flex h-screen ${darkMode && "dark"}`}>
      <Sidebar sidebarAction={sidebarAction} setSidebarAction={setSidebarAction} screenSize={screenSize} />
      <div className="w-full dark:bg-black">
        <Header breadcrumb={breadcrumb} setDarkMode={setDarkMode} darkMode={darkMode} setSidebarAction={setSidebarAction} />
        <div className={`max-h-[calc(100vh-5rem)] p-4 lg:p-8 md:p-6 sm:p-4 overflow-x-hidden overflow-y-auto ${className}`}>{children}</div>
      </div>
    </div>
  );
};

export default React.memo(Body);
