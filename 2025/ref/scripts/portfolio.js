import "./modules/template7.min.js";
import Navbar from "./components/navbar.js";
import { projectsPreview } from "./projects/index.js";

window.customElements.define('mr-navbar', Navbar);

const data = {
  projects: projectsPreview,
};

const app = document.getElementById('app');
const template = document.getElementById('template');
const compiled = Template7(template.innerHTML).compile();
const compiledRendered = compiled(data);

app.innerHTML = compiledRendered;