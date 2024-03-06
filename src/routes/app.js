import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import constants from "../utils/constants";
import Utils from "../utils/utils";
import Loader from "../components/Loader";

const Login = React.lazy(() => import("../screens/Login"));
const Home = React.lazy(() => import("../screens/Home"));
const Vocabulary = React.lazy(() => import("../screens/Vocabulary"));
const Collocation = React.lazy(() => import("../screens/Collocation"));
const Grammar = React.lazy(() => import("../screens/Grammar"));
const Writing = React.lazy(() => import("../screens/Writing"));
const Reading = React.lazy(() => import("../screens/Reading"));
const Help = React.lazy(() => import("../screens/Help"));
const Setting = React.lazy(() => import("../screens/Setting"));

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
        <Route path={constants.route.root} element={<Navigate to={constants.route.home} />} />
        <Route path={constants.route.login} element={<AuthRoute isProtected={false} children={<Login />} />} />
        <Route path={constants.route.home} element={<AuthRoute isProtected={true} children={<Home />} />} />
        <Route path={constants.route.vocabulary} element={<AuthRoute isProtected={true} children={<Vocabulary />} />} />
        <Route path={constants.route.collocation} element={<AuthRoute isProtected={true} children={<Collocation />} />} />
        <Route path={constants.route.grammar} element={<AuthRoute isProtected={true} children={<Grammar />} />} />
        <Route path={constants.route.writing} element={<AuthRoute isProtected={true} children={<Writing />} />} />
        <Route path={constants.route.reading} element={<AuthRoute isProtected={true} children={<Reading />} />} />
        <Route path={constants.route.help} element={<AuthRoute isProtected={true} children={<Help />} />} />
        <Route path={constants.route.setting} element={<AuthRoute isProtected={true} children={<Setting />} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
