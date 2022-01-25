(function () {
  class Attributes extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });

      this.shadowRoot.innerHTML = `<p>${this.value}</p>`;
    }

    // gets the value from the attributes
    get value() {
      return this.getAttribute("value");
    }
  }

  customElements.define("attribute-value", Attributes);
})();
