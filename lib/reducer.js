import storage from "../util/storage.js";

const init = {
  location: storage.get(),
};

const actions = {
  addLocation({ location }, city) {
    if (city) {
      location.splice(0);
      this.getData(location, city);
    }
  },

  async getData(location, city) {
    const result = await actions.fetchData(city);
    location.push({ result });
    storage.set(location);
    document.getElementById("city").innerHTML = result.name;
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
    console.log(data);
    return data;
  },
};

export default function reducer(state = init, action, args) {
  actions[action] && actions[action](state, ...args);
  return state;
}
