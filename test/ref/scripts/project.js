import "./modules/template7.min.js";
import Perspective from "./components/perspective.js";
import Navbar from "./components/navbar.js";
import { projects } from "./projects/index.js";

window.customElements.define('mr-perspective', Perspective);
window.customElements.define('mr-navbar', Navbar);

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')
const project = projects.filter(item => item.id === id)

const data = {
  projects: project
};

const app = document.getElementById('app');
const template = document.getElementById('template');
const compiled = Template7(template.innerHTML).compile();
const compiledRendered = compiled(data);

app.innerHTML = compiledRendered;