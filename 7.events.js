(function () {
  class EventsExample extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: "open" });

      // Define the event
      this.event = new CustomEvent("event", {
        bubbles: false,
        cancelable: false
      });

      this.shadowRoot.innerHTML = `
        <div>
          <button>
            click me
          </button>
        </div>
        `;

      // attach an event ot the button and fire the event
      this.shadowRoot.querySelector("button").addEventListener("click", () => {
        this.dispatchEvent(this.event);
      });
    }
  }

  customElements.define("events-example", EventsExample);
})();
