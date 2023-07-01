import { createStore } from "../lib/core.js";
import reducer from "../lib/reducer.js";

const { attach, connect, dispatch } = createStore(reducer);

window.dispatch = dispatch;

export { attach, connect };
