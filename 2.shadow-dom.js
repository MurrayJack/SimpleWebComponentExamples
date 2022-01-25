(function () {
  class ShadowDom extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: "open" });

      this.shadowRoot.innerHTML = `
        <p>
          Im in the shadow dom
        </p>`;
    }
  }

  customElements.define("shadow-dom", ShadowDom);
})();
