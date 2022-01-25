(function () {
  class SlotsNamed extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: "open" });

      this.shadowRoot.innerHTML = `
        <div>
          <slot name="top"></slot>
          <hr />
          <slot name="bottom"></slot>
        </div>`;
    }
  }

  customElements.define("slots-named", SlotsNamed);
})();
