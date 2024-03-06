import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import constants from "../utils/constants";
import Utils from "../utils/utils";
import Loader from "../components/Loader";

const Login = React.lazy(() => import("../screens/Login"));
const Home = React.lazy(() => import("../screens/Home"));

const AuthRoute = ({ children, isProtected }) => {
  const isAuthenticated = Utils.getCachedVariables("isAuthenticated");
  if (isProtected && !isAuthenticated) {
    return <Navigate replace to={constants.route.login} />;
  } else if (!isProtected && isAuthenticated) {
    return <Navigate replace to={constants.route.root} />;
  } else {
    return <React.Suspense fallback={<Loader />}>{children}</React.Suspense>;
  }
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={constants.route.login} element={<AuthRoute isProtected={false} children={<Login />} />} />
        <Route path={constants.route.root} element={<AuthRoute isProtected={true} children={<Home />} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
