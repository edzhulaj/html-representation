const components = [
  'basic-tags',
  'textual-tags',
  'lists-tags',
  'table-tags',
];

components.forEach(name => {
  customElements.define(name, class extends HTMLElement {
    connectedCallback() {
      fetch(`headers/${name}.html`)
        .then(r => r.text())
        .then(html => this.innerHTML = html);
    }
  });
});
