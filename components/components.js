class BasicTags extends HTMLElement {
  connectedCallback() {
    fetch("headers/basic-tags.html")
      .then((response) => response.text())
      .then((html) => (this.innerHTML = html));
  }
}
customElements.define("basic-tags", BasicTags);
