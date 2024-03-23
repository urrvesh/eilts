import React from "react";
import { useContext } from "../context/context";

const Home = () => {
  const { logout } = useContext();

  return (
    <React.Fragment>
      <div className="text-[22px] font-medium leading-8">Home</div>
      <button onClick={() => logout()}>Logout</button>
    </React.Fragment>
  );
};

export default React.memo(Home);
