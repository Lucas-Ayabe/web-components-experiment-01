export default class AppNav extends HTMLElement {
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

  static getCustomTagName() {
    return "app-nav";
  }
}
