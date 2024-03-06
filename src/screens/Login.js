import React from "react";
// import { useNavigate } from "react-router-dom";

import { AppContext } from "../context/context";

const Login = () => {
  // const navigate = useNavigate();
  const { setStore } = React.useContext(AppContext);

  return (
    <div>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button onClick={() => setStore({ isAuthenticated: true }, true)}>Login</button>
    </div>
  );
};

export default Login;
