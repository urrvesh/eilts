import React from "react";

import { AppContext } from "../context/context";

const Home = () => {
  const { setStore } = React.useContext(AppContext);

  return (
    <div>
      <div>Home</div>
      <button onClick={() => setStore({ isAuthenticated: false }, true)}>Logout</button>
    </div>
  );
};

export default Home;
