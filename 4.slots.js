(function () {
  class Slots extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: "open" });

      this.shadowRoot.innerHTML = `
        <p>
          <slot />
        </p>`;
    }
  }

  customElements.define("slots-example", Slots);
})();
