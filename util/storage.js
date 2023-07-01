const CITY_STORAGE_KEY = "CITY_STORAGE";

export default {
  set(city) {
    localStorage.setItem(CITY_STORAGE_KEY, JSON.stringify(city));
  },
  get() {
    return JSON.parse(localStorage.getItem(CITY_STORAGE_KEY)) || [];
  },
};
