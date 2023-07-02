import html from "../lib/core.js";
import { connect } from "../lib/store.js";

function App({ locations }) {
  console.log();
  return html`
    <div id="search">
      <input
        id="inputSearch"
        type="text"
        placeholder="Enter city name"
        spellcheck="false"
        onkeyup="event.key === 'Enter' && dispatch('addLocations', this.value)"
      />
      <button
        onclick="dispatch('addLocations', document.getElementById('inputSearch').value)"
      >
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
    <div class="weather-container">
      <h1 class="city">${locations.map((x) => x.result.name).join("")}</h1>
      <h3 class="description">
        ${locations
          .map((x) => x.result.weather?.map((y) => y.description))
          .join(" ")}
      </h3>
      <div class="weather">
        <h1 class="temp">
          ${locations.map((x) => Math.round(x.result.main?.temp))}
          <span class="unit-c"
            >${locations.map((x) => x.result.main?.temp).join("") && "°"}</span
          >
        </h1>
        <img
          class="weather-icon"
          src="./icons/${locations
            .map((x) => x.result.weather?.map((y) => y.icon))
            .join(" ")
            .slice(0, -1) || "R"}.png"
        />
      </div>
      <div
        class="details ${locations.map((x) => x.city).join("") ===
          "City not found" && "hidden"}"
      >
        <div class="col">
          <div class="details_container">
            <h4 class="title">
              <i class="fa-solid fa-water"></i>
              Humidity
            </h4>
            <div class="info">
              <p class="humidity">
                ${locations.map((x) => x.result.main?.humidity)}%
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
                ${locations.map((x) => x.result.wind?.speed)} m/s
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
              <p class="cloud">
                ${locations.map((x) => x.result.clouds?.all)}%
              </p>
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
                ${locations.map((x) => x.result?.visibility) * 0.001} km
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
