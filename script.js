customElements.define(
  "app-counter",
  class extends HTMLElement {
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
);

customElements.define(
  "app-nav",
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" }).innerHTML = `
        <style>
          @import url(https://unpkg.com/@picocss/pico@latest/css/pico.min.css);
      
          button {
            width: 5em;
          }
        </style>
        <nav>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
      `;
    }
  }
);

customElements.define(
  "app-layout",
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" }).innerHTML = `
        <style>
          @import url(https://unpkg.com/@picocss/pico@latest/css/pico.min.css);
      
          button {
            width: 5em;
          }
        </style>
        <main class="container">
          <app-nav></app-nav>
          <section>
            <slot name="content"></slot>
          </section>
        </main>
      `;
    }
  }
);
