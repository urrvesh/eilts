import React from "react";
import Avatar from "./Avatar";
import Breadcrumb from "./Breadcrumb";

const Header = ({ breadcrumb = [], setDarkMode = () => {}, darkMode, setSidebarAction = () => {} }) => {
  return (
    <div className="flex items-center justify-between h-20 w-full border-b px-6 lg:px-8 md:px-6 sm:px-4">
      <div className="block lg:hidden md:block sm:block">
        <img width={20} height={20} src={process.env.PUBLIC_URL + "/icons/menu.svg"} alt="" onClick={() => setSidebarAction(true)} />
      </div>
      {breadcrumb?.length <= 0 ? (
        <div className="font-normal text-base leading-6 hidden lg:block md:hidden sm:hidden ">Welcome back, Punit! 👋</div>
      ) : (
        <Breadcrumb data={breadcrumb} />
      )}
      {/* <button onClick={()=>setDarkMode(!darkMode)}>Dart</button> */}
      <div className="flex items-center">
        <div className="border-r relative">
          <div className="flex items-center justify-center h-12 w-12 rounded-full border mr-5 cursor-pointer">
            <img src={process.env.PUBLIC_URL + "/icons/notification-bing.svg"} alt="notification" />
            <span className="h-5 w-5 flex items-center justify-center rounded-full bg-ce1029 text-xs text-white font-medium leading-3 shadow-[-3px_3px_14px_0px_#CE102980] absolute top-0 right-3">
              3
            </span>
          </div>
        </div>
        <Avatar className="ml-5 cursor-pointer" src={process.env.PUBLIC_URL + "/icons/avatar.png"} alt="Avatar" />
      </div>
    </div>
  );
};

export default React.memo(Header);
