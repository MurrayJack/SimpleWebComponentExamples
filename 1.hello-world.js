(function () {
  class HelloWorld extends HTMLElement {
    constructor() {
      super();

      this.innerText = "Hello StarRez";
    }
  }

  customElements.define("hello-world", HelloWorld);
})();
