const withPreventDefault = (handler) => (event) => {
  event.preventDefault();
  handler(event);
};

export default class AppToDo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).innerHTML = `
      <style>
        @import url(https://unpkg.com/@picocss/pico@latest/css/pico.min.css);
    
        article {
          --block-spacing-vertical: 2em;
        }

        li {
          cursor: pointer;
          user-select: none;
        }
      </style>
      <article>
        <form>
          <input type="text" />
        </form>
        <ul></ul>
      </article>
    `;

    /** @type {Set<string>} */
    this._toDos = new Set([]);
    this.element = this.element.bind(this);
    this.renderToDo = this.renderToDo.bind(this);
    this.add = this.add.bind(this);
    this.delete = this.delete.bind(this);
  }

  static getCustomTagName() {
    return "app-to-do";
  }

  /**
   * @param {string} selectors
   * @returns {HTMLElement}
   */
  element(selectors) {
    return this.shadowRoot.querySelector(selectors);
  }

  connectedCallback() {
    const form = this.element("form");
    form.addEventListener("submit", withPreventDefault(this.add));
  }

  renderToDo(toDo) {
    const li = document.createElement("li");
    li.innerHTML = toDo;
    li.addEventListener("dblclick", this.delete);

    return li;
  }

  get value() {
    return this.element("input").value;
  }

  set value(value) {
    this.element("input").value = value;
  }

  set toDos(toDos) {
    this._toDos = new Set(toDos);

    this.element("ul").innerHTML = "";
    this.element("ul").append(...this.toDos.map(this.renderToDo));
  }

  get toDos() {
    return [...this._toDos];
  }

  add() {
    this.toDos = new Set([...this.toDos, this.value]);
    this.value = "";
  }

  delete({ target }) {
    const toDos = new Set(this.toDos);
    toDos.delete(target.innerHTML);
    this.toDos = toDos;
  }
}
