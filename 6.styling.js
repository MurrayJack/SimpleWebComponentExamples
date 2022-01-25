(function () {
  class StyledExample extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: "open" });

      this.shadowRoot.innerHTML = `
        <style>
          p {
            color: var(--color-main, blue)
          }
        </style>
        <p>
          I am styled in the component
        </p>`;
    }
  }

  customElements.define("styled-example", StyledExample);
})();
