const routes = [
  {
    name: "Hoja de Vida",
    url: '/',
    value: 'resume',
  },
  {
    name: "Portafolio",
    url: '/portfolio.html',
    value: 'portfolio',
  },
]

export default class Navbar extends HTMLElement {
  constructor() {
    super();
  };

  updateComponent() {
    const current = this.getAttribute(`mr-current-route`);
    
    let links = '';

    routes.forEach(item => {
      links += `
      <li>
        <a ${item.value !== current ? `target="_self" href="${item.url}"` : '' }>${item.name}</a>
      </li>
      `
    })

    this.innerHTML = `
    <nav>
      <div class="container-max">
        <a href="/" class="branding">
          <img src="img/logo.svg" alt="Logo Arcad" />
        </a>
        <ul>
          ${links}
        </ul>
      </div>
    </nav>
    `;
  };

  connectedCallback() {
    this.updateComponent();
  };

  static get observedAttributes() {
    return [
      'mr-current-route',
    ];
  };

  attributeChangedCallback() {
    this.updateComponent();
  };
}