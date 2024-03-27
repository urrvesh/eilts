import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";

import constants from "../utils/constants";
import Loader from "../components/Loader";
import { useContext } from "../context/context";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Login = React.lazy(() => import("../screens/Login"));
const Home = React.lazy(() => import("../screens/Home"));
const Vocabulary = React.lazy(() => import("../screens/Vocabulary"));
const VocabularyDetails = React.lazy(() => import("../screens/VocabularyDetails"));
const Collocation = React.lazy(() => import("../screens/Collocation"));
const Grammar = React.lazy(() => import("../screens/Grammar"));
const Writing = React.lazy(() => import("../screens/Writing"));
const Reading = React.lazy(() => import("../screens/Reading"));
const Help = React.lazy(() => import("../screens/Help"));
const Setting = React.lazy(() => import("../screens/Setting"));

const AuthRoute = ({ isProtected = true, children }) => {
  const navigate = useNavigate();
  const { store } = useContext();
  const isAuthenticated = !!store?.userdata;

  React.useEffect(() => {
    if (isProtected && !isAuthenticated) {
      navigate(constants.route.login);
    } else if (!isProtected && isAuthenticated) {
      navigate(constants.route.root);
    }
  }, [isProtected, isAuthenticated, navigate]);

  return <React.Suspense fallback={<Loader />}>{children}</React.Suspense>;
};

const App = () => {
  const { store } = useContext();
  const isAuthenticated = !!store?.userdata;

  return (
    <BrowserRouter>
      <div className={`flex h-screen ${store?.darkMode && "dark"}`}>
        <Sidebar isAuthenticated={isAuthenticated} />
        <div className="w-full dark:bg-black">
          <Header isAuthenticated={isAuthenticated} />
          <div className={"max-h-[calc(100vh-5rem)] p-4 lg:p-8 md:p-6 sm:p-4 overflow-x-hidden overflow-y-auto"}>
            <Routes>
              <Route path={constants.route.root} element={<Navigate to={constants.route.home} />} />
              <Route path={constants.route.login} element={<AuthRoute isProtected={false} children={<Login />} />} />
              <Route path={constants.route.home} element={<AuthRoute children={<Home />} />} />
              <Route path={constants.route.vocabulary} element={<AuthRoute children={<Vocabulary />} />} />
              <Route path={constants.route.vocabulary + "/:id"} element={<AuthRoute children={<VocabularyDetails />} />} />
              <Route path={constants.route.collocation} element={<AuthRoute children={<Collocation />} />} />
              <Route path={constants.route.grammar} element={<AuthRoute children={<Grammar />} />} />
              <Route path={constants.route.writing} element={<AuthRoute children={<Writing />} />} />
              <Route path={constants.route.reading} element={<AuthRoute children={<Reading />} />} />
              <Route path={constants.route.help} element={<AuthRoute children={<Help />} />} />
              <Route path={constants.route.setting} element={<AuthRoute children={<Setting />} />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
