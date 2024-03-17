import React from "react";

import { useContext } from "../context/context";

const Login = () => {
  const { setStore } = useContext();

  return (
    <div>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button onClick={() => setStore({ isAuthenticated: true }, true)}>Login</button>
    </div>
  );
};

export default Login;
