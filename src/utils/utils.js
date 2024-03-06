export default class Utils {
  static cacheStorage = window.localStorage;

  static isObject(obj) {
    if (!obj) {
      return false;
    }
    return typeof obj === "function" || typeof obj === "object";
  }

  static isJSONString(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  static getCachedVariables(key) {
    try {
      const cachedVariables = {};
      for (const item of Object.keys(this.cacheStorage)) {
        const itemValue = this.cacheStorage.getItem(item);
        if (/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/.test(item)) {
          cachedVariables[window.atob(item)] = this.isJSONString(window.atob(itemValue))
            ? JSON.parse(window.atob(itemValue))
            : window.atob(itemValue);
        } else {
          cachedVariables[item] = this.isJSONString(itemValue) ? JSON.parse(itemValue) : itemValue;
        }
      }
      if (key) {
        return cachedVariables?.[key];
      }
      return cachedVariables;
    } catch {
      this.cacheStorage.clear();
      return {};
    }
  }
}
