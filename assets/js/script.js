import AppCounter from "./components/app-counter.js";
import AppNav from "./components/app-nav.js";
import AppLayout from "./components/app-layout.js";

function register(component) {
  customElements.define(component.getCustomTagName(), component);
}

[AppCounter, AppNav, AppLayout].forEach(register);
