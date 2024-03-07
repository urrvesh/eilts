import React from "react";

import { AppContext } from "../context/context";
import Body from "../components/Body";

const Home = () => {
  const { setStore } = React.useContext(AppContext);

  return (
    <Body>
      <div className="text-[22px] font-medium leading-8">Home</div>
      <button onClick={() => setStore({ isAuthenticated: false }, true)}>Logout</button>
    </Body>
  );
};

export default Home;
