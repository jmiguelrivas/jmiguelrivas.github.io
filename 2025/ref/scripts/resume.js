import {
  Phone,
  DateTime,
} from "./modules/classes.js";
import "./modules/template7.min.js";
import experiences from "./db/experiences.js";
import skill from "./db/skills.js";
import Navbar from "./components/navbar.js";

window.customElements.define('mr-navbar', Navbar);

const data = {
  name: "Fernando",
  name_middle: "Euclides",
  name_family: "Rivas",
  dob: new DateTime("03/09/1964"),
  website: {
    url: "https://fernando-e-rivas.github.io/",
    display: "fernando-e-rivas.github.io",
  },
  location: {
    url: "https://www.google.com/maps/place/santo+domingo/data=!4m2!3m1!1s0x8eaf89f1107ea5ab:0xd6c587b82715c164?sa=X&ved=2ahUKEwjdpfjjw6aAAxUvAjQIHWr4C_kQ8gF6BAgREAA&ved=2ahUKEwjdpfjjw6aAAxUvAjQIHWr4C_kQ8gF6BAgVEAE",
    display: "Santo Domingo",
  },
  phone: new Phone("809-653-4124"),
  email: "frivas600@gmail.com",
  title: "Arquitecto",
  summary: [
    "Aplicar y expandir mis conocimientos, produciendo resultados sólidos, especialmente en el área de Diseño, Planificación, Supervisión y Construcción. Manejo cuidadoso de la puntualidad y los plazos, así como la relación entre los diversos integrantes de un equipo, buscando siempre la excelencia en los resultados.",
    "Interactuar, orientar, planificar y coordinar con diversos profesionales para la integración a la obra civil de manera que haya resultados óptimos."
  ],
  skills: [
    skill.autocad,
    skill.word,
    skill.powerPoint,
    skill.excel,
    "Softwares para mantenimiento y uso interno del computador",
    "Utilitarios de Recuperación y Optimización de Disco",
  ],
  experiences,
  references: [
    {
      name: "Lic. Lorenza Bencosme",
      position: "Directora Regional, Zona Metropolitana Oeste, Banco de Reservas",
      tel: new Phone("809-604-4763"),
    },
    {
      name: "Lic. Euri Cabral",
      position: "Comunicador, Economista, Escritor.",
      tel: new Phone("809-803-5474"),
    },
    {
      name: "Lic. Yuri Rodriguez",
      position: "Exdirector de INABIMA",
      tel: new Phone("829-979-0167"),
    },
  ]
};

const app = document.getElementById('app');
const template = document.getElementById('template');
const compiled = Template7(template.innerHTML).compile();
const compiledRendered = compiled(data);

app.innerHTML = compiledRendered;