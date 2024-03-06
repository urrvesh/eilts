import React from "react";

import Utils from "../utils/utils";

export const AppContext = React.createContext();

export const defaultContextValues = {
  isAuthenticated: false,
  isLoading: false,
  userdata: {},
};

export const AppProvider = ({ children }) => {
  const [store, updateStore] = React.useState(defaultContextValues);

  React.useEffect(() => {
    const cachedVariables = Utils.getCachedVariables();
    for (const key of Object.keys(cachedVariables)) {
      setStore({ [key]: cachedVariables[key] });
    }
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

  React.useEffect(() => {
    console.log(store);
  }, [store]);

  return (
    <AppContext.Provider
      value={{
        store,
        setStore,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
