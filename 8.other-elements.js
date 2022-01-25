(function () {
  class ParagrahExample extends HTMLParagraphElement {
    constructor() {
      // Always call super first in constructor
      super();

      // count words in element's parent element
      const wcParent = this.parentNode;

      function countWords(node) {
        const text = node.innerText || node.textContent;
        return text.split(/\s+/g).length;
      }

      const count = `Words: ${countWords(wcParent)}`;

      // Create a shadow root
      const shadow = this.attachShadow({
        mode: "open"
      });

      // Create text node and add word count to it
      const text = document.createElement("span");
      text.textContent = count;

      // Append it to the shadow root
      shadow.appendChild(text);

      // Update count when element content changes
      text.textContent = count;

      // Create an observer instance linked to the callback function
      const observer = new MutationObserver(() => {
        debugger;
        text.textContent = `Words: ${countWords(wcParent)}`;
      });

      // Start observing the target node for configured mutations
      observer.observe(wcParent, {
        subtree: true,
        attributes: true,
        childList: true,
        characterData: true,
        characterDataOldValue: true
      });
    }
  }

  customElements.define("word-count", ParagrahExample, {
    extends: "p"
  });
})();
