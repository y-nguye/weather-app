import html from "../lib/core.js";
import { connect } from "../lib/store.js";

function App({ location }) {
  console.log(location.map((x) => x.result));
  return html`
    <div id="search">
      <input
        id="inputSearch"
        type="text"
        placeholder="Enter city name"
        spellcheck="false"
        onkeyup="event.key === 'Enter' && dispatch('addLocation', this.value)"
      />
      <button
        onclick="dispatch('addLocation', document.getElementById('inputSearch').value)"
      >
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
    <div class="weather">
      <img
        class="weather-icon"
        src="./icons/${location
          .map((x) => x.result.weather.map((y) => y.icon))
          .join(" ")
          .slice(0, -1)}.png"
      />
      <div class="info">
        <h2 class="city">${location.map((x) => x.result.name).join(" ")}</h2>
        <h1 class="temp">
          ${location.map((x) => Math.round(x.result.main.temp))}°C
        </h1>
        <h3 class="description">
          ${location
            .map((x) => x.result.weather.map((y) => y.description))
            .join(" ")}
        </h3>
        <div class="details">
          <div class="col">
            <img src="icons/humidity.png" />
            <p class="humdity">
              ${location.map((x) => x.result.main.humidity)}%
            </p>
            <p>Humidity</p>
          </div>
          <div class="col">
            <img src="icons/wind.png" />
            <p class="wind">${location.map((x) => x.result.wind.speed)}m/s</p>
            <p>Wind</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

export default connect()(App);
