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
    <div class="weather-container">
      <h1 class="city">${location.map((x) => x.result.name).join(" ")}</h1>
      <h3 class="description">
        ${location
          .map((x) => x.result.weather.map((y) => y.description))
          .join(" ")}
      </h3>
      <div class="weather">
        <h1 class="temp">
          ${location.map((x) => Math.round(x.result.main.temp))}
          <span class="unit-c">°</span>
        </h1>
        <img
          class="weather-icon"
          src="./icons/${location
            .map((x) => x.result.weather.map((y) => y.icon))
            .join(" ")
            .slice(0, -1)}.png"
        />
      </div>
      <div class="details">
        <div class="col">
          <div class="details_container">
            <h4 class="title">
              <i class="fa-solid fa-water"></i>
              Humidity
            </h4>
            <div class="info">
              <p class="humidity">
                ${location.map((x) => x.result.main.humidity)}%
              </p>
              <p class="message">The dew point right now</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="details_container">
            <h4 class="title">
              <i class="fa-solid fa-wind"></i>
              Wind
            </h4>

            <div class="info">
              <p class="wind">
                ${location.map((x) => x.result.wind.speed)} m/s
              </p>
              <p class="message">Current wind speed</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="details_container">
            <h4 class="title">
              <i class="fa-solid fa-cloud"></i>
              Cloudiness
            </h4>
            <div class="info">
              <p class="cloud">${location.map((x) => x.result.clouds.all)}%</p>
              <p class="message">Cloud cover in the sky</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="details_container">
            <h4 class="title">
              <i class="fa-solid fa-eye"></i>
              Visibility
            </h4>
            <div class="info">
              <p class="visibility">
                ${location.map((x) => x.result.visibility) * 0.001} km
              </p>
              <p class="message">It's perfectly clear right now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export default connect()(App);
