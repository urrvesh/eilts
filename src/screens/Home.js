import React from "react";
import { useContext } from "../context/context";

const Home = () => {
  const { setStore } = useContext();

  return (
    <React.Fragment>
      <div className="text-[22px] font-medium leading-8">Home</div>
      <button onClick={() => setStore({ isAuthenticated: false }, true)}>Logout</button>
    </React.Fragment>
  );
};

export default Home;
