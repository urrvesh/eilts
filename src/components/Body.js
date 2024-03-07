import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Body = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-full">
        <Header />
        <div className="max-h-[calc(100vh-5rem)] p-8 overflow-x-hidden overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default React.memo(Body);
