export default class Perspective extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
      <div class="img"></div>
    `;
  };

  updateComponent() {
    const imgNode = this.querySelector(".img");
    const bgcolor = this.getAttribute(`mr-bgcolor`);
    const position = this.getAttribute(`mr-position`);
    const width = this.getAttribute(`mr-width`);
    const height = this.getAttribute(`mr-height`);
    const url = this.getAttribute(`mr-url`);

    imgNode.style.backgroundImage = `url("${ url }")`,
    imgNode.style.backgroundPosition = `${ position || "top" }`;
    imgNode.style.backgroundColor = `${ bgcolor || "#444" }`;
    imgNode.style.width = `${ width || 200 }px`;
    imgNode.style.height = `${ height || 200 }px`;
  };

  connectedCallback() {
    this.updateComponent();
  };

  static get observedAttributes() {
    return [
      'mr-bgcolor',
      'mr-position',
      'mr-width',
      'mr-height',
      'mr-url',
    ];
  };

  attributeChangedCallback(prop) {
    this.updateComponent();
  };
}