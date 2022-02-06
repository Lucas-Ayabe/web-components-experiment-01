import AppCounter from "./components/app-counter.js";
import AppToDo from "./components/app-to-do.js";
import AppNav from "./components/app-nav.js";
import AppLayout from "./components/app-layout.js";

function register(component) {
  customElements.define(component.getCustomTagName(), component);
}

[AppCounter, AppToDo, AppNav, AppLayout].forEach(register);
