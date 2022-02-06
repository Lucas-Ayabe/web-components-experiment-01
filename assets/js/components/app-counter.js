export default class AppCounter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).innerHTML = `
      <style>
        @import url(https://unpkg.com/@picocss/pico@latest/css/pico.min.css);
    
        button {
          width: 5em;
        }
      </style>
      <button></button>
    `;

    this.increment = this.increment.bind(this);
  }

  static getCustomTagName() {
    return "app-counter";
  }

  connectedCallback() {
    const counter = this.shadowRoot.querySelector("button");
    counter.addEventListener("click", this.increment);
    this.count = 0;
  }

  set count(count) {
    const counter = this.shadowRoot.querySelector("button");
    counter.value = count;
    counter.innerHTML = count;
  }

  get count() {
    const counter = this.shadowRoot.querySelector("button");
    return counter.value;
  }

  increment() {
    this.count++;
  }
}
