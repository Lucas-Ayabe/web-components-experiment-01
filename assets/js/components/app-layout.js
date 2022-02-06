export default class AppLayout extends HTMLElement {
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

  static getCustomTagName() {
    return "app-layout";
  }
}
