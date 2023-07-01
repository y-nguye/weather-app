import html from "../lib/core.js";
import { connect } from "../lib/store.js";

function Details() {
  return html`
    <div class="col">
      <img src="icons/humidity.png" />
      <p class="humdity">50%</p>
      <p>Humidity</p>
    </div>
  `;
}

export default connect()(Details);
