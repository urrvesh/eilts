import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Body = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-full">
        <Header />
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default React.memo(Body);
