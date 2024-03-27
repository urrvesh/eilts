import React from "react";
import { onAuthStateChanged } from "firebase/auth";

import Utils from "../utils/utils";
import { getFirebaseAuth } from "../firebase";

export const AppContext = React.createContext();

export const defaultContextValues = {
  isLoading: false,
  darkMode: false,
  sidebarAction: false,
  breadcrumb: [],
  userdata: null,
};

export const AppProvider = ({ children }) => {
  const [store, updateStore] = React.useState(defaultContextValues);

  React.useEffect(() => {
    const cachedVariables = Utils.getCachedVariables();
    for (const key of Object.keys(cachedVariables)) {
      setStore({ [key]: cachedVariables[key] });
    }

    onAuthStateChanged(getFirebaseAuth, (userdata) => setStore({ userdata }));
  }, []);

  const setStore = (data = {}, cache = false) => {
    updateStore((prevStore) => ({ ...prevStore, ...data }));
    if (cache) {
      for (const key of Object.keys(data)) {
        const value = data?.[key];
        if (value || value === false || value === 0) {
          Utils.cacheStorage.setItem(window.btoa(key), Utils.isObject(value) ? window.btoa(JSON.stringify(value)) : window.btoa(value));
        } else {
          Utils.cacheStorage.removeItem(window.btoa(key));
        }
      }
    }
  };

  const logout = async () => {
    try {
      await getFirebaseAuth.signOut();
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    console.log(store);
  }, [store]);

  return (
    <AppContext.Provider
      value={{
        store,
        setStore,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useContext = () => React.useContext(AppContext);
