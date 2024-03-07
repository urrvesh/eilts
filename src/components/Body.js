import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Body = ({ breadcrumb = [], children, className }) => {
  const [darkMode, setDarkMode] = React.useState(false)
  return (
    <div className={`flex h-screen ${darkMode && "dark"}`}>
      <Sidebar />
      <div className="w-full dark:bg-black">
        <Header breadcrumb={breadcrumb} setDarkMode={setDarkMode} darkMode={darkMode}/>
        <div
          className={`max-h-[calc(100vh-5rem)] p-8 overflow-x-hidden overflow-y-auto ${className}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Body);
