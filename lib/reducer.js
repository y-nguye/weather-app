import storage from "../util/storage.js";

const init = {
  locations: storage.get(),
};

const notFound = {
  name: "City not found",
};

const actions = {
  addLocations({ locations }, city) {
    if (city) {
      locations.splice(0);
      this.getData(locations, city);
    }
  },

  async getData(locations, city) {
    const result = await actions.fetchData(city);
    city = result.name;
    locations.push({ city, result });
    storage.set(locations);
    location.reload();
  },

  async fetchData(city) {
    const apiCity = city;
    const apiKey = "e95410c59b18431329a3d5aa8f740936";
    const apiLang = "vn";
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?";
    const response = await fetch(
      `${apiURL}q=${apiCity}&APPID=${apiKey}&lang=${apiLang}&units=metric`
    );
    const data = await response.json();
    if (data.message === "city not found") return notFound;
    else return data;
  },
};

export default function reducer(state = init, action, args) {
  actions[action] && actions[action](state, ...args);
  return state;
}
